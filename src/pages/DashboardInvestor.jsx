import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import RingkasanRisiko from '../components/investor/RingkasanRisiko';
import { umkmDummy } from '../data/umkmDummy';

// Komponen CompareUMKM inline untuk menghindari error import
const CompareUMKM = ({ umkmList }) => {
  // Pastikan umkmList adalah array dan tidak kosong
  if (!umkmList || umkmList.length === 0) {
    return (
      <div className="alert alert-warning">
        Tidak ada data UMKM untuk dibandingkan
      </div>
    );
  }

  // Kategorikan kriteria perbandingan
  const categories = [
    { key: 'skorSekarang', label: 'Skor Kesiapan', icon: 'fas fa-star', color: 'primary', type: 'percentage' },
    { key: 'omzet', label: 'Omzet Bulanan', icon: 'fas fa-chart-line', color: 'success', type: 'text' },
    { key: 'risikoUtama', label: 'Risiko Utama', icon: 'fas fa-exclamation-triangle', color: 'danger', type: 'text' },
    { key: 'kategori', label: 'Kategori Bisnis', icon: 'fas fa-tag', color: 'info', type: 'text' },
    { key: 'usiaUsaha', label: 'Usia Usaha', icon: 'fas fa-calendar', color: 'warning', type: 'text' },
    { key: 'lokasi', label: 'Lokasi', icon: 'fas fa-map-marker-alt', color: 'secondary', type: 'text' },
    { key: 'karyawan', label: 'Jumlah Karyawan', icon: 'fas fa-users', color: 'dark', type: 'number' },
    { key: 'statusUsaha', label: 'Status Usaha', icon: 'fas fa-check-circle', color: 'success', type: 'text' },
    { key: 'tahap', label: 'Tahap Pengembangan', icon: 'fas fa-signal', color: 'info', type: 'number' }
  ];

  // Fungsi untuk mendapatkan warna berdasarkan skor
  const getScoreColor = (score) => {
    if (score >= 80) return 'success';
    if (score >= 60) return 'warning';
    return 'danger';
  };

  // Urutkan UMKM berdasarkan skor (tertinggi ke terendah)
  const sortedUMKM = [...umkmList].sort((a, b) => b.skorSekarang - a.skorSekarang);

  return (
    <div className="compare-section mt-4">
      <div className="card border-0 shadow-sm rounded-3">
        <div className="card-header bg-white border-0 pb-0">
          <h5 className="mb-0 fw-bold">
            <i className="fas fa-chart-bar text-primary me-2"></i>
            Analisis Perbandingan UMKM
          </h5>
          <p className="text-muted small mb-0">Perbandingan mendetail {umkmList.length} UMKM terpilih</p>
        </div>
        <div className="card-body p-3">
          
          {/* Ringkasan Statistik */}
          <div className="row mb-4">
            <div className="col-md-3">
              <div className="card border-0 bg-light-subtle h-100">
                <div className="card-body text-center p-3">
                  <div className="text-primary mb-2">
                    <i className="fas fa-calculator fa-2x"></i>
                  </div>
                  <h3 className="fw-bold text-dark mb-1">
                    {Math.round(umkmList.reduce((sum, umkm) => sum + umkm.skorSekarang, 0) / umkmList.length)}%
                  </h3>
                  <small className="text-muted">Skor Rata-rata</small>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card border-0 bg-light-subtle h-100">
                <div className="card-body text-center p-3">
                  <div className="text-success mb-2">
                    <i className="fas fa-trophy fa-2x"></i>
                  </div>
                  <h3 className="fw-bold text-dark mb-1">{sortedUMKM[0]?.skorSekarang || 0}%</h3>
                  <small className="text-muted">Skor Tertinggi</small>
                  <div className="small fw-semibold text-truncate">{sortedUMKM[0]?.nama || ''}</div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card border-0 bg-light-subtle h-100">
                <div className="card-body text-center p-3">
                  <div className="text-warning mb-2">
                    <i className="fas fa-chart-line fa-2x"></i>
                  </div>
                  <h3 className="fw-bold text-dark mb-1">
                    {sortedUMKM[sortedUMKM.length - 1]?.skorSekarang || 0}%
                  </h3>
                  <small className="text-muted">Skor Terendah</small>
                  <div className="small fw-semibold text-truncate">{sortedUMKM[sortedUMKM.length - 1]?.nama || ''}</div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card border-0 bg-light-subtle h-100">
                <div className="card-body text-center p-3">
                  <div className="text-info mb-2">
                    <i className="fas fa-layer-group fa-2x"></i>
                  </div>
                  <h3 className="fw-bold text-dark mb-1">
                    {[...new Set(umkmList.map(u => u.kategori))].length}
                  </h3>
                  <small className="text-muted">Kategori Berbeda</small>
                  <div className="small">
                    {[...new Set(umkmList.map(u => u.kategori))].join(', ')}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tabel Perbandingan - Persegi Panjang Rapi */}
          <div className="table-responsive rounded-3 border" style={{ maxHeight: '500px', overflowY: 'auto' }}>
            <table className="table table-hover mb-0">
              <thead className="table-light sticky-top">
                <tr>
                  <th style={{ minWidth: '180px', position: 'sticky', left: 0, background: '#f8f9fa' }}>
                    <div className="fw-bold">Kriteria Perbandingan</div>
                  </th>
                  {sortedUMKM.map((umkm, index) => (
                    <th key={umkm.id} className="text-center" style={{ minWidth: '200px' }}>
                      <div className="d-flex flex-column align-items-center">
                        <div className="fw-bold mb-1">{umkm.nama}</div>
                        <div className={`badge bg-${getScoreColor(umkm.skorSekarang)} px-3 py-1`}>
                          {umkm.skorSekarang}%
                        </div>
                        <small className="text-muted mt-1">{umkm.kategori}</small>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {categories.map(category => (
                  <tr key={category.key} className="border-bottom">
                    <td className="fw-semibold" style={{ position: 'sticky', left: 0, background: 'white' }}>
                      <div className="d-flex align-items-center">
                        <i className={`${category.icon} me-2 text-${category.color}`}></i>
                        {category.label}
                      </div>
                    </td>
                    {sortedUMKM.map(umkm => (
                      <td key={`${umkm.id}-${category.key}`} className="text-center align-middle">
                        {category.key === 'skorSekarang' ? (
                          <div className="d-flex flex-column align-items-center">
                            <div 
                              className="score-indicator mb-1"
                              style={{
                                width: '50px',
                                height: '50px',
                                borderRadius: '50%',
                                background: `conic-gradient(var(--bs-${getScoreColor(umkm[category.key])}) ${umkm[category.key]}%, #f0f0f0 0)`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                position: 'relative'
                              }}
                            >
                              <div className="inner-circle"
                                   style={{
                                     width: '35px',
                                     height: '35px',
                                     borderRadius: '50%',
                                     background: 'white',
                                     display: 'flex',
                                     alignItems: 'center',
                                     justifyContent: 'center',
                                     fontWeight: 'bold',
                                     color: `var(--bs-${getScoreColor(umkm[category.key])})`
                                   }}>
                                {umkm[category.key]}%
                              </div>
                            </div>
                          </div>
                        ) : category.type === 'number' ? (
                          <div className="fw-bold fs-5">{umkm[category.key] || '-'}</div>
                        ) : (
                          <div className="fw-semibold">
                            <span className="badge bg-light text-dark p-2">
                              {umkm[category.key] || '-'}
                            </span>
                          </div>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Skor Detail Breakdown */}
          <div className="mt-4">
            <h6 className="fw-bold mb-3">
              <i className="fas fa-chart-pie text-info me-2"></i>
              Detail Skor Komponen
            </h6>
            <div className="row">
              {sortedUMKM.map(umkm => (
                <div key={`detail-${umkm.id}`} className="col-md-6 col-lg-4 col-xl-3 mb-3">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-header bg-light py-2">
                      <div className="d-flex justify-content-between align-items-center">
                        <h6 className="mb-0 fw-bold text-truncate">{umkm.nama}</h6>
                        <span className="badge bg-primary">{umkm.skorSekarang}%</span>
                      </div>
                    </div>
                    <div className="card-body p-3">
                      <div className="mb-2">
                        <div className="d-flex justify-content-between mb-1">
                          <small className="text-muted">Legalitas</small>
                          <small className="fw-bold">{umkm.skorDetail?.legalitas || 0}%</small>
                        </div>
                        <div className="progress" style={{ height: '6px' }}>
                          <div 
                            className="progress-bar bg-success" 
                            style={{ width: `${umkm.skorDetail?.legalitas || 0}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      <div className="mb-2">
                        <div className="d-flex justify-content-between mb-1">
                          <small className="text-muted">Model Bisnis</small>
                          <small className="fw-bold">{umkm.skorDetail?.modelBisnis || 0}%</small>
                        </div>
                        <div className="progress" style={{ height: '6px' }}>
                          <div 
                            className="progress-bar bg-info" 
                            style={{ width: `${umkm.skorDetail?.modelBisnis || 0}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      <div className="mb-2">
                        <div className="d-flex justify-content-between mb-1">
                          <small className="text-muted">Keuangan</small>
                          <small className="fw-bold">{umkm.skorDetail?.keuangan || 0}%</small>
                        </div>
                        <div className="progress" style={{ height: '6px' }}>
                          <div 
                            className="progress-bar bg-warning" 
                            style={{ width: `${umkm.skorDetail?.keuangan || 0}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      <div className="mb-2">
                        <div className="d-flex justify-content-between mb-1">
                          <small className="text-muted">Operasional</small>
                          <small className="fw-bold">{umkm.skorDetail?.operasional || 0}%</small>
                        </div>
                        <div className="progress" style={{ height: '6px' }}>
                          <div 
                            className="progress-bar bg-primary" 
                            style={{ width: `${umkm.skorDetail?.operasional || 0}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Rekomendasi */}
          <div className="mt-4 p-3 bg-light rounded-3">
            <h6 className="fw-bold mb-3">
              <i className="fas fa-lightbulb text-warning me-2"></i>
              Rekomendasi & Insight
            </h6>
            <div className="row">
              <div className="col-md-6">
                <div className="card border-success h-100">
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-2">
                      <div className="bg-success rounded-circle p-2 me-2">
                        <i className="fas fa-trophy text-white"></i>
                      </div>
                      <h6 className="mb-0 fw-bold">Rekomendasi Terbaik</h6>
                    </div>
                    <p className="mb-2">
                      <strong>{sortedUMKM[0]?.nama}</strong> memiliki skor tertinggi ({sortedUMKM[0]?.skorSekarang}%) dengan potensi risiko {sortedUMKM[0]?.risikoUtama?.toLowerCase()}.
                    </p>
                    <div className="small text-success">
                      <i className="fas fa-check-circle me-1"></i>
                      Cocok untuk investasi jangka menengah
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card border-info h-100">
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-2">
                      <div className="bg-info rounded-circle p-2 me-2">
                        <i className="fas fa-chart-line text-white"></i>
                      </div>
                      <h6 className="mb-0 fw-bold">Strategi Investasi</h6>
                    </div>
                    <p className="mb-2">
                      Pertimbangkan untuk diversifikasi portofolio dengan memilih UMKM dari kategori yang berbeda.
                    </p>
                    <div className="small text-info">
                      <i className="fas fa-lightbulb me-1"></i>
                      Diversifikasi mengurangi risiko hingga 40%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer bg-white border-0 pt-3">
          <div className="d-flex justify-content-between align-items-center">
            <div className="small text-muted">
              <i className="fas fa-clock me-1"></i>
              Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { 
                day: 'numeric', 
                month: 'long', 
                year: 'numeric' 
              })}
            </div>
            <div className="d-flex gap-2">
              <button className="btn btn-sm btn-outline-primary">
                <i className="fas fa-download me-1"></i>
                Export
              </button>
              <button className="btn btn-sm btn-primary">
                <i className="fas fa-print me-1"></i>
                Cetak
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DashboardInvestor = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [umkmList, setUmkmList] = useState([]);
  const [filters, setFilters] = useState({
    minScore: 0,
    maxScore: 100,
    legalitas: 'all',
    status: 'layak'
  });
  const [selectedUMKM, setSelectedUMKM] = useState([]);
  const [showCompareModal, setShowCompareModal] = useState(false);
  const [compareSelection, setCompareSelection] = useState([]);

  useEffect(() => {
    // Check authentication
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user || user.role !== 'investor') {
      navigate('/auth');
      return;
    }

    setUserData(user);
    setUmkmList(umkmDummy);

    // Initialize AOS
    if (window.AOS) {
      window.AOS.init({
        duration: 800,
        once: true
      });
    }
  }, [navigate]);

  const filteredUMKM = umkmList.filter(umkm => {
    return umkm.skorSekarang >= filters.minScore &&
           umkm.skorSekarang <= filters.maxScore &&
           (filters.legalitas === 'all' || umkm.skorDetail.legalitas >= 60) &&
           (filters.status === 'all' || umkm.status === 'Layak Ditampilkan');
  });

  const toggleUMKMSelection = (id) => {
    if (selectedUMKM.includes(id)) {
      setSelectedUMKM(selectedUMKM.filter(item => item !== id));
    } else if (selectedUMKM.length < 5) {
      setSelectedUMKM([...selectedUMKM, id]);
    } else {
      alert('Maksimal 5 UMKM yang dapat dibandingkan');
    }
  };

  const toggleCompareSelection = (id) => {
    if (compareSelection.includes(id)) {
      setCompareSelection(compareSelection.filter(item => item !== id));
    } else if (compareSelection.length < 5) {
      setCompareSelection([...compareSelection, id]);
    }
  };

  const openCompareModal = () => {
    setCompareSelection([...selectedUMKM]);
    setShowCompareModal(true);
  };

  const confirmCompareSelection = () => {
    setSelectedUMKM([...compareSelection]);
    setShowCompareModal(false);
  };

  const clearAllSelections = () => {
    setSelectedUMKM([]);
    setCompareSelection([]);
  };

  const getSelectedUMKMData = () => {
    return selectedUMKM.map(id => umkmList.find(u => u.id === id)).filter(Boolean);
  };

  if (!userData) {
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
      {/* Compare Modal */}
      {showCompareModal && (
        <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }} tabIndex="-1">
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header bg-primary text-white">
                <h5 className="modal-title">
                  <i className="fas fa-balance-scale me-2"></i>
                  Pilih UMKM untuk Dibandingkan
                </h5>
                <button 
                  type="button" 
                  className="btn-close btn-close-white"
                  onClick={() => setShowCompareModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <div className="alert alert-info">
                  <i className="fas fa-info-circle me-2"></i>
                  Pilih maksimal 5 UMKM untuk dibandingkan. Pilih setidaknya 2 UMKM untuk membandingkan.
                </div>
                
                <div className="mb-3">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span className="fw-bold">
                      Dipilih: {compareSelection.length} dari 5 UMKM
                    </span>
                    {compareSelection.length > 0 && (
                      <button 
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => setCompareSelection([])}
                      >
                        <i className="fas fa-times me-1"></i>
                        Hapus Semua
                      </button>
                    )}
                  </div>
                  
                  <div className="row g-3">
                    {filteredUMKM.map(umkm => (
                      <div key={umkm.id} className="col-md-6">
                        <div 
                          className={`card cursor-pointer ${compareSelection.includes(umkm.id) ? 'border-primary border-2' : ''}`}
                          style={{ 
                            cursor: 'pointer',
                            transition: 'all 0.3s',
                            minHeight: '100px'
                          }}
                          onClick={() => toggleCompareSelection(umkm.id)}
                        >
                          <div className="card-body p-3">
                            <div className="form-check d-flex align-items-center mb-0">
                              <input
                                type="checkbox"
                                className="form-check-input me-3"
                                checked={compareSelection.includes(umkm.id)}
                                onChange={() => {}}
                                style={{ width: '20px', height: '20px' }}
                              />
                              <div className="flex-grow-1">
                                <h6 className="mb-1 fw-bold">{umkm.nama}</h6>
                                <div className="d-flex justify-content-between align-items-center">
                                  <span className={`badge ${umkm.status === 'Layak Ditampilkan' ? 'bg-success' : 'bg-warning'}`}>
                                    {umkm.status}
                                  </span>
                                  <span className="fw-bold text-primary">{umkm.skorSekarang}%</span>
                                </div>
                                <div className="mt-2">
                                  <small className="text-muted">
                                    <i className="fas fa-chart-line me-1"></i>
                                    {umkm.omzet}
                                  </small>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button 
                  type="button" 
                  className="btn btn-secondary"
                  onClick={() => setShowCompareModal(false)}
                >
                  Batal
                </button>
                <button 
                  type="button" 
                  className="btn btn-primary"
                  onClick={confirmCompareSelection}
                  disabled={compareSelection.length < 2}
                >
                  <i className="fas fa-balance-scale me-1"></i>
                  Bandingkan ({compareSelection.length} UMKM)
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Header Dashboard */}
      <div className="row mb-5" data-aos="fade-up">
        <div className="col-md-8">
          <h1 className="display-6 fw-bold mb-2 mt-5">Dashboard Investor</h1>
          <p className="text-muted">
            Selamat datang, <span className="fw-bold">{userData.nama || 'Investor'}</span>
          </p>
        </div>
        <div className="col-md-4 text-md-end">
          <div className="d-flex flex-column flex-md-row gap-2">
            <div className="d-flex align-items-center gap-3" style={{ marginTop: '80px' }}>
              <div className="badge bg-success px-3 py-2 fs-6">
                Status: {userData.statusEdukasi || 'Aktif'}
              </div>
              <button className="btn btn-outline-primary">
                <i className="fas fa-bell me-2"></i>
                Notifikasi (3)
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <div className="row mb-4" data-aos="fade-up">
        <div className="col-md-3">
          <div className="card border-0 shadow-sm">
            <div className="card-body text-center">
              <h2 className="display-5 fw-bold text-primary">{filteredUMKM.length}</h2>
              <p className="text-muted mb-0">UMKM Tersedia</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card border-0 shadow-sm">
            <div className="card-body text-center">
              <h2 className="display-5 fw-bold text-success">2</h2>
              <p className="text-muted mb-0">Dalam Diskusi</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card border-0 shadow-sm">
            <div className="card-body text-center">
              <h2 className="display-5 fw-bold text-warning">1</h2>
              <p className="text-muted mb-0">Dibatalkan</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card border-0 shadow-sm">
            <div className="card-body text-center">
              <h2 className="display-5 fw-bold text-info">0</h2>
              <p className="text-muted mb-0">Kerja Sama Aktif</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area with Compare Section Integrated */}
      <div className="row">
        {/* Left Column - UMKM List and Compare Section */}
        <div className="col-lg-8">
          {/* Compare Section Header - Only show when UMKM selected */}
          {selectedUMKM.length > 0 && (
            <>
              <div className="card border-primary border-2 mb-3" data-aos="fade-up">
                <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center py-3">
                  <div className="d-flex align-items-center">
                    <i className="fas fa-balance-scale me-2"></i>
                    <div>
                      <h5 className="mb-0 fw-bold">Mode Perbandingan Aktif</h5>
                      <small className="opacity-75">Pilih hingga 5 UMKM untuk analisis mendalam</small>
                    </div>
                  </div>
                  <div className="d-flex gap-2">
                    <span className="badge bg-light text-dark py-2 px-3">
                      <i className="fas fa-layer-group me-1"></i>
                      {selectedUMKM.length} UMKM Terpilih
                    </span>
                    <button 
                      className="btn btn-sm btn-light"
                      onClick={openCompareModal}
                    >
                      <i className="fas fa-edit me-1"></i>
                      Edit
                    </button>
                    <button 
                      className="btn btn-sm btn-outline-light"
                      onClick={clearAllSelections}
                    >
                      <i className="fas fa-times me-1"></i>
                      Hapus
                    </button>
                  </div>
                </div>
                <div className="card-body p-3">
                  <div className="row g-2">
                    {getSelectedUMKMData().map(umkm => (
                      <div key={umkm.id} className="col-md-4 col-lg-3 col-6">
                        <div className="card border h-100">
                          <div className="card-body p-2">
                            <div className="d-flex justify-content-between align-items-start mb-2">
                              <span className="fw-bold text-truncate" style={{ fontSize: '0.8rem' }}>
                                {umkm.nama}
                              </span>
                              <button 
                                className="btn btn-sm btn-outline-danger p-0"
                                style={{ width: '20px', height: '20px' }}
                                onClick={() => toggleUMKMSelection(umkm.id)}
                              >
                                <i className="fas fa-times" style={{ fontSize: '0.7rem' }}></i>
                              </button>
                            </div>
                            <div className="text-center">
                              <div className="d-inline-block px-2 py-1 rounded bg-primary text-white fw-bold mb-1">
                                {umkm.skorSekarang}%
                              </div>
                              <div className="small text-muted text-truncate">
                                {umkm.kategori}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    {selectedUMKM.length < 5 && (
                      <div className="col-md-4 col-lg-3 col-6">
                        <div 
                          className="card border-dashed h-100 d-flex align-items-center justify-content-center cursor-pointer"
                          style={{ 
                            border: '2px dashed #dee2e6',
                            cursor: 'pointer',
                            minHeight: '90px'
                          }}
                          onClick={openCompareModal}
                        >
                          <div className="text-center text-muted">
                            <i className="fas fa-plus fa-lg mb-1"></i>
                            <p className="mb-0 small">Tambah</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Compare Section - Tabel Analisis langsung di bawah header */}
              {selectedUMKM.length >= 2 && (
                <div data-aos="fade-up">
                  <CompareUMKM umkmList={getSelectedUMKMData()} />
                </div>
              )}
            </>
          )}

          {/* Filters Card */}
          <div className="card border-0 shadow mb-4" data-aos="fade-up">
            <div className="card-header bg-white border-0">
              <h4 className="mb-0">Filter & Sorting</h4>
            </div>
            <div className="card-body">
              <div className="row g-3">
                <div className="col-md-3">
                  <label className="form-label">Skor Minimal</label>
                  <input
                    type="range"
                    className="form-range"
                    min="0"
                    max="100"
                    value={filters.minScore}
                    onChange={(e) => setFilters({...filters, minScore: parseInt(e.target.value)})}
                  />
                  <small className="text-muted">{filters.minScore}%</small>
                </div>
                <div className="col-md-3">
                  <label className="form-label">Legalitas</label>
                  <select
                    className="form-select"
                    value={filters.legalitas}
                    onChange={(e) => setFilters({...filters, legalitas: e.target.value})}
                  >
                    <option value="all">Semua</option>
                    <option value="complete">Lengkap (≥60%)</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <label className="form-label">Status</label>
                  <select
                    className="form-select"
                    value={filters.status}
                    onChange={(e) => setFilters({...filters, status: e.target.value})}
                  >
                    <option value="all">Semua</option>
                    <option value="layak">Layak Ditampilkan</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <label className="form-label">&nbsp;</label>
                  <button 
                    className="btn btn-primary w-100"
                    onClick={() => setFilters({
                      minScore: 0,
                      maxScore: 100,
                      legalitas: 'all',
                      status: 'all'
                    })}
                  >
                    Reset Filter
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* UMKM List */}
          <div className="mb-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="mb-0">Daftar UMKM Tersedia</h4>
              {selectedUMKM.length > 0 && (
                <div className="d-flex gap-2">
                  <button 
                    className="btn btn-sm btn-outline-primary"
                    onClick={openCompareModal}
                  >
                    <i className="fas fa-balance-scale me-1"></i>
                    Bandingkan ({selectedUMKM.length})
                  </button>
                  <button 
                    className="btn btn-sm btn-outline-danger"
                    onClick={clearAllSelections}
                  >
                    <i className="fas fa-times me-1"></i>
                    Hapus Semua
                  </button>
                </div>
              )}
            </div>
            
            {filteredUMKM.length === 0 ? (
              <div className="card border-0 shadow text-center p-5" data-aos="fade-up">
                <i className="fas fa-search text-muted fs-1 mb-3"></i>
                <h5>Tidak ada UMKM yang sesuai filter</h5>
                <p className="text-muted">Coba ubah filter pencarian Anda</p>
              </div>
            ) : (
              <div className="row g-4">
                {filteredUMKM.map((umkm) => (
                  <div key={umkm.id} className="col-md-6" data-aos="fade-up">
                    <div className={`card border-0 shadow-sm h-100 transition-all ${selectedUMKM.includes(umkm.id) ? 'border-primary border-2' : 'border'}`}
                         style={{ 
                           borderRadius: '12px',
                           overflow: 'hidden',
                           transition: 'all 0.3s ease'
                         }}>
                      <div className="card-body p-4">
                        {/* Header dengan judul dan skor */}
                        <div className="d-flex justify-content-between align-items-start mb-3">
                          <div className="flex-grow-1 pe-3">
                            <h5 className="fw-bold text-dark mb-2" style={{ lineHeight: '1.3' }}>
                              {umkm.nama}
                            </h5>
                            <div className="d-flex align-items-center gap-2 mb-2">
                              <span className={`badge ${umkm.status === 'Layak Ditampilkan' ? 'bg-success' : 'bg-warning'} px-3 py-1`}>
                                {umkm.status}
                              </span>
                              <div className="score-circle-sm d-flex align-items-center justify-content-center" 
                                   style={{
                                     width: '40px',
                                     height: '40px',
                                     borderRadius: '50%',
                                     background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                     color: 'white',
                                     fontSize: '14px',
                                     fontWeight: 'bold'
                                   }}>
                                {umkm.skorSekarang}%
                              </div>
                            </div>
                          </div>
                          {selectedUMKM.includes(umkm.id) && (
                            <div className="badge bg-primary">
                              <i className="fas fa-check me-1"></i>
                              Terpilih
                            </div>
                          )}
                        </div>
                        
                        {/* Informasi UMKM */}
                        <div className="row g-3 mb-3">
                          <div className="col-12">
                            <div className="d-flex align-items-center mb-2">
                              <i className="fas fa-chart-line text-primary me-2" style={{ width: '20px' }}></i>
                              <div>
                                <small className="text-muted d-block" style={{ fontSize: '0.75rem' }}>
                                  Omzet Bulanan
                                </small>
                                <p className="mb-0 fw-semibold text-dark" style={{ fontSize: '0.95rem' }}>
                                  {umkm.omzet}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="d-flex align-items-center">
                              <i className="fas fa-exclamation-triangle text-warning me-2" style={{ width: '20px' }}></i>
                              <div>
                                <small className="text-muted d-block" style={{ fontSize: '0.75rem' }}>
                                  Risiko Utama
                                </small>
                                <p className="mb-0 fw-semibold text-dark" style={{ fontSize: '0.95rem' }}>
                                  {umkm.risikoUtama}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="d-flex justify-content-between align-items-center pt-3 border-top">
                          <button 
                            className={`btn btn-sm ${selectedUMKM.includes(umkm.id) ? 'btn-primary' : 'btn-outline-primary'}`}
                            onClick={() => toggleUMKMSelection(umkm.id)}
                            style={{ 
                              borderRadius: '6px',
                              padding: '0.375rem 0.75rem',
                              fontSize: '0.875rem'
                            }}
                          >
                            <i className="fas fa-balance-scale me-1"></i>
                            {selectedUMKM.includes(umkm.id) ? 'Batalkan' : 'Bandingkan'}
                          </button>
                          <div className="d-flex gap-2">
                            <Link 
                              to={`/detail-umkm/${umkm.id}`} 
                              className="btn btn-sm btn-outline-dark"
                              style={{ 
                                borderRadius: '6px',
                                padding: '0.375rem 0.75rem',
                                fontSize: '0.875rem'
                              }}
                            >
                              <i className="fas fa-info-circle me-1"></i>
                              Detail
                            </Link>
                            <button className="btn btn-sm btn-success"
                                    style={{ 
                                      borderRadius: '6px',
                                      padding: '0.375rem 0.75rem',
                                      fontSize: '0.875rem'
                                    }}>
                              <i className="fab fa-whatsapp"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right Column - Sidebar */}
        <div className="col-lg-4">
          {/* Risk Summary */}
          <div className="mb-4">
            <RingkasanRisiko umkmData={umkmList[0]} />
          </div>

          {/* Edukasi Investor */}
          <div className="card border-0 shadow mb-4" data-aos="fade-up">
            <div className="card-header bg-warning text-white">
              <h4 className="mb-0">Edukasi Risiko Investor</h4>
            </div>
            <div className="card-body">
              <div className="alert alert-danger">
                <h6><i className="fas fa-exclamation-triangle me-2"></i>Peringatan Penting</h6>
                <p className="small mb-2">Sebelum melanjutkan, pastikan Anda:</p>
                <ul className="small mb-0">
                  <li>Memahami risiko investasi UMKM</li>
                  <li>Hanya menggunakan dana yang siap hilang</li>
                  <li>Melakukan due diligence mandiri</li>
                  <li>Tidak terburu-buru dalam keputusan</li>
                </ul>
              </div>
              
              <div className="form-check mb-3">
                <input className="form-check-input" type="checkbox" id="check1" />
                <label className="form-check-label small" htmlFor="check1">
                  Saya memahami bahwa saya bisa keluar dari diskusi kapan saja
                </label>
              </div>
              <div className="form-check mb-3">
                <input className="form-check-input" type="checkbox" id="check2" />
                <label className="form-check-label small" htmlFor="check2">
                  Saya tidak akan menuntut platform atas keputusan investasi saya
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="check3" />
                <label className="form-check-label small" htmlFor="check3">
                  Saya bertanggung jawab penuh atas due diligence yang saya lakukan
                </label>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="card border-0 shadow" data-aos="fade-up">
            <div className="card-header bg-success text-white">
              <h4 className="mb-0">Aksi Cepat</h4>
            </div>
            <div className="card-body">
              <div className="d-grid gap-2">
                <button className="btn btn-outline-primary">
                  <i className="fas fa-history me-2"></i>
                  Lihat Riwayat Minat
                </button>
                <button className="btn btn-outline-success">
                  <i className="fas fa-chart-bar me-2"></i>
                  Analisis Tren UMKM
                </button>
                <button 
                  className="btn btn-outline-info"
                  onClick={openCompareModal}
                  disabled={selectedUMKM.length >= 5}
                >
                  <i className="fas fa-balance-scale me-2"></i>
                  Bandingkan UMKM
                </button>
                <button className="btn btn-outline-warning">
                  <i className="fas fa-question-circle me-2"></i>
                  Panduan Due Diligence
                </button>
              </div>
            </div>
          </div>

          {/* Selected UMKM Summary */}
          {selectedUMKM.length > 0 && (
            <div className="card border-primary border-2 mt-4">
              <div className="card-header bg-light">
                <div className="d-flex align-items-center">
                  <i className="fas fa-list-check me-2 text-primary"></i>
                  <h6 className="mb-0 fw-bold">Ringkasan Pilihan</h6>
                </div>
              </div>
              <div className="card-body">
                <div className="mb-3">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <small className="text-muted">UMKM Terpilih</small>
                    <span className="badge bg-primary">{selectedUMKM.length}/5</span>
                  </div>
                  {getSelectedUMKMData().map(umkm => (
                    <div key={umkm.id} className="d-flex justify-content-between align-items-center mb-2 p-2 bg-light rounded">
                      <div>
                        <div className="fw-semibold small">{umkm.nama}</div>
                        <div className="text-muted extra-small">{umkm.kategori}</div>
                      </div>
                      <span className="badge bg-primary">{umkm.skorSekarang}%</span>
                    </div>
                  ))}
                </div>
                <div className="d-grid gap-2">
                  <button 
                    className="btn btn-primary"
                    disabled={selectedUMKM.length < 2}
                  >
                    <i className="fas fa-chart-bar me-2"></i>
                    Lihat Analisis Perbandingan
                  </button>
                  <button 
                    className="btn btn-outline-secondary"
                    onClick={openCompareModal}
                  >
                    <i className="fas fa-edit me-2"></i>
                    Kelola Pilihan
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardInvestor;