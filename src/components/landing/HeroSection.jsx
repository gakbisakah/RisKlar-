import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NAVIGATION } from '../../utils/constants';

const HeroSection = () => {
  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({
        duration: 1000,
        once: true
      });
    }
  }, []);

  return (
    <section className="hero-section position-relative overflow-hidden" style={{
      paddingTop: '120px',
      paddingBottom: '80px',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    }}>
      {/* Overlay untuk meningkatkan kontras */}
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 100%)',
        zIndex: -1
      }}></div>

      {/* Background Pattern */}
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{
        backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 2px, transparent 2px)',
        backgroundSize: '50px 50px',
        opacity: 0.5,
        zIndex: -2
      }}></div>

      {/* Floating Shapes */}
      <div className="position-absolute top-20 start-10 w-25 h-25 rounded-circle" style={{
        background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)',
        animation: 'float 6s ease-in-out infinite',
        zIndex: -1
      }}></div>
      <div className="position-absolute bottom-20 end-10 w-20 h-20 rounded-circle" style={{
        background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)',
        animation: 'float 8s ease-in-out infinite 2s',
        zIndex: -1
      }}></div>

      <div className="container position-relative z-1">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0" data-aos="fade-right">
            <div className="mb-4">
              <span className="badge bg-white text-primary rounded-pill px-4 py-2 mb-3 shadow-sm"
                    style={{ backdropFilter: 'blur(10px)' }}>
                <i className="fas fa-star me-2"></i>
                Platform Transparan
              </span>
              <h1 className="display-3 fw-bold text-white mb-4" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
                Investasi UMKM
                <span className="d-block text-warning" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>Lebih Terbuka</span>
              </h1>
              <p className="lead text-white mb-4" style={{ 
                opacity: 0.95,
                textShadow: '0 1px 3px rgba(0,0,0,0.2)',
                lineHeight: '1.8'
              }}>
                Pertemukan UMKM dan Investor dengan sistem penilaian terbuka, 
                edukasi risiko, dan kesepakatan mandiri. <strong>Tanpa janji, hanya fakta.</strong>
              </p>
            </div>
            <div className="d-flex flex-wrap gap-3 mb-5">
              <Link to={NAVIGATION.AUTH} className="btn btn-light btn-lg px-5 py-3 fw-bold rounded-pill shadow-lg hover-lift"
                    style={{ background: 'white', color: '#667eea' }}>
                <i className="fas fa-store me-2"></i>
                Daftar sebagai UMKM
              </Link>
              <Link to={NAVIGATION.AUTH} className="btn btn-outline-light btn-lg px-5 py-3 fw-bold rounded-pill hover-lift"
                    style={{ borderWidth: '2px' }}>
                <i className="fas fa-chart-line me-2"></i>
                Daftar sebagai Investor
              </Link>
            </div>
            <div className="d-flex align-items-center text-white" style={{ opacity: 0.9 }}>
              <div className="d-flex align-items-center me-4">
                <div className="feature-icon-small bg-white-20 rounded-3 p-2 me-3">
                  <i className="fas fa-shield-alt fs-4"></i>
                </div>
                <div>
                  <h6 className="mb-0 fw-bold">Terpercaya</h6>
                  <small>100+ UMKM</small>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div className="feature-icon-small bg-white-20 rounded-3 p-2 me-3">
                  <i className="fas fa-graduation-cap fs-4"></i>
                </div>
                <div>
                  <h6 className="mb-0 fw-bold">Edukasi Lengkap</h6>
                  <small>Risiko & Analisis</small>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6" data-aos="fade-left" data-aos-delay="300">
            <div className="card border-0 shadow-lg rounded-3 overflow-hidden glass-effect">
              <div className="card-header bg-primary text-white py-4" style={{
                background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.9) 0%, rgba(118, 75, 162, 0.9) 100%)',
                backdropFilter: 'blur(10px)'
              }}>
                <h4 className="mb-0 text-center">
                  <i className="fas fa-clipboard-list me-2"></i>
                  Apa yang didapat sebelum investasi
                </h4>
              </div>
              <div className="card-body p-4" style={{ background: 'rgba(255, 255, 255, 0.95)' }}>
                <div className="row g-3">
                  {[
                    { icon: 'fas fa-chart-pie', title: 'Skor Kelayakan', desc: 'Analisis transparan' },
                    { icon: 'fas fa-exclamation-triangle', title: 'Identifikasi Risiko', desc: 'Titik kritis terdeteksi' },
                    { icon: 'fas fa-history', title: 'Histori Perbaikan', desc: 'Progress terlihat jelas' },
                  
                    { icon: 'fas fa-file-alt', title: 'Data Lengkap', desc: 'Checklist tersedia' },
                    { icon: 'fas fa-handshake', title: 'Kontak Langsung', desc: 'Komunikasi transparan' }
                  ].map((item, index) => (
                    <div key={index} className="col-md-6">
                      <div className="feature-item p-3 h-100 rounded-3 hover-lift"
                           style={{ 
                             background: 'white',
                             border: '1px solid rgba(0,0,0,0.1)',
                             transition: 'all 0.3s ease'
                           }}>
                        <div className="d-flex align-items-start">
                          <div className="feature-icon rounded-circle bg-primary bg-opacity-10 text-primary p-2 me-3"
                               style={{ minWidth: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <i className={`${item.icon} fs-4`}></i>
                          </div>
                          <div>
                            <h6 className="mb-1 fw-bold" style={{ color: '#1e293b' }}>{item.title}</h6>
                            <p className="mb-0 small" style={{ color: '#64748b' }}>{item.desc}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-3 border-top">
                  <div className="alert alert-warning border-0 mb-0 rounded-3"
                       style={{ background: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.2)' }}>
                    <div className="d-flex align-items-center">
                      <i className="fas fa-info-circle text-warning me-3 fs-5"></i>
                      <div>
                        <small className="fw-bold" style={{ color: '#92400e' }}>Transparansi penuh:</small>
                        <small className="d-block" style={{ color: '#92400e' }}>
                          Semua data bisa diakses sebelum keputusan investasi
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;