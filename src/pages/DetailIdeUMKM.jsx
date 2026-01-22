import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CatatanSistem from '../components/shared/CatatanSistem';
import TombolAksi from '../components/shared/TombolAksi';
import ChecklistTidakDijanjikan from '../components/shared/ChecklistTidakDijanjikan';
import { umkmDummy } from '../data/umkmDummy';

const DetailIdeUMKM = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [umkmData, setUmkmData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    // Check authentication
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user || (user.role !== 'investor' && user.role !== 'mentor')) {
      navigate('/auth');
      return;
    }

    // Find UMKM data
    const umkm = umkmDummy.find(u => u.id === parseInt(id));
    if (!umkm) {
      navigate('/dashboard-investor');
      return;
    }

    setUmkmData(umkm);
    setLoading(false);

    // Initialize AOS
    if (window.AOS) {
      window.AOS.init({
        duration: 800,
        once: true
      });
    }
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-5">
      {/* Header */}
      <div className="row mb-4" data-aos="fade-up">
        <div className="col-md-8">
          <button className="btn btn-outline-primary mb-3" onClick={() => navigate('/dashboard-investor')}>
            <i className="fas fa-arrow-left me-2"></i>
            Kembali
          </button>
          <h1 className="display-6 fw-bold mb-2">{umkmData.nama}</h1>
          <div className="d-flex flex-wrap gap-2 align-items-center">
            <span className={`badge ${umkmData.status === 'Layak Ditampilkan' ? 'bg-success' : 'bg-warning'} fs-6`}>
              {umkmData.status}
            </span>
            <span className="badge bg-info fs-6">Skor: {umkmData.skorSekarang}%</span>
            <span className="badge bg-secondary fs-6">{umkmData.omzet}</span>
          </div>
        </div>
       <div className="col-md-4 text-md-end mt-5">
  <div className="score-circle-large">
    <h1 className="display-2 fw-bold">{umkmData.skorSekarang}%</h1>
    <p className="text-muted mb-0">Skor Total</p>
  </div>
</div>

      </div>

      {/* Tabs */}
      <div className="mb-4" data-aos="fade-up">
        <ul className="nav nav-tabs">
          {[
            { id: 'overview', label: 'Ringkasan', icon: 'fas fa-eye' },
            { id: 'risk', label: 'Risiko', icon: 'fas fa-exclamation-triangle' },
            { id: 'history', label: 'Riwayat', icon: 'fas fa-history' },
            { id: 'documents', label: 'Dokumen', icon: 'fas fa-file-alt' }
          ].map(tab => (
            <li className="nav-item" key={tab.id}>
              <button
                className={`nav-link ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <i className={`${tab.icon} me-2`}></i>
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Content */}
      <div className="row">
        {/* Main Content */}
        <div className="col-lg-8">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <>
              <div className="card border-0 shadow mb-4" data-aos="fade-up">
                <div className="card-header bg-white border-0">
                  <h4 className="mb-0">Profil UMKM</h4>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">
                      <h6 className="text-muted mb-2">Informasi Dasar</h6>
                      <ul className="list-unstyled">
                        <li className="mb-2">
                          <strong>Nama Usaha:</strong> {umkmData.nama}
                        </li>
                        <li className="mb-2">
                          <strong>Status Usaha:</strong> {umkmData.statusUsaha}
                        </li>
                        <li className="mb-2">
                          <strong>Omzet per Bulan:</strong> {umkmData.omzet}
                        </li>
                        <li className="mb-2">
                          <strong>Lokasi:</strong> Malang, Jawa Timur
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <h6 className="text-muted mb-2">Kontak</h6>
                      <ul className="list-unstyled">
                        <li className="mb-2">
                          <strong>WhatsApp:</strong> {umkmData.kontak}
                        </li>
                        <li className="mb-2">
                          <strong>Email:</strong> umkm@demo.id
                        </li>
                        <li className="mb-2">
                          <strong>Website:</strong> kopilerengarjuna.com
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-4" data-aos="fade-up">
                <CatatanSistem />
              </div>
            </>
          )}

          {/* Risk Tab */}
          {activeTab === 'risk' && (
            <>
              <div className="card border-0 shadow mb-4" data-aos="fade-up">
                <div className="card-header bg-danger text-white">
                  <h4 className="mb-0">Analisis Risiko Terperinci</h4>
                </div>
                <div className="card-body">
                  <div className="row mb-4">
                    <div className="col-md-6">
                      <div className="card border-0 bg-light h-100">
                        <div className="card-body">
                          <h6 className="text-danger mb-3">Risiko Tinggi</h6>
                          <ul className="list-unstyled">
                            <li className="mb-2">
                              <i className="fas fa-exclamation-circle text-danger me-2"></i>
                              Legalitas belum lengkap
                            </li>
                            <li className="mb-2">
                              <i className="fas fa-exclamation-circle text-danger me-2"></i>
                              Ketergantungan pada pemilik
                            </li>
                            <li className="mb-2">
                              <i className="fas fa-exclamation-circle text-danger me-2"></i>
                              Fluktuasi harga bahan baku
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="card border-0 bg-light h-100">
                        <div className="card-body">
                          <h6 className="text-warning mb-3">Risiko Sedang</h6>
                          <ul className="list-unstyled">
                            <li className="mb-2">
                              <i className="fas fa-exclamation-triangle text-warning me-2"></i>
                              Persaingan pasar yang ketat
                            </li>
                            <li className="mb-2">
                              <i className="fas fa-exclamation-triangle text-warning me-2"></i>
                              Perubahan regulasi
                            </li>
                            <li className="mb-2">
                              <i className="fas fa-exclamation-triangle text-warning me-2"></i>
                              Ketergantungan pada musim
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="alert alert-info">
                    <h6><i className="fas fa-lightbulb me-2"></i>Mitigasi Risiko yang Disarankan</h6>
                    <ul className="mb-0">
                      <li>Meminta dokumen legalitas lengkap sebelum investasi</li>
                      <li>Membuat kontrak yang jelas tentang peran dan tanggung jawab</li>
                      <li>Diversifikasi produk untuk mengurangi ketergantungan musim</li>
                      <li>Memantau regulasi secara berkala</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div data-aos="fade-up">
                <ChecklistTidakDijanjikan />
              </div>
            </>
          )}

          {/* History Tab */}
          {activeTab === 'history' && (
            <div className="card border-0 shadow" data-aos="fade-up">
              <div className="card-header bg-dark text-white">
                <h4 className="mb-0">Riwayat Perkembangan</h4>
              </div>
              <div className="card-body">
                <div className="timeline">
                  {[
                    { date: '2024-02-01', event: 'Monitoring pertama dilakukan', type: 'monitoring' },
                    { date: '2024-01-25', event: 'Dana pertama ditransfer', type: 'investment' },
                    { date: '2024-01-20', event: 'Kesepakatan awal dibuat', type: 'agreement' },
                    { date: '2024-01-15', event: 'Investor menunjukkan minat', type: 'interest' },
                    { date: '2024-01-12', event: 'Mentor review selesai (+14%)', type: 'review' },
                    { date: '2024-01-10', event: 'UMKM terdaftar di sistem', type: 'registration' }
                  ].map((item, index) => (
                    <div key={index} className="timeline-item">
                      <div className="d-flex">
                        <div className={`rounded-circle bg-${item.type === 'investment' ? 'success' : item.type === 'review' ? 'info' : 'secondary'} 
                                     text-white d-flex align-items-center justify-content-center`}
                             style={{ width: '40px', height: '40px', minWidth: '40px' }}>
                          <i className={`fas fa-${item.type === 'investment' ? 'money-bill-wave' : item.type === 'review' ? 'user-graduate' : 'history'}`}></i>
                        </div>
                        <div className="ms-3">
                          <div className="d-flex justify-content-between align-items-center">
                            <h6 className="mb-1">{item.event}</h6>
                            <small className="text-muted">{item.date}</small>
                          </div>
                          <span className={`badge bg-${item.type === 'investment' ? 'success' : item.type === 'review' ? 'info' : 'secondary'}`}>
                            {item.type === 'investment' ? 'Investasi' : 
                             item.type === 'review' ? 'Review' : 
                             item.type === 'agreement' ? 'Kesepakatan' : 
                             item.type === 'interest' ? 'Minat' : 'Registrasi'}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Documents Tab */}
          {activeTab === 'documents' && (
            <div className="card border-0 shadow" data-aos="fade-up">
              <div className="card-header bg-primary text-white">
                <h4 className="mb-0">Dokumen Tersedia</h4>
              </div>
              <div className="card-body">
                <div className="row">
                  {[
                    { name: 'Profil Bisnis', status: 'tersedia', date: '2024-01-10' },
                    { name: 'Laporan Keuangan 3 Bulan', status: 'tersedia', date: '2024-01-15' },
                    { name: 'Dokumen Legalitas', status: 'sebagian', date: '2024-01-12' },
                    { name: 'Rencana Bisnis', status: 'tersedia', date: '2024-01-18' },
                    { name: 'Struktur Organisasi', status: 'dalam proses', date: '2024-01-20' },
                    { name: 'Sertifikat Produk', status: 'belum', date: '-' }
                  ].map((doc, index) => (
                    <div key={index} className="col-md-6 mb-3">
                      <div className="card border h-100">
                        <div className="card-body">
                          <div className="d-flex justify-content-between align-items-start mb-2">
                            <h6 className="mb-0">{doc.name}</h6>
                            <span className={`badge bg-${doc.status === 'tersedia' ? 'success' : doc.status === 'sebagian' ? 'warning' : 'secondary'}`}>
                              {doc.status === 'tersedia' ? 'Tersedia' : 
                               doc.status === 'sebagian' ? 'Sebagian' : 
                               doc.status === 'dalam proses' ? 'Proses' : 'Belum'}
                            </span>
                          </div>
                          <small className="text-muted">Upload: {doc.date}</small>
                          <div className="mt-2">
                            <button className="btn btn-sm btn-outline-primary">
                              <i className="fas fa-download me-1"></i>
                              Unduh
                            </button>
                            {doc.status !== 'tersedia' && (
                              <button className="btn btn-sm btn-outline-warning ms-2">
                                <i className="fas fa-file-import me-1"></i>
                                Minta
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="col-lg-4">
          {/* Action Buttons */}
          <div className="mb-4" data-aos="fade-up">
            <TombolAksi umkmData={umkmData} />
          </div>

          {/* Score Details */}
          <div className="card border-0 shadow mb-4" data-aos="fade-up">
            <div className="card-header bg-info text-white">
              <h5 className="mb-0">Detail Skor</h5>
            </div>
            <div className="card-body">
              {Object.entries(umkmData.skorDetail).map(([key, value]) => (
                <div key={key} className="mb-3">
                  <div className="d-flex justify-content-between mb-1">
                    <span className="text-capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                    <span className="fw-bold">{value}%</span>
                  </div>
                  <div className="progress" style={{ height: '8px' }}>
                    <div 
                      className={`progress-bar ${value >= 75 ? 'bg-success' : value >= 50 ? 'bg-warning' : 'bg-danger'}`}
                      style={{ width: `${value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="card border-0 shadow" data-aos="fade-up">
            <div className="card-header bg-dark text-white">
              <h5 className="mb-0">Statistik Cepat</h5>
            </div>
            <div className="card-body">
              <div className="row text-center">
                <div className="col-6 mb-3">
                  <div className="border rounded p-3">
                    <h3 className="text-primary mb-1">3</h3>
                    <small className="text-muted">Investor Melihat</small>
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <div className="border rounded p-3">
                    <h3 className="text-success mb-1">2</h3>
                    <small className="text-muted">Dalam Diskusi</small>
                  </div>
                </div>
                <div className="col-6">
                  <div className="border rounded p-3">
                    <h3 className="text-warning mb-1">14%</h3>
                    <small className="text-muted">Peningkatan Skor</small>
                  </div>
                </div>
                <div className="col-6">
                  <div className="border rounded p-3">
                    <h3 className="text-info mb-1">7</h3>
                    <small className="text-muted">Dokumen Tersedia</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailIdeUMKM;