import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { getProfile } from '../../api/auth'

const DashboardLayout = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: 'Loading...', profilePhoto: '' });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getProfile();
        if (data.success && data.user) {
          setUser({
            name: data.user.name || 'User',
            profilePhoto: data.user.profilePhoto || ''
          });
        }
      } catch (err) {
        console.error('Session expired or unauthorized');
        setUser({ name: 'Guest User', profilePhoto: '' });
      }
    };
    fetchProfile();
  }, []);

  const navItems = [
    { name: 'Intelligence', icon: 'analytics', path: '/dashboard' },
    { name: 'Market Map', icon: 'explore_nearby', path: '/neighborhood' },
    { name: 'Forensics', icon: 'security', path: '/forensics' },
    { name: 'Commute Check', icon: 'directions_car', path: '/commute-check' },
  ];

  return (
    <div className="flex h-screen bg-surface-dim text-on-surface font-body-md selection:bg-primary selection:text-on-primary overflow-hidden">
      {/* SideNavBar */}
      <aside className="w-[220px] h-screen border-r border-white/5 bg-[#0A0F14] flex flex-col gap-2 p-4 z-50 shrink-0">
        <div className="mb-8 px-3">
          <Link to="/">
            <h1 className="text-lg font-black tracking-tighter text-[#00D4AA]">PropSight 360</h1>
          </Link>
          <p className="font-mono text-[10px] tracking-tight uppercase text-slate-500">Ahmedabad, GJ</p>
        </div>
        <nav className="flex-1 flex flex-col gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`rounded-sm py-2 px-3 border-l-2 flex items-center gap-3 font-mono text-xs tracking-tight uppercase transition-all active:scale-[0.98] ${
                location.pathname === item.path
                  ? 'bg-primary/5 text-[#00D4AA] border-[#00D4AA]'
                  : 'text-slate-500 hover:text-slate-200 hover:bg-white/5 border-transparent'
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">{item.icon}</span> {item.name}
            </Link>
          ))}
        </nav>
        
        <div className="mt-4 p-3 bg-primary-container/10 rounded-lg border border-primary-container/20">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-full bg-surface-variant overflow-hidden flex items-center justify-center">
              {user.profilePhoto ? (
                <img 
                  className="w-full h-full object-cover" 
                  src={user.profilePhoto} 
                  alt="Profile"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <span className="material-symbols-outlined text-slate-400">account_circle</span>
              )}
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="text-[11px] font-bold truncate">{user.name}</p>
            </div>
          </div>
          <button 
            onClick={() => navigate('/')}
            className="w-full py-2 bg-primary text-black font-label-caps text-[10px] rounded hover:brightness-110 transition-all uppercase font-bold"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content Wrapper */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* TopAppBar */}
        <header className="sticky top-0 w-full z-40 bg-[#0A0F14]/80 border-b border-white/10 backdrop-blur-md flex items-center justify-between px-8 py-3 h-[64px]">
          <div className="flex items-center gap-6 flex-1">
            {location.pathname === '/commute-check' ? (
              <nav className="flex items-center gap-2 font-mono text-[10px] tracking-widest text-slate-400 uppercase font-bold">
                <span>Intelligence</span>
                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                <span>Forensics</span>
                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                <span className="text-primary">Commute Audit</span>
              </nav>
            ) : (
              <div className="relative w-full max-w-md">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[18px]">search</span>
                <input 
                  className="w-full bg-white/5 border border-white/10 rounded px-10 py-1.5 text-xs font-mono focus:outline-none focus:border-primary/50 text-on-surface" 
                  placeholder="Search Plot No, Khata ID, or Builder..." 
                  type="text"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-mono text-slate-500 bg-white/5 px-1 rounded border border-white/10">⌘K</span>
              </div>
            )}
          </div>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-4 border-r border-white/10 pr-5">
              <button className="text-slate-400 hover:text-[#00D4AA] transition-colors cursor-pointer active:opacity-70"><span className="material-symbols-outlined">notifications_active</span></button>
              <button className="text-slate-400 hover:text-[#00D4AA] transition-colors cursor-pointer active:opacity-70"><span className="material-symbols-outlined">account_balance_wallet</span></button>
              <button className="text-slate-400 hover:text-[#00D4AA] transition-colors cursor-pointer active:opacity-70"><span className="material-symbols-outlined">history</span></button>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[20px]">location_on</span>
              <span className="font-mono text-xs tracking-widest uppercase">Ahmedabad, GJ</span>
            </div>
          </div>
        </header>

        {/* Scrollable Stage */}
        <main className="flex-1 overflow-y-auto no-scrollbar">
          {children}
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout
