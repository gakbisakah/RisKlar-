import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import RoleSelection from '../components/auth/RoleSelection';
import RegisterUMKM from '../components/auth/RegisterUMKM';
import RegisterInvestor from '../components/auth/RegisterInvestor';
import { DUMMY_ACCOUNTS, NAVIGATION } from '../utils/constants';

const AuthPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('login');
  const [selectedRole, setSelectedRole] = useState(null);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({
        duration: 800,
        once: true
      });
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const { email, password } = loginData;
    
    // Check dummy accounts (only UMKM and Investor)
    const accountKey = Object.keys(DUMMY_ACCOUNTS).find(key => 
      DUMMY_ACCOUNTS[key].email === email && DUMMY_ACCOUNTS[key].password === password &&
      (DUMMY_ACCOUNTS[key].role === 'umkm' || DUMMY_ACCOUNTS[key].role === 'investor')
    );

    setTimeout(() => {
      if (accountKey) {
        const account = DUMMY_ACCOUNTS[accountKey];
        
        // Create user data based on role
        let userData = {
          email: account.email,
          role: account.role,
          nama: '',
          timestamp: new Date().toISOString()
        };

        // Add role-specific data
        if (account.role === 'umkm') {
          userData.nama = 'Kopi Lereng Arjuna';
          userData.skorAwal = 62;
          userData.status = 'Layak Ditampilkan';
        } else if (account.role === 'investor') {
          userData.nama = 'Angel Investor';
          userData.statusEdukasi = 'Sudah Paham';
        }

        localStorage.setItem('user', JSON.stringify(userData));
        localStorage.setItem('auth_token', `dummy_token_${account.role}`);
        
        // Redirect based on role
        if (account.role === 'umkm') {
          navigate(NAVIGATION.DASHBOARD_UMKM);
        } else if (account.role === 'investor') {
          navigate(NAVIGATION.DASHBOARD_INVESTOR);
        }
      } else {
        setError('Email atau password salah. Gunakan akun demo yang tersedia.');
      }
      setLoading(false);
    }, 1500);
  };

  const renderRegisterForm = () => {
    switch(selectedRole) {
      case 'umkm':
        return <RegisterUMKM />;
      case 'investor':
        return <RegisterInvestor />;
      default:
        return <RoleSelection onSelectRole={setSelectedRole} />;
    }
  };

  // Only show UMKM and Investor demo accounts
  const demoAccounts = {
    umkm: DUMMY_ACCOUNTS.umkm,
    investor: DUMMY_ACCOUNTS.investor
  };

  return (
    <div className="auth-page" style={{ 
      paddingTop: '100px',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Pattern */}
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{
        backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(67, 97, 238, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(16, 185, 129, 0.05) 0%, transparent 50%)',
        zIndex: 0
      }}></div>

      <div className="container position-relative z-1">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-10 col-xl-8">
            {/* Header */}
            <div className="text-center mb-5" data-aos="fade-up">
              <div className="logo-container mx-auto mb-4" style={{
                width: '100px',
                height: '100px',
                borderRadius: '25px',
                background: 'linear-gradient(135deg, #4361ee 0%, #3a0ca3 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 10px 40px rgba(67, 97, 238, 0.3)'
              }}>
                <i className="fas fa-handshake text-white fs-2"></i>
              </div>
              <h1 className="display-4 fw-bold mb-3" style={{ 
                background: 'linear-gradient(135deg, #4361ee 0%, #3a0ca3 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                UMKM<span style={{ color: '#1e293b' }}>Invest</span>
              </h1>
              <p className="lead text-muted mb-0 mx-auto" style={{ maxWidth: '500px' }}>
                Akses platform transparan untuk investasi UMKM yang bertanggung jawab
              </p>
            </div>

            {/* Auth Card */}
            <div className="card border-0 shadow-lg rounded-3 overflow-hidden" data-aos="fade-up" data-aos-delay="200"
                 style={{
                   background: 'rgba(255, 255, 255, 0.95)',
                   backdropFilter: 'blur(10px)'
                 }}>
              
              {/* Tabs with Gradient Background */}
              <div className="card-header border-0 p-0">
                <div className="d-flex" role="tablist" style={{
                  background: 'linear-gradient(135deg, #4361ee 0%, #3a0ca3 100%)'
                }}>
                  <button
                    className={`btn flex-fill py-4 ${activeTab === 'login' ? 'bg-white text-primary' : 'text-white'}`}
                    onClick={() => {
                      setActiveTab('login');
                      setSelectedRole(null);
                      setError('');
                    }}
                    style={{ 
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      borderRadius: '0',
                      transition: 'all 0.3s ease',
                      border: 'none'
                    }}
                  >
                    <i className="fas fa-sign-in-alt me-2"></i>
                    Masuk ke Akun
                  </button>
                  <button
                    className={`btn flex-fill py-4 ${activeTab === 'register' ? 'bg-white text-primary' : 'text-white'}`}
                    onClick={() => {
                      setActiveTab('register');
                      setSelectedRole(null);
                      setError('');
                    }}
                    style={{ 
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      borderRadius: '0',
                      transition: 'all 0.3s ease',
                      border: 'none'
                    }}
                  >
                    <i className="fas fa-user-plus me-2"></i>
                    Buat Akun Baru
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="card-body p-4 p-md-5">
                {activeTab === 'login' ? (
                  <div data-aos="fade-up">
                    <form onSubmit={handleLogin}>
                      {error && (
                        <div className="alert alert-danger border-0 rounded-3 mb-4" data-aos="fade-up"
                             style={{ 
                               background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(239, 68, 68, 0.05) 100%)',
                               border: '1px solid rgba(239, 68, 68, 0.2)'
                             }}>
                          <div className="d-flex align-items-center">
                            <i className="fas fa-exclamation-circle text-danger me-3 fs-4"></i>
                            <div>
                              <h6 className="text-danger mb-1">Gagal Masuk</h6>
                              <small>{error}</small>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      <div className="mb-4" data-aos="fade-up" data-aos-delay="100">
                        <label className="form-label fw-bold mb-3" style={{ color: '#1e293b' }}>
                          <i className="fas fa-envelope text-primary me-2"></i>
                          Email
                        </label>
                        <div className="input-group input-group-lg">
                          <span className="input-group-text bg-light border-end-0" style={{
                            borderTopLeftRadius: '12px',
                            borderBottomLeftRadius: '12px',
                            padding: '16px 20px'
                          }}>
                            <i className="fas fa-at text-muted"></i>
                          </span>
                          <input
                            type="email"
                            className="form-control border-start-0 ps-0"
                            value={loginData.email}
                            onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                            placeholder="contoh@demo.id"
                            required
                            style={{
                              borderTopRightRadius: '12px',
                              borderBottomRightRadius: '12px',
                              padding: '16px 20px',
                              fontSize: '1rem',
                              border: '2px solid #e2e8f0'
                            }}
                          />
                        </div>
                      </div>
                      
                      <div className="mb-4" data-aos="fade-up" data-aos-delay="200">
                        <label className="form-label fw-bold mb-3" style={{ color: '#1e293b' }}>
                          <i className="fas fa-lock text-primary me-2"></i>
                          Password
                        </label>
                        <div className="input-group input-group-lg">
                          <span className="input-group-text bg-light border-end-0" style={{
                            borderTopLeftRadius: '12px',
                            borderBottomLeftRadius: '12px',
                            padding: '16px 20px'
                          }}>
                            <i className="fas fa-key text-muted"></i>
                          </span>
                          <input
                            type={showPassword ? "text" : "password"}
                            className="form-control border-start-0 ps-0"
                            value={loginData.password}
                            onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                            placeholder="••••••••"
                            required
                            style={{
                              padding: '16px 20px',
                              fontSize: '1rem',
                              border: '2px solid #e2e8f0',
                              borderLeft: 'none',
                              borderRight: 'none'
                            }}
                          />
                          <button
                            type="button"
                            className="input-group-text bg-light border-start-0"
                            onClick={() => setShowPassword(!showPassword)}
                            style={{
                              borderTopRightRadius: '12px',
                              borderBottomRightRadius: '12px',
                              padding: '16px 20px',
                              cursor: 'pointer'
                            }}
                          >
                            <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'} text-muted`}></i>
                          </button>
                        </div>
                        <small className="text-muted mt-2 d-block">
                          <i className="fas fa-info-circle me-1"></i>
                          Password akan ditampilkan untuk kemudahan testing
                        </small>
                      </div>
                      
                      <div className="d-grid mt-5" data-aos="fade-up" data-aos-delay="300">
                        <button 
                          type="submit" 
                          className="btn btn-lg py-3"
                          disabled={loading}
                          style={{
                            background: 'linear-gradient(135deg, #4361ee 0%, #3a0ca3 100%)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '12px',
                            fontWeight: '600',
                            fontSize: '1.1rem',
                            boxShadow: '0 4px 20px rgba(67, 97, 238, 0.3)',
                            transition: 'all 0.3s ease'
                          }}
                          onMouseEnter={(e) => {
                            if (!loading) {
                              e.currentTarget.style.transform = 'translateY(-2px)';
                              e.currentTarget.style.boxShadow = '0 8px 30px rgba(67, 97, 238, 0.4)';
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (!loading) {
                              e.currentTarget.style.transform = 'translateY(0)';
                              e.currentTarget.style.boxShadow = '0 4px 20px rgba(67, 97, 238, 0.3)';
                            }
                          }}
                        >
                          {loading ? (
                            <>
                              <span className="spinner-border spinner-border-sm me-2"></span>
                              Memproses...
                            </>
                          ) : (
                            <>
                              <i className="fas fa-sign-in-alt me-2"></i>
                              Masuk ke Platform
                            </>
                          )}
                        </button>
                      </div>
                    </form>

                    {/* Demo Accounts */}
                    <div className="mt-5 pt-5 border-top" data-aos="fade-up" data-aos-delay="400">
                      <div className="text-center mb-4">
                        <h5 className="mb-3" style={{ color: '#1e293b' }}>
                          <i className="fas fa-key text-warning me-2"></i>
                          Akun Demo yang Tersedia
                        </h5>
                        <p className="text-muted mb-0">Gunakan akun berikut untuk testing platform</p>
                      </div>
                      
                      <div className="row g-4">
                        {Object.entries(demoAccounts).map(([role, account]) => (
                          <div key={role} className="col-md-6">
                            <div className="demo-account-card p-4 rounded-3 h-100"
                                 style={{
                                   background: role === 'umkm' 
                                     ? 'linear-gradient(135deg, rgba(67, 97, 238, 0.1) 0%, rgba(67, 97, 238, 0.05) 100%)'
                                     : 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%)',
                                   border: `2px solid ${role === 'umkm' ? 'rgba(67, 97, 238, 0.2)' : 'rgba(16, 185, 129, 0.2)'}`,
                                   transition: 'all 0.3s ease',
                                   cursor: 'pointer'
                                 }}
                                 onMouseEnter={(e) => {
                                   e.currentTarget.style.transform = 'translateY(-5px)';
                                   e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                                 }}
                                 onMouseLeave={(e) => {
                                   e.currentTarget.style.transform = 'translateY(0)';
                                   e.currentTarget.style.boxShadow = 'none';
                                 }}
                                 onClick={() => {
                                   setLoginData({
                                     email: account.email,
                                     password: account.password
                                   });
                                   setShowPassword(true);
                                 }}>
                              <div className="d-flex align-items-center mb-3">
                                <div className={`demo-role-icon rounded-3 p-3 me-3 ${role === 'umkm' ? 'bg-primary' : 'bg-success'}`}
                                     style={{
                                       width: '60px',
                                       height: '60px',
                                       display: 'flex',
                                       alignItems: 'center',
                                       justifyContent: 'center'
                                     }}>
                                  <i className={`fas fa-${role === 'umkm' ? 'store' : 'chart-line'} text-white fs-3`}></i>
                                </div>
                                <div>
                                  <h6 className="mb-1 fw-bold text-uppercase" style={{ 
                                    color: role === 'umkm' ? '#4361ee' : '#10b981'
                                  }}>
                                    {role === 'umkm' ? 'UMKM' : 'Investor'}
                                  </h6>
                                  <small className="text-muted">Klik untuk mengisi otomatis</small>
                                </div>
                              </div>
                              
                              <div className="demo-credentials">
                                <div className="mb-2">
                                  <small className="text-muted d-block mb-1">
                                    <i className="fas fa-envelope me-1"></i>
                                    Email
                                  </small>
                                  <div className="input-group input-group-sm">
                                    <input
                                      type="text"
                                      className="form-control"
                                      value={account.email}
                                      readOnly
                                      style={{
                                        background: 'white',
                                        border: '1px solid rgba(0,0,0,0.1)',
                                        borderRadius: '8px',
                                        fontSize: '0.9rem'
                                      }}
                                    />
                                    <button
                                      type="button"
                                      className="btn btn-sm"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        navigator.clipboard.writeText(account.email);
                                        const btn = e.currentTarget;
                                        const original = btn.innerHTML;
                                        btn.innerHTML = '<i class="fas fa-check"></i>';
                                        setTimeout(() => {
                                          btn.innerHTML = original;
                                        }, 2000);
                                      }}
                                      style={{
                                        background: 'rgba(0,0,0,0.05)',
                                        border: '1px solid rgba(0,0,0,0.1)',
                                        borderRadius: '0 8px 8px 0'
                                      }}
                                    >
                                      <i className="fas fa-copy"></i>
                                    </button>
                                  </div>
                                </div>
                                
                                <div>
                                  <small className="text-muted d-block mb-1">
                                    <i className="fas fa-key me-1"></i>
                                    Password
                                  </small>
                                  <div className="input-group input-group-sm">
                                    <input
                                      type="text"
                                      className="form-control"
                                      value={account.password}
                                      readOnly
                                      style={{
                                        background: 'white',
                                        border: '1px solid rgba(0,0,0,0.1)',
                                        borderRadius: '8px',
                                        fontSize: '0.9rem'
                                      }}
                                    />
                                    <button
                                      type="button"
                                      className="btn btn-sm"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        navigator.clipboard.writeText(account.password);
                                        const btn = e.currentTarget;
                                        const original = btn.innerHTML;
                                        btn.innerHTML = '<i class="fas fa-check"></i>';
                                        setTimeout(() => {
                                          btn.innerHTML = original;
                                        }, 2000);
                                      }}
                                      style={{
                                        background: 'rgba(0,0,0,0.05)',
                                        border: '1px solid rgba(0,0,0,0.1)',
                                        borderRadius: '0 8px 8px 0'
                                      }}
                                    >
                                      <i className="fas fa-copy"></i>
                                    </button>
                                  </div>
                                </div>
                              </div>
                              
                              <div className="mt-3 pt-3 border-top">
                                <button
                                  className="btn btn-sm w-100"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setLoginData({
                                      email: account.email,
                                      password: account.password
                                    });
                                    handleLogin(e);
                                  }}
                                  style={{
                                    background: role === 'umkm' 
                                      ? 'rgba(67, 97, 238, 0.1)' 
                                      : 'rgba(16, 185, 129, 0.1)',
                                    color: role === 'umkm' ? '#4361ee' : '#10b981',
                                    border: `1px solid ${role === 'umkm' ? 'rgba(67, 97, 238, 0.2)' : 'rgba(16, 185, 129, 0.2)'}`,
                                    borderRadius: '8px',
                                    fontWeight: '500'
                                  }}
                                >
                                  <i className="fas fa-rocket me-2"></i>
                                  Login dengan akun ini
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="alert alert-info border-0 rounded-3 mt-4"
                           style={{ 
                             background: 'rgba(59, 130, 246, 0.1)',
                             border: '1px solid rgba(59, 130, 246, 0.2)'
                           }}>
                        <div className="d-flex align-items-center">
                          <i className="fas fa-lightbulb text-info me-3 fs-4"></i>
                          <div>
                            <h6 className="text-info mb-1">Tips Penggunaan Demo</h6>
                            <small className="text-muted">
                              • Klik kartu untuk mengisi formulir otomatis<br/>
                              • Password ditampilkan untuk kemudahan testing<br/>
                              • Gunakan tombol "Login dengan akun ini" untuk login cepat
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div data-aos="fade-up">
                    {renderRegisterForm()}
                    
                    {selectedRole && (
                      <div className="mt-4 text-center">
                        <button 
                          className="btn btn-link text-decoration-none"
                          onClick={() => setSelectedRole(null)}
                          style={{ color: '#4361ee' }}
                        >
                          <i className="fas fa-arrow-left me-2"></i>
                          Pilih Peran Lain
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="card-footer bg-light border-0 py-4">
                <div className="text-center">
                  <small className="text-muted">
                    <i className="fas fa-shield-alt me-2"></i>
                    Dengan masuk atau mendaftar, Anda menyetujui 
                    <a href="#kebijakan" className="text-decoration-none ms-1" style={{ color: '#4361ee' }}>
                      Kebijakan Risiko
                    </a> dan 
                    <a href="#batasan" className="text-decoration-none ms-1" style={{ color: '#4361ee' }}>
                      Batasan Platform
                    </a>.
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;