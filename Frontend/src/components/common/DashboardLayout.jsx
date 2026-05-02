import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { getProfile } from '../../api/auth'

const DashboardLayout = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: 'Loading...', profilePhoto: '' });

  const navItems = [
    { name: 'Intelligence', icon: 'analytics', path: '/dashboard', parent: 'Intelligence', label: 'Main Dashboard' },
    { name: 'Market Map', icon: 'explore_nearby', path: '/neighborhood', parent: 'Intelligence', label: 'Market Map' },
    { name: 'Commute Check', icon: 'directions_car', path: '/commute-check', parent: 'Forensics', label: 'Commute Audit' },
  ];

  // Dynamically determine breadcrumb based on current path
  const getBreadcrumb = () => {
    const current = navItems.find(item => item.path === location.pathname);
    if (!current) return { parent: 'PropSight 360', label: 'Dashboard' };
    return current;
  };

  const breadcrumb = getBreadcrumb();

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
        setUser({ name: 'Guest User', profilePhoto: '' });
      }
    };
    fetchProfile();
  }, []);

  return (
    <div className="flex h-screen bg-surface-dim text-on-surface font-body-md selection:bg-primary selection:text-on-primary overflow-hidden">
      {/* SideNavBar */}
      <aside className="w-[220px] h-screen border-r border-white/5 bg-[#0A0F14] flex flex-col gap-2 p-4 z-50 shrink-0 no-print">
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
        <header className="sticky top-0 w-full z-40 bg-[#0A0F14]/80 border-b border-white/10 backdrop-blur-md flex items-center justify-between px-8 py-3 h-[64px] no-print">
          <div className="flex items-center gap-6 flex-1">
            <nav className="flex items-center gap-2 font-mono text-[10px] tracking-widest text-slate-400 uppercase font-bold">
              <span>{breadcrumb.parent}</span>
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              <span className="text-primary">{breadcrumb.label}</span>
            </nav>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[20px]">location_on</span>
              <span className="font-mono text-xs tracking-widest uppercase">Ahmedabad, GJ</span>
            </div>
          </div>
        </header>

        {/* Scrollable Stage */}
        <main className="flex-1 overflow-y-auto no-scrollbar bg-[#05080A]">
          {children}
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout
