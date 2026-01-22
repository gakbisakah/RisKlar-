import React from 'react';

const SectionMasalah = () => {
  const problems = [
    {
      title: 'Informasi Asimetris',
      description: 'UMKM sulit menunjukkan potensi riil, investor kesulitan menilai risiko yang sebenarnya',
      icon: 'fas fa-exchange-alt',
      color: '#ef4444',
      details: [
        'Data usaha tidak terstandarisasi',
        'Laporan keuangan sulit diverifikasi',
        'Potensi bisnis tidak terukur dengan jelas'
      ]
    },
    {
      title: 'Risiko Tidak Terukur',
      description: 'Tidak ada standar penilaian risiko yang transparan untuk investasi UMKM',
      icon: 'fas fa-exclamation-triangle',
      color: '#f59e0b',
      details: [
        'Analisis risiko subjektif',
        'Tidak ada benchmark industri',
        'Risiko tersembunyi tidak teridentifikasi'
      ]
    },
    {
      title: 'Edukasi Terbatas',
      description: 'Minim pemahaman tentang kebutuhan investasi yang sehat dari kedua belah pihak',
      icon: 'fas fa-graduation-cap',
      color: '#3b82f6',
      details: [
        'UMKM kurang paham kebutuhan investor',
        'Investor tidak mengerti karakteristik UMKM',
        'Kurangnya literasi keuangan'
      ]
    },
    {
      title: 'Proses Tidak Transparan',
      description: 'Keputusan investasi sering berdasarkan "feeling" bukan data dan analisis',
      icon: 'fas fa-eye-slash',
      color: '#8b5cf6',
      details: [
        'Proses due diligence tidak jelas',
        'Transaksi kurang terdokumentasi',
        'Tidak ada mekanisme monitoring'
      ]
    }
  ];

  const solutions = [
    {
      title: 'Sistem Skor Terbuka',
      description: 'Penilaian objektif berbasis data dengan skor yang bisa dilihat semua pihak',
      icon: 'fas fa-chart-line',
      color: '#10b981'
    },
    {
      title: 'Edukasi Risiko Wajib',
      description: 'Modul pembelajaran yang harus diselesaikan sebelum mengakses peluang',
      icon: 'fas fa-graduation-cap',
      color: '#3b82f6'
    },
    
    {
      title: 'Checklist Data Terstandar',
      description: 'Dokumen dan informasi yang harus disediakan oleh UMKM',
      icon: 'fas fa-clipboard-check',
      color: '#f59e0b'
    },
    {
      title: 'Kesepakatan Mandiri',
      description: 'Negosiasi dan kesepakatan terjadi langsung di luar platform',
      icon: 'fas fa-handshake',
      color: '#6366f1'
    }
  ];

  return (
    <section id="tentang" className="py-5" style={{ 
      background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Pattern */}
      <div className="position-absolute top-0 end-0 w-50 h-50" style={{
        background: 'radial-gradient(circle at 80% 20%, rgba(67, 97, 238, 0.05) 0%, transparent 50%)',
        zIndex: 0
      }}></div>
      <div className="position-absolute bottom-0 start-0 w-50 h-50" style={{
        background: 'radial-gradient(circle at 20% 80%, rgba(76, 201, 240, 0.05) 0%, transparent 50%)',
        zIndex: 0
      }}></div>

      <div className="container position-relative z-1">
        {/* Header Section */}
        <div className="text-center mb-5" data-aos="fade-up">
          <div className="d-inline-block mb-4">
            <div className="icon-container-lg mx-auto mb-3" style={{
              width: '70px',
              height: '70px',
              borderRadius: '20px',
              background: 'linear-gradient(135deg, #4361ee 0%, #3a0ca3 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 10px 30px rgba(67, 97, 238, 0.2)'
            }}>
              <i className="fas fa-info-circle text-white fs-3"></i>
            </div>
            <span className="badge bg-primary bg-opacity-10 text-primary rounded-pill px-4 py-2">
              <i className="fas fa-question-circle me-2"></i>
              Mengapa Platform Ini Dibutuhkan?
            </span>
          </div>
          <h2 className="display-5 fw-bold mb-3" style={{ color: '#1e293b' }}>
            Masalah Investasi UMKM yang
            <span className="d-block text-primary">Kami Atasi</span>
          </h2>
          <p className="lead text-muted mb-0 mx-auto" style={{ maxWidth: '700px' }}>
            Investasi UMKM seringkali terhambat oleh kurangnya transparansi, standar penilaian, 
            dan mekanisme yang jelas. Platform ini hadir sebagai solusi.
          </p>
        </div>

        <div className="row">
          {/* Problems Column */}
          <div className="col-lg-6 mb-5 mb-lg-0" data-aos="fade-right">
            <div className="card border-0 shadow-sm h-100" style={{
              background: 'white',
              borderRadius: '20px',
              overflow: 'hidden'
            }}>
              <div className="card-header bg-white border-0 py-4" style={{
                borderBottom: '2px solid rgba(239, 68, 68, 0.1)'
              }}>
                <div className="d-flex align-items-center">
                  <div className="icon-container me-3" style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '12px',
                    background: 'rgba(239, 68, 68, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <i className="fas fa-exclamation-triangle text-danger fs-4"></i>
                  </div>
                  <div>
                    <h4 className="mb-1" style={{ color: '#1e293b' }}>Masalah Utama</h4>
                    <p className="text-muted mb-0 small">Hambatan dalam investasi UMKM konvensional</p>
                  </div>
                </div>
              </div>
              <div className="card-body p-4">
                <div className="problems-list">
                  {problems.map((problem, index) => (
                    <div key={index} className="problem-item mb-4 pb-4" style={{
                      borderBottom: index < problems.length - 1 ? '1px solid rgba(0,0,0,0.05)' : 'none'
                    }}>
                      <div className="d-flex align-items-start">
                        <div className="flex-shrink-0 me-4">
                          <div className="problem-icon" style={{
                            width: '50px',
                            height: '50px',
                            borderRadius: '12px',
                            background: `${problem.color}15`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: `2px solid ${problem.color}30`
                          }}>
                            <i className={problem.icon} style={{ color: problem.color, fontSize: '1.25rem' }}></i>
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h5 className="mb-2" style={{ color: problem.color }}>{problem.title}</h5>
                          <p className="text-muted mb-3" style={{ lineHeight: '1.6' }}>{problem.description}</p>
                          <div className="problem-details">
                            {problem.details.map((detail, idx) => (
                              <div key={idx} className="d-flex align-items-center mb-2">
                                <i className="fas fa-circle text-muted me-2" style={{ fontSize: '6px' }}></i>
                                <small className="text-muted">{detail}</small>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Solutions Column */}
          <div className="col-lg-6" data-aos="fade-left">
            <div className="card border-0 shadow-sm h-100" style={{
              background: 'white',
              borderRadius: '20px',
              overflow: 'hidden'
            }}>
              <div className="card-header bg-white border-0 py-4" style={{
                borderBottom: '2px solid rgba(16, 185, 129, 0.1)'
              }}>
                <div className="d-flex align-items-center">
                  <div className="icon-container me-3" style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '12px',
                    background: 'rgba(16, 185, 129, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <i className="fas fa-lightbulb text-success fs-4"></i>
                  </div>
                  <div>
                    <h4 className="mb-1" style={{ color: '#1e293b' }}>Solusi Kami</h4>
                    <p className="text-muted mb-0 small">Pendekatan inovatif untuk transparansi</p>
                  </div>
                </div>
              </div>
              <div className="card-body p-4">
                <div className="solutions-grid">
                  {solutions.map((solution, index) => (
                    <div key={index} className="solution-item mb-4" style={{
                      background: 'rgba(255, 255, 255, 0.5)',
                      border: '1px solid rgba(0,0,0,0.05)',
                      borderRadius: '12px',
                      padding: '20px',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = `${solution.color}08`;
                      e.currentTarget.style.borderColor = `${solution.color}20`;
                      e.currentTarget.style.transform = 'translateY(-5px)';
                      e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.08)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.5)';
                      e.currentTarget.style.borderColor = 'rgba(0,0,0,0.05)';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}>
                      <div className="d-flex align-items-start">
                        <div className="solution-icon me-3" style={{
                          width: '50px',
                          height: '50px',
                          borderRadius: '12px',
                          background: `${solution.color}15`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}>
                          <i className={solution.icon} style={{ color: solution.color, fontSize: '1.25rem' }}></i>
                        </div>
                        <div>
                          <h6 className="mb-2" style={{ color: solution.color }}>{solution.title}</h6>
                          <p className="text-muted mb-0 small" style={{ lineHeight: '1.5' }}>
                            {solution.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Call to Action */}
                <div className="mt-4 pt-4 border-top">
                  <div className="alert alert-primary border-0 rounded-3" style={{
                    background: 'linear-gradient(135deg, rgba(67, 97, 238, 0.1) 0%, rgba(67, 97, 238, 0.05) 100%)',
                    border: '1px solid rgba(67, 97, 238, 0.2)'
                  }}>
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0 me-3">
                        <i className="fas fa-shield-alt text-primary fs-4"></i>
                      </div>
                      <div className="flex-grow-1">
                        <h6 className="text-primary mb-1">Platform Hanya Memfasilitasi</h6>
                        <p className="text-muted small mb-0">
                          Kami menyediakan sistem transparan, namun keputusan investasi sepenuhnya 
                          menjadi tanggung jawab masing-masing pihak.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="row mt-5" data-aos="fade-up">
          <div className="col-12">
            <div className="card border-0 shadow-sm" style={{
              background: 'linear-gradient(135deg, #4361ee 0%, #3a0ca3 100%)',
              borderRadius: '20px',
              overflow: 'hidden'
            }}>
              <div className="card-body p-4 p-md-5">
                <div className="row text-center">
                  <div className="col-md-4 mb-4 mb-md-0">
                    <div className="text-white">
                      <h3 className="display-4 fw-bold mb-2">100+</h3>
                      <p className="mb-0 opacity-90">UMKM Telah Bergabung</p>
                    </div>
                  </div>
                  <div className="col-md-4 mb-4 mb-md-0">
                    <div className="text-white">
                      <h3 className="display-4 fw-bold mb-2">34</h3>
                      <p className="mb-0 opacity-90">UMKM Layak Investasi</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="text-white">
                      <h3 className="display-4 fw-bold mb-2">86%</h3>
                      <p className="mb-0 opacity-90">Tingkat Kepuasan Pengguna</p>
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

export default SectionMasalah;