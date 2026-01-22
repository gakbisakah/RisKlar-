import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import WidgetKesiapan from '../components/umkm/WidgetKesiapan';
import SubSkor from '../components/umkm/SubSkor';
import { umkmDummy } from '../data/umkmDummy';

const DashboardUMKM = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [umkmData, setUmkmData] = useState(null);

  useEffect(() => {
    // Check authentication
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user || user.role !== 'umkm') {
      navigate('/auth');
      return;
    }

    setUserData(user);
    
    // Load UMKM data (dummy)
    const umkm = umkmDummy[0];
    setUmkmData(umkm);

    // Initialize AOS
    if (window.AOS) {
      window.AOS.init({
        duration: 800,
        once: true
      });
    }
  }, [navigate]);

  if (!userData || !umkmData) {
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  const tahapan = [
    { id: 1, name: 'Fakta Dasar', status: 'selesai' },
    { id: 2, name: 'Masalah & Solusi', status: 'selesai' },
    { id: 3, name: 'Kesiapan Investasi', status: 'proses' }
  ];

  const masalahUtama = [
    { id: 1, name: 'Legalitas belum lengkap', priority: 'tinggi', status: 'perlu' },
    { id: 2, name: 'SOP operasional belum terdokumentasi', priority: 'sedang', status: 'proses' },
    { id: 3, name: 'Cash flow management perlu perbaikan', priority: 'sedang', status: 'perlu' }
  ];

  return (
    <div className="dashboard-umkm" style={{ paddingTop: '100px' }}>
      <div className="container-fluid px-lg-5">
        {/* Header Dashboard */}
        <div className="row mb-4" data-aos="fade-up">
          <div className="col-md-8">
            <div className="d-flex align-items-center mb-3">
              <div className="avatar-container me-3">
              
              </div>
              <div>
                <h1 className="h3 fw-bold mb-1">Dashboard UMKM</h1>
                <p className="text-muted mb-0">
                  Selamat datang, <span className="fw-bold text-primary">{userData.nama || 'UMKM'}</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="d-flex flex-column flex-md-row gap-2 align-items-md-end h-100">
              <div className="badge bg-success px-3 py-2 fs-6 rounded-pill ms-auto">
                Status: {umkmData.status}
              </div>
              <button className="btn btn-outline-primary btn-sm">
                <i className="fas fa-bell me-2"></i>
                Notifikasi
              </button>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="row mb-5" data-aos="fade-up" data-aos-delay="100">
          {[
            { label: 'Skor Total', value: `${umkmData.skorSekarang}%`, icon: 'fas fa-chart-line', color: 'primary' },
            { label: 'Total Tahap', value: tahapan.length, icon: 'fas fa-layer-group', color: 'warning' },
            { label: 'Masalah Selesai', value: masalahUtama.filter(m => m.status === 'selesai').length, icon: 'fas fa-check-circle', color: 'success' },
            { label: 'Investor Tertarik', value: 2, icon: 'fas fa-users', color: 'info' }
          ].map((stat, index) => (
            <div key={index} className="col-md-3 mb-3">
              <div className="card border-0 shadow-sm h-100 hover-lift">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <div className={`icon-container bg-${stat.color} bg-opacity-10 text-${stat.color} rounded-3 p-3 me-3`}>
                      <i className={`${stat.icon} fs-3`}></i>
                    </div>
                    <div>
                      <h2 className="display-6 fw-bold mb-1">{stat.value}</h2>
                      <p className="text-muted mb-0 small">{stat.label}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row">
          {/* Main Content */}
          <div className="col-lg-8">
            {/* Self Check Widget */}
            <div className="mb-4" data-aos="fade-up">
              <WidgetKesiapan />
            </div>

            {/* Skor Detail */}
            <div className="mb-4" data-aos="fade-up" data-aos-delay="100">
              <SubSkor scoreData={umkmData.skorDetail} />
            </div>

            {/* Masalah Utama */}
            <div className="card border-0 shadow mb-4" data-aos="fade-up" data-aos-delay="200">
              <div className="card-header bg-white border-0 py-4">
                <div className="d-flex justify-content-between align-items-center">
                  <h4 className="mb-0">
                    <i className="fas fa-exclamation-triangle text-danger me-2"></i>
                    Masalah Utama yang Perlu Diperbaiki
                  </h4>
                  <span className="badge bg-danger rounded-pill">{masalahUtama.length} Masalah</span>
                </div>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-hover mb-0">
                    <thead>
                      <tr>
                        <th>Masalah</th>
                        <th>Prioritas</th>
                        <th>Status</th>
                        <th>Aksi</th>
                      </tr>
                    </thead>
                    <tbody>
                      {masalahUtama.map((masalah) => (
                        <tr key={masalah.id}>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className={`dot-indicator bg-${masalah.priority === 'tinggi' ? 'danger' : 'warning'} me-3`}></div>
                              <span>{masalah.name}</span>
                            </div>
                          </td>
                          <td>
                            <span className={`badge bg-${masalah.priority === 'tinggi' ? 'danger' : 'warning'}`}>
                              {masalah.priority}
                            </span>
                          </td>
                          <td>
                            {masalah.status === 'selesai' ? (
                              <span className="badge bg-success">Selesai</span>
                            ) : masalah.status === 'proses' ? (
                              <span className="badge bg-warning">Dalam Proses</span>
                            ) : (
                              <span className="badge bg-danger">Perlu Diperbaiki</span>
                            )}
                          </td>
                          <td>
                            <button className="btn btn-sm btn-outline-primary">
                              <i className="fas fa-edit"></i>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-4">
                  <button className="btn btn-outline-danger">
                    <i className="fas fa-exclamation-triangle me-2"></i>
                    Lihat Detail Masalah
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-lg-4">
            {/* Progress Tahapan */}
            <div className="card border-0 shadow mb-4" data-aos="fade-up">
              <div className="card-header bg-white border-0 py-4">
                <h4 className="mb-0">
                  <i className="fas fa-tasks text-primary me-2"></i>
                  Progress Tahapan
                </h4>
              </div>
              <div className="card-body">
                <div className="progress-container">
                  {tahapan.map((tahap) => (
                    <div key={tahap.id} className="progress-item mb-4">
                      <div className="d-flex align-items-center mb-2">
                        <div className={`progress-step ${tahap.status === 'selesai' ? 'completed' : tahap.status === 'proses' ? 'active' : ''}`}>
                          {tahap.status === 'selesai' ? (
                            <i className="fas fa-check"></i>
                          ) : tahap.status === 'proses' ? (
                            <i className="fas fa-spinner fa-spin"></i>
                          ) : (
                            <span>{tahap.id}</span>
                          )}
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <h6 className="mb-1">Tahap {tahap.id}: {tahap.name}</h6>
                          <span className={`badge ${tahap.status === 'selesai' ? 'bg-success' : tahap.status === 'proses' ? 'bg-primary' : 'bg-secondary'}`}>
                            {tahap.status === 'selesai' ? 'Selesai' : tahap.status === 'proses' ? 'Dalam Proses' : 'Menunggu'}
                          </span>
                        </div>
                      </div>
                      {tahap.id < tahapan.length && (
                        <div className="progress-line"></div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <button className="btn btn-primary w-100" onClick={() => navigate('/upload-ide')}>
                    <i className="fas fa-arrow-right me-2"></i>
                    Lanjutkan Tahap Berikutnya
                  </button>
                </div>
              </div>
            </div>

            {/* Riwayat Perbaikan */}
            <div className="card border-0 shadow mb-4" data-aos="fade-up" data-aos-delay="100">
              <div className="card-header bg-white border-0 py-4">
                <h4 className="mb-0">
                  <i className="fas fa-history text-info me-2"></i>
                  Riwayat Perbaikan
                </h4>
              </div>
              <div className="card-body">
                <div className="timeline-vertical">
                  {[
                    { date: '20 Jan 2024', event: 'Skor meningkat 14% setelah review sistem', impact: '+14%' },
                    { date: '15 Jan 2024', event: 'Upload dokumen legalitas tambahan', impact: '+5%' },
                    { date: '10 Jan 2024', event: 'Perbaikan laporan keuangan', impact: '+8%' },
                    { date: '5 Jan 2024', event: 'Pendaftaran awal sistem', impact: 'Skor awal 58%' }
                  ].map((item, index) => (
                    <div key={index} className="timeline-item-vertical mb-3">
                      <div className="d-flex">
                        <div className="timeline-marker-vertical bg-info"></div>
                        <div className="ms-3">
                          <div className="d-flex justify-content-between align-items-start mb-1">
                            <small className="text-muted">{item.date}</small>
                            <span className={`badge ${item.impact.includes('+') ? 'bg-success' : 'bg-info'}`}>
                              {item.impact}
                            </span>
                          </div>
                          <p className="mb-0 small">{item.event}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="card border-0 shadow" data-aos="fade-up" data-aos-delay="200">
              <div className="card-header bg-white border-0 py-4">
                <h4 className="mb-0">
                  <i className="fas fa-bolt text-success me-2"></i>
                  Aksi Cepat
                </h4>
              </div>
              <div className="card-body">
                <div className="d-grid gap-2">
                  <button className="btn btn-outline-primary text-start">
                    <i className="fas fa-upload me-2"></i>
                    Upload Dokumen Baru
                  </button>
                  <button className="btn btn-outline-success text-start">
                    <i className="fas fa-chart-line me-2"></i>
                    Lihat Analisis Skor
                  </button>
                  <button className="btn btn-outline-info text-start">
                    <i className="fas fa-comments me-2"></i>
                    Lihat Catatan Sistem
                  </button>
                  <button className="btn btn-outline-warning text-start">
                    <i className="fas fa-graduation-cap me-2"></i>
                    Akses Edukasi Risiko
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardUMKM;