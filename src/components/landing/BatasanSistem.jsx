import React from 'react';

const BatasanSistem = () => {
  const limitations = [
    {
      title: 'Bukan Penjamin',
      description: 'Platform tidak menjamin keberhasilan investasi atau bisnis',
      icon: 'fas fa-shield-alt',
      color: 'danger'
    },
    {
      title: 'Tanpa Rekomendasi',
      description: 'Tidak memberikan rekomendasi investasi, hanya menampilkan data',
      icon: 'fas fa-ban',
      color: 'warning'
    },
    {
      title: 'Kesepakatan Di Luar',
      description: 'Proses negosiasi dan kesepakatan terjadi di luar platform',
      icon: 'fas fa-external-link-alt',
      color: 'info'
    },
    {
      title: 'Risiko Pengguna',
      description: 'Semua risiko ditanggung oleh pengguna yang bersepakat',
      icon: 'fas fa-exclamation-triangle',
      color: 'secondary'
    }
  ];

  const warnings = [
    'Investasi memiliki risiko, termasuk kehilangan seluruh dana',
    'Pastikan Anda telah melakukan due diligence yang memadai',
    'Konsultasikan dengan profesional sebelum mengambil keputusan',
    'Platform hanya menyediakan informasi, bukan nasihat finansial'
  ];

  return (
    <section id="batasan" className="batasan-section py-5" style={{
      background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Pattern */}
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{
        backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(255,255,255,0.05) 2px, transparent 2px)',
        backgroundSize: '40px 40px',
        opacity: 0.3
      }}></div>

      {/* Content */}
      <div className="container position-relative z-1">
        <div className="text-center mb-5" data-aos="fade-up">
          <span className="badge bg-danger bg-gradient rounded-pill px-4 py-2 mb-3">
            <i className="fas fa-exclamation-triangle me-2"></i>
            PENTING UNTUK DIPAHAMI
          </span>
          <h2 className="display-4 fw-bold text-white mb-3">Batas Peran Platform</h2>
          <p className="lead text-light opacity-75">Transparansi tentang apa yang <span className="text-warning">TIDAK</span> kami lakukan</p>
        </div>

        {/* Limitations Cards */}
        <div className="row g-4 mb-5">
          {limitations.map((limit, index) => (
            <div key={index} className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="card h-100 border-0 shadow-lg hover-lift"
                   style={{
                     background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                     backdropFilter: 'blur(10px)',
                     border: '1px solid rgba(255,255,255,0.1)'
                   }}>
                <div className="card-body text-center p-4">
                  <div className="mb-4">
                    <div className={`icon-container-lg bg-${limit.color} bg-opacity-10 mx-auto`}
                         style={{
                           width: '80px',
                           height: '80px',
                           borderRadius: '20px',
                           display: 'flex',
                           alignItems: 'center',
                           justifyContent: 'center'
                         }}>
                      <i className={`${limit.icon} fs-2 text-${limit.color}`}></i>
                    </div>
                  </div>
                  <h5 className="text-white mb-3" style={{ minHeight: '60px' }}>{limit.title}</h5>
                  <p className="text-light opacity-75 mb-0" style={{ lineHeight: '1.6' }}>{limit.description}</p>
                </div>
                <div className="card-footer bg-transparent border-0 pt-0">
                  <div className="d-flex justify-content-center">
                    <span className={`badge bg-${limit.color} bg-opacity-25 text-${limit.color} rounded-pill px-3`}>
                      <i className="fas fa-minus-circle me-1"></i>
                      Bukan Tanggung Jawab Kami
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Warning Box */}
        <div className="card border-0 shadow-lg" data-aos="fade-up" data-aos-delay="400"
             style={{
               background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.2) 0%, rgba(220, 38, 38, 0.1) 100%)',
               border: '2px solid rgba(239, 68, 68, 0.3)',
               backdropFilter: 'blur(10px)'
             }}>
          <div className="card-body p-4 p-md-5">
            <div className="row align-items-center">
              <div className="col-lg-1 text-center mb-4 mb-lg-0">
                <div className="warning-icon" style={{
                  width: '60px',
                  height: '60px',
                  background: 'rgba(239, 68, 68, 0.2)',
                  borderRadius: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto'
                }}>
                  <i className="fas fa-exclamation-circle text-danger fs-1"></i>
                </div>
              </div>
              <div className="col-lg-11">
                <h3 className="text-white mb-3">
                  <span className="text-warning">⚠</span> Peringatan Risiko Penting
                </h3>
                <div className="row">
                  <div className="col-md-8">
                    <ul className="list-unstyled mb-0">
                      {warnings.map((warning, index) => (
                        <li key={index} className="mb-2 d-flex align-items-start">
                          <i className="fas fa-times text-danger me-3 mt-1"></i>
                          <span className="text-light opacity-90" style={{ lineHeight: '1.6' }}>{warning}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <div className="bg-dark rounded-3 p-4 h-100">
                      <h6 className="text-warning mb-3">
                        <i className="fas fa-lightbulb me-2"></i>
                        Rekomendasi Kami
                      </h6>
                      <p className="text-light opacity-75 small mb-0">
                        Selalu lakukan penelitian mandiri (due diligence) dan konsultasikan dengan ahli sebelum mengambil keputusan investasi.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer bg-transparent border-0 text-center py-3">
            <small className="text-light opacity-50">
              <i className="fas fa-info-circle me-2"></i>
              Platform ini bersifat informatif dan transparan. Semua keputusan investasi adalah tanggung jawab Anda sepenuhnya.
            </small>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-5 pt-4" data-aos="fade-up" data-aos-delay="500">
          <div className="alert alert-dark border-0 d-inline-block" style={{ 
            background: 'rgba(255,255,255,0.05)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.1)'
          }}>
            <h5 className="text-white mb-2">Sudah Paham Batasannya?</h5>
            <p className="text-light opacity-75 mb-3 small">
              Dengan memahami batasan ini, Anda siap menggunakan platform secara bertanggung jawab.
            </p>
            <a href="/auth" className="btn btn-warning btn-lg rounded-pill px-5">
              <i className="fas fa-check-circle me-2"></i>
              Saya Paham, Lanjutkan
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BatasanSistem;