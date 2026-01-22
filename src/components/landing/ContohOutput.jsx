import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const ContohOutput = () => {
  const scoreData = [
    { name: 'Legalitas', value: 65, color: '#4361ee' },
    { name: 'Model Bisnis', value: 78, color: '#4cc9f0' },
    { name: 'Keuangan', value: 70, color: '#7209b7' },
    { name: 'Operasional', value: 75, color: '#f72585' },
  ];

  const dummyStats = [
    { label: 'UMKM Masuk Sistem', value: '120', icon: 'fas fa-store', color: 'primary' },
    { label: 'UMKM Layak Ditampilkan', value: '34', icon: 'fas fa-chart-line', color: 'success' },
    { label: 'Investor Aktif', value: '18', icon: 'fas fa-users', color: 'info' },
   
  ];

  return (
    <section className="section-padding bg-light">
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="section-title">Contoh Output Sistem</h2>
          <p className="text-muted">Lihat bagaimana data ditampilkan secara transparan</p>
        </div>

        <div className="row g-4">
          <div className="col-lg-6" data-aos="fade-right">
            <div className="card h-100 border-0 shadow">
              <div className="card-header bg-white border-0 py-3">
                <h4 className="mb-0">Skor Detail UMKM Contoh</h4>
              </div>
              <div className="card-body">
                <div className="mb-4">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="mb-0">Kopi Lereng Arjuna</h5>
                    <span className="badge bg-success">Layak Ditampilkan</span>
                  </div>
                  <div className="text-center mb-4">
                    <div className="score-circle mx-auto">
                      <div className="text-center">
                        <h2 className="display-4 fw-bold mb-0">72%</h2>
                        <small className="text-muted">Skor Total</small>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <h6 className="mb-3">Rincian Skor:</h6>
                  <ResponsiveContainer width="100%" height={200}>
                    <BarChart data={scoreData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="value">
                        {scoreData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                <div className="alert alert-warning border-0">
                  <div className="d-flex">
                    <i className="fas fa-exclamation-triangle text-warning me-3 fs-4"></i>
                    <div>
                      <h6 className="mb-1">Risiko Utama: Operasional</h6>
                      <p className="mb-0 small">Perlu perbaikan SOP dan dokumentasi proses</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-left">
            <div className="card h-100 border-0 shadow">
              <div className="card-header bg-white border-0 py-3">
                <h4 className="mb-0">Statistik Publik (Dummy)</h4>
              </div>
              <div className="card-body">
                <div className="row g-3">
                  {dummyStats.map((stat, index) => (
                    <div key={index} className="col-md-6">
                      <div className="card border-0 h-100" style={{ 
                        background: `linear-gradient(135deg, var(--bs-${stat.color}) 0%, var(--bs-${stat.color}-dark) 100%)` 
                      }}>
                        <div className="card-body text-white p-4">
                          <div className="d-flex align-items-center">
                            <div className="rounded-circle bg-white bg-opacity-20 p-3 me-3">
                              <i className={`${stat.icon} fs-3`}></i>
                            </div>
                            <div>
                              <h2 className="display-6 fw-bold mb-1">{stat.value}</h2>
                              <p className="mb-0 opacity-90">{stat.label}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4">
                  <h6 className="mb-3">Roadmap Singkat:</h6>
                  <div className="timeline">
                    {[
                      { phase: 'Fase Validasi', output: 'UMKM memahami skor & risiko awal' },
                      { phase: 'Fase Edukasi', output: 'Skor meningkat melalui perbaikan terarah' },
                      { phase: 'Fase Kolaborasi', output: 'UMKM terhubung investor secara mandiri' }
                    ].map((item, index) => (
                      <div key={index} className="timeline-item">
                        <div className="d-flex align-items-start mb-3">
                          <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center"
                               style={{ width: '40px', height: '40px', minWidth: '40px' }}>
                            {index + 1}
                          </div>
                          <div className="ms-3">
                            <h6 className="mb-1">{item.phase}</h6>
                            <p className="text-muted mb-0 small">{item.output}</p>
                          </div>
                        </div>
                      </div>
                    ))}
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

export default ContohOutput;