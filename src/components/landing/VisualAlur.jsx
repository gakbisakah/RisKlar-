import React from 'react';

const VisualAlur = () => {
  const steps = [
    {
      step: 1,
      title: 'UMKM Daftar',
      description: 'Mengisi data dasar usaha',
      icon: 'fas fa-user-plus'
    },
    {
      step: 2,
      title: 'Self Check Awal',
      description: '5 pertanyaan kunci',
      icon: 'fas fa-clipboard-check'
    },
    {
      step: 3,
      title: 'Cek Kesiapan Bisnis',
      description: 'Analisis fakta dasar',
      icon: 'fas fa-chart-line'
    },
    {
      step: 4,
      title: 'Penilaian Terbuka',
      description: 'Skor transparan',
      icon: 'fas fa-balance-scale'
    },
    {
      step: 5,
      title: 'Edukasi Risiko',
      description: 'Pemahaman bersama',
      icon: 'fas fa-graduation-cap'
    },
    {
      step: 6,
      title: 'Investor Menilai',
      description: 'Analisis mandiri',
      icon: 'fas fa-search-dollar'
    },
    {
      step: 7,
      title: 'Kesepakatan Mandiri',
      description: 'Di luar platform',
      icon: 'fas fa-handshake'
    }
  ];

  return (
    <section id="cara-kerja" className="section-padding bg-light">
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="section-title">Visual Alur Sistem</h2>
          <p className="text-muted">Proses transparan dari pendaftaran hingga kesepakatan</p>
        </div>

        <div className="timeline-wrapper" data-aos="fade-up">
          <div className="row">
            {steps.map((step, index) => (
              <div key={step.step} className="col-md-4 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="card h-100 border-0 shadow-sm hover-shadow transition-all">
                  <div className="card-body text-center p-4">
                    <div className="step-number mb-3">
                      <div className="rounded-circle bg-primary text-white d-inline-flex align-items-center justify-content-center"
                           style={{ width: '60px', height: '60px' }}>
                        <i className={`${step.icon} fs-4`}></i>
                      </div>
                    </div>
                    <h5 className="card-title mb-2">Step {step.step}</h5>
                    <h6 className="text-primary mb-2">{step.title}</h6>
                    <p className="card-text text-muted small">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-5" data-aos="fade-up">
          <div className="alert alert-info border-0" style={{ background: 'rgba(67, 97, 238, 0.1)' }}>
            <div className="d-flex align-items-center justify-content-center">
              <i className="fas fa-info-circle text-primary fs-4 me-3"></i>
              <p className="mb-0">Setiap tahap memiliki validasi sistem dan edukasi risiko yang wajib dipahami</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisualAlur;