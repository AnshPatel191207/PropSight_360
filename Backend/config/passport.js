const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/User');

module.exports = function (passport) {
  const callbackURL = process.env.NODE_ENV === 'production'
    ? `${process.env.PRODUCTION_URL}/api/auth/google/callback`
    : process.env.CALLBACK_URL;

  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: callbackURL,
      },
      async (accessToken, refreshToken, profile, done) => {
        const newUser = {
          googleId: profile.id,
          fullName: profile.displayName,
          email: profile.emails[0].value,
          profilePhoto: profile.photos[0]?.value || '',
          isVerified: true,
        };

        try {
          // Check if user already exists by googleId OR email
          let user = await User.findOne({ 
            $or: [
              { googleId: profile.id },
              { email: profile.emails[0].value }
            ]
          });

          if (user) {
            // Update googleId if not set (linking accounts)
            let isModified = false;
            if (!user.googleId) {
              user.googleId = profile.id;
              isModified = true;
            }

            // Sync photo if missing or changed
            const newPhoto = profile.photos && profile.photos[0] ? profile.photos[0].value : '';
            if (newPhoto && user.profilePhoto !== newPhoto) {
              user.profilePhoto = newPhoto;
              isModified = true;
            }

            // Sync name if different
            if (profile.displayName && user.fullName !== profile.displayName) {
              user.fullName = profile.displayName;
              isModified = true;
            }

            // Mark as verified if logging in via Google
            if (!user.isVerified) {
              user.isVerified = true;
              isModified = true;
            }

            if (isModified) {
              await user.save();
            }
            
            done(null, user);
          } else {
            // Create a completely new user
            user = await User.create(newUser);
            done(null, user);
          }
        } catch (err) {
          console.error(err);
          done(err, null);
        }
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findById(id);
      done(null, user);
    } catch (err) {
      done(err, null);
    }
  });
};
