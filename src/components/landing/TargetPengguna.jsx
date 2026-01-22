import React from 'react';

const TargetPengguna = () => {
  const users = [
    {
      role: 'UMKM',
      description: 'Usaha mikro, kecil, dan menengah yang membutuhkan pendanaan',
      features: [
        'Dapatkan skor kelayakan transparan',
        'Identifikasi titik lemah bisnis',
       
        'Tampilkan ke investor yang tepat',
        'Monitoring perkembangan bisnis',
        'Akses ke edukasi bisnis'
      ],
      icon: 'fas fa-store',
      color: 'primary',
      benefits: [
        { icon: 'fas fa-chart-bar', text: 'Analisis Mendalam' },
        { icon: 'fas fa-users', text: 'Jaringan Investor' },
        { icon: 'fas fa-graduation-cap', text: 'Edukasi Gratis' }
      ]
    },
    {
      role: 'Investor',
      description: 'Perorangan atau institusi yang ingin berinvestasi di UMKM',
      features: [
        'Akses data UMKM yang sudah difilter',
        'Analisis risiko yang transparan',
        'Histori perbaikan bisnis',
        'Kontak langsung setelah paham risiko',
        'Sistem perbandingan UMKM',
        'Dashboard monitoring investasi'
      ],
      icon: 'fas fa-chart-line',
      color: 'success',
      benefits: [
        { icon: 'fas fa-shield-alt', text: 'Risiko Terukur' },
        { icon: 'fas fa-filter', text: 'Filter Cerdas' },
        { icon: 'fas fa-balance-scale', text: 'Perbandingan' }
      ]
    }
  ];

  return (
    <section id="target" className="section-padding bg-light">
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <div className="d-inline-block px-4 py-2 rounded-pill bg-primary bg-opacity-10 mb-3">
           
          </div>
          <h2 className="display-6 fw-bold mb-3">Platform Kami Dibuat Untuk</h2>
          <p className="text-muted lead mx-auto" style={{ maxWidth: '600px' }}>
            Membangun jembatan yang aman dan transparan antara UMKM yang membutuhkan pendanaan 
            dan investor yang mencari peluang berinvestasi
          </p>
        </div>

        <div className="row justify-content-center g-4">
          {users.map((user, index) => (
            <div key={index} className="col-lg-5 col-md-6" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="card h-100 border-0 shadow-lg hover-lift transition-all position-relative overflow-hidden">
                {/* Background decorative element */}
                <div className={`position-absolute top-0 end-0 bg-${user.color} bg-opacity-5`} 
                     style={{ width: '150px', height: '150px', borderRadius: '0 0 0 100%' }}></div>
                
                <div className="card-header border-0 pt-4 pb-3 position-relative">
                  <div className="d-flex align-items-center">
                    <div className={`rounded-circle bg-gradient bg-${user.color} text-white p-3 me-3 shadow-sm`}
                         style={{ width: '70px', height: '70px' }}>
                      <i className={`${user.icon} fs-2`}></i>
                    </div>
                    <div className="flex-grow-1">
                      <h3 className={`text-${user.color} fw-bold mb-1`}>{user.role}</h3>
                      <p className="text-muted mb-0 small">{user.description}</p>
                    </div>
                  </div>
                </div>
                
                <div className="card-body p-4 position-relative">
                  {/* Quick benefits badges */}
                  <div className="mb-4">
                    <div className="d-flex flex-wrap gap-2">
                      {user.benefits.map((benefit, bIndex) => (
                        <span key={bIndex} className={`badge bg-${user.color} bg-opacity-10 text-${user.color} px-3 py-2`}>
                          <i className={`${benefit.icon} me-2`}></i>
                          {benefit.text}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <h6 className={`text-${user.color} fw-bold mb-3 d-flex align-items-center`}>
                    <i className="fas fa-star me-2"></i>
                    Manfaat Utama
                  </h6>
                  
                  <div className="row g-3">
                    {user.features.map((feature, fIndex) => (
                      <div key={fIndex} className="col-md-6">
                        <div className="d-flex align-items-start p-2 bg-white rounded border">
                          <div className={`bg-${user.color} bg-opacity-10 rounded-circle p-2 me-3`}>
                            <i className={`fas fa-check text-${user.color}`} style={{ fontSize: '0.8rem' }}></i>
                          </div>
                          <div>
                            <p className="mb-0 fw-semibold" style={{ fontSize: '0.9rem' }}>{feature}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="card-footer border-0 pt-0 pb-4 px-4">
                  <div className={`alert alert-${user.color} bg-opacity-10 border-0 rounded-3 mb-0`}>
                    <div className="d-flex align-items-center">
                      <i className={`fas fa-info-circle text-${user.color} me-3 fs-4`}></i>
                      <div>
                        <p className="mb-0 small fw-semibold">
                          Setiap pengguna wajib memahami dan menyetujui kebijakan risiko platform
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Connection Bridge Visual */}
        <div className="row justify-content-center mt-5" data-aos="fade-up">
          <div className="col-lg-8">
            <div className="position-relative">
              <div className="text-center mb-4">
                <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle shadow-sm p-3">
                  <i className="fas fa-handshake text-primary fs-2"></i>
                </div>
              </div>
              <div className="position-relative">
                {/* Connection line */}
                <div className="position-absolute top-50 start-0 end-0 h-2 bg-primary bg-opacity-25 rounded-pill"></div>
                <div className="row justify-content-between position-relative">
                  <div className="col-auto">
                    <div className="d-flex flex-column align-items-center">
                      <div className="bg-primary text-white rounded-circle p-3 mb-2">
                        <i className="fas fa-store fs-4"></i>
                      </div>
                      <span className="fw-bold text-primary">UMKM</span>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="d-flex flex-column align-items-center">
                      <div className="bg-success text-white rounded-circle p-3 mb-2">
                        <i className="fas fa-chart-line fs-4"></i>
                      </div>
                      <span className="fw-bold text-success">Investor</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-4">
                <p className="text-muted mb-0">
                  Platform kami menjadi jembatan yang menghubungkan kedua belah pihak 
                  dengan <span className="fw-bold text-primary">transparansi</span> dan{' '}
                  <span className="fw-bold text-success">keamanan</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-lift:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1) !important;
        }
        .bg-gradient {
          background: linear-gradient(135deg, var(--bs-primary), #667eea);
        }
        .bg-gradient.bg-success {
          background: linear-gradient(135deg, var(--bs-success), #38a169);
        }
      `}</style>
    </section>
  );
};

export default TargetPengguna;