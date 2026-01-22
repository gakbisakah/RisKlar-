import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { NAVIGATION } from '../../utils/constants';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [activeNav, setActiveNav] = useState('');
  const [isLandingPage, setIsLandingPage] = useState(false);
  const [isAuthPage, setIsAuthPage] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Cek halaman saat ini
    const currentPath = location.pathname;
    setIsLandingPage(currentPath === NAVIGATION.LANDING);
    setIsAuthPage(currentPath === NAVIGATION.AUTH);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Hanya jalankan deteksi section jika di landing page
      if (currentPath === NAVIGATION.LANDING) {
        const sections = ['tentang', 'cara-kerja', 'target', 'batasan'];
        const currentSection = sections.find(section => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 120 && rect.bottom >= 120;
          }
          return false;
        });
        setActiveNav(currentSection || '');
      }
    };

    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setIsLoggedIn(true);
      setUserRole(user.role);
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setUserRole(null);
    navigate(NAVIGATION.LANDING);
  };

  const getDashboardLink = () => {
    switch(userRole) {
      case 'umkm': return NAVIGATION.DASHBOARD_UMKM;
      case 'investor': return NAVIGATION.DASHBOARD_INVESTOR;
      case 'mentor': return NAVIGATION.DASHBOARD_MENTOR;
      default: return NAVIGATION.LANDING;
    }
  };

  const navItems = [
    { id: 'tentang', label: 'Tentang Sistem', icon: 'fas fa-info-circle', color: '#4361ee' },
    { id: 'cara-kerja', label: 'Cara Kerja', icon: 'fas fa-cogs', color: '#4cc9f0' },
    { id: 'target', label: 'Untuk Siapa', icon: 'fas fa-users', color: '#f72585' },
    { id: 'batasan', label: 'Batas Sistem', icon: 'fas fa-exclamation-triangle', color: '#f8961e' }
  ];

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${isScrolled ? 'navbar-scrolled' : 'navbar-transparent'}`}
         style={{ 
           zIndex: 1030,
           padding: isScrolled ? '12px 0' : '20px 0',
           transition: 'all 0.3s ease-in-out',
           background: isScrolled 
             ? 'linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.95) 100%)' 
             : 'rgba(255, 255, 255, 0.98)',
           backdropFilter: 'blur(10px)',
           WebkitBackdropFilter: 'blur(10px)',
           boxShadow: isScrolled 
             ? '0 4px 30px rgba(0, 0, 0, 0.1)' 
             : '0 2px 20px rgba(0, 0, 0, 0.08)',
           borderBottom: '1px solid rgba(0,0,0,0.05)'
         }}>
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center" to={NAVIGATION.LANDING}>
          <div className="logo-container me-3" style={{
            width: '45px',
            height: '45px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #4361ee 0%, #3a0ca3 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 15px rgba(67, 97, 238, 0.3)'
          }}>
            <i className="fas fa-handshake text-white fs-5"></i>
          </div>
          <div>
            <h4 className="fw-bold mb-0" style={{ 
              fontSize: '1.5rem',
              background: 'linear-gradient(135deg, #4361ee 0%, #3a0ca3 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              UMKM<span style={{ color: '#1e293b' }}>Invest</span>
            </h4>
            <small className="text-muted d-none d-md-block" style={{ fontSize: '0.75rem' }}>
              Platform Transparan
            </small>
          </div>
        </Link>

        {/* Mobile Toggle */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                style={{
                  border: '1px solid rgba(0,0,0,0.1)',
                  padding: '8px 12px',
                  borderRadius: '8px'
                }}>
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Menu */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center gap-2">
            {/* Navigation Items - Hanya tampil di Landing Page */}
            {isLandingPage && navItems.map((item) => (
              <li className="nav-item" key={item.id}>
                <a 
                  className="nav-link position-relative"
                  href={`/#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById(item.id);
                    if (element) {
                      const offset = 120;
                      const elementPosition = element.getBoundingClientRect().top;
                      const offsetPosition = elementPosition + window.pageYOffset - offset;
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                      });
                    }
                  }}
                  style={{
                    color: activeNav === item.id ? item.color : '#64748b',
                    fontWeight: activeNav === item.id ? '600' : '500',
                    fontSize: '0.95rem',
                    padding: '8px 16px',
                    borderRadius: '8px',
                    transition: 'all 0.3s ease',
                    background: activeNav === item.id ? `${item.color}10` : 'transparent',
                    border: '1px solid transparent',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                  onMouseEnter={(e) => {
                    if (activeNav !== item.id) {
                      e.currentTarget.style.background = `${item.color}08`;
                      e.currentTarget.style.borderColor = `${item.color}20`;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeNav !== item.id) {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.borderColor = 'transparent';
                    }
                  }}
                >
                  <i className={item.icon} style={{ fontSize: '0.9rem' }}></i>
                  {item.label}
                  {activeNav === item.id && (
                    <span style={{
                      position: 'absolute',
                      bottom: '-4px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '20px',
                      height: '3px',
                      background: item.color,
                      borderRadius: '3px'
                    }}></span>
                  )}
                </a>
              </li>
            ))}

            {/* Divider - Hanya tampil jika ada navigation items */}
            {isLandingPage && navItems.length > 0 && (
              <li className="nav-item">
                <div style={{
                  width: '1px',
                  height: '24px',
                  background: 'rgba(0,0,0,0.1)',
                  margin: '0 8px'
                }}></div>
              </li>
            )}

            {/* Tombol Kembali - Hanya tampil di Auth Page */}
            {isAuthPage && !isLoggedIn && (
              <li className="nav-item">
                <Link 
                  className="btn btn-sm"
                  to={NAVIGATION.LANDING}
                  style={{
                    background: 'rgba(67, 97, 238, 0.1)',
                    color: '#4361ee',
                    padding: '8px 20px',
                    borderRadius: '8px',
                    border: '1px solid rgba(67, 97, 238, 0.2)',
                    fontWeight: '500',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(67, 97, 238, 0.15)';
                    e.currentTarget.style.borderColor = 'rgba(67, 97, 238, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(67, 97, 238, 0.1)';
                    e.currentTarget.style.borderColor = 'rgba(67, 97, 238, 0.2)';
                  }}
                >
                  <i className="fas fa-arrow-left"></i>
                  Kembali ke LandingPage
                </Link>
              </li>
            )}

            {/* Dashboard & Logout - Tampil jika user sudah login di semua halaman */}
            {isLoggedIn ? (
              <>
                <li className="nav-item">
                  <Link 
                    className="btn btn-sm"
                    to={getDashboardLink()}
                    style={{
                      background: 'linear-gradient(135deg, #4361ee 0%, #3a0ca3 100%)',
                      color: 'white',
                      padding: '8px 20px',
                      borderRadius: '8px',
                      border: 'none',
                      fontWeight: '500',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      boxShadow: '0 4px 15px rgba(67, 97, 238, 0.3)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 6px 20px rgba(67, 97, 238, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 15px rgba(67, 97, 238, 0.3)';
                    }}
                  >
                    <i className="fas fa-tachometer-alt"></i>
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <button 
                    className="btn btn-sm"
                    onClick={handleLogout}
                    style={{
                      background: 'rgba(239, 68, 68, 0.1)',
                      color: '#ef4444',
                      padding: '8px 16px',
                      borderRadius: '8px',
                      border: '1px solid rgba(239, 68, 68, 0.2)',
                      fontWeight: '500',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(239, 68, 68, 0.15)';
                      e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(239, 68, 68, 0.1)';
                      e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.2)';
                    }}
                  >
                    <i className="fas fa-sign-out-alt"></i>
                    Keluar
                  </button>
                </li>
              </>
            ) : (
              /* Tombol Masuk & Daftar - Hanya tampil di Landing Page (bukan di Auth Page) */
              isLandingPage && (
                <>
                  <li className="nav-item">
                    <Link 
                      className="btn btn-sm"
                      to={NAVIGATION.AUTH}
                      style={{
                        background: 'transparent',
                        color: '#4361ee',
                        padding: '8px 20px',
                        borderRadius: '8px',
                        border: '1px solid rgba(67, 97, 238, 0.3)',
                        fontWeight: '500',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(67, 97, 238, 0.05)';
                        e.currentTarget.style.borderColor = 'rgba(67, 97, 238, 0.5)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.borderColor = 'rgba(67, 97, 238, 0.3)';
                      }}
                    >
                      <i className="fas fa-sign-in-alt"></i>
                      Masuk
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link 
                      className="btn btn-sm"
                      to={NAVIGATION.AUTH}
                      style={{
                        background: 'linear-gradient(135deg, #4361ee 0%, #3a0ca3 100%)',
                        color: 'white',
                        padding: '8px 24px',
                        borderRadius: '8px',
                        border: 'none',
                        fontWeight: '500',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        boxShadow: '0 4px 15px rgba(67, 97, 238, 0.3)',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 6px 20px rgba(67, 97, 238, 0.4)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 15px rgba(67, 97, 238, 0.3)';
                      }}
                    >
                      <i className="fas fa-user-plus"></i>
                      Daftar
                    </Link>
                  </li>
                </>
              )
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;