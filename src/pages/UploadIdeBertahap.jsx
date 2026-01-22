import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TahapUpload from '../components/umkm/TahapUpload';

const UploadIdeBertahap = () => {
  const navigate = useNavigate();
  const [currentTahap, setCurrentTahap] = useState(1);
  const [completedTahap, setCompletedTahap] = useState([]);

  useEffect(() => {
    // Check authentication
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user || user.role !== 'umkm') {
      navigate('/auth');
      return;
    }

    // Initialize AOS
    if (window.AOS) {
      window.AOS.init({
        duration: 800,
        once: true
      });
    }
  }, [navigate]);

  const handleTahapComplete = () => {
    setCompletedTahap([...completedTahap, currentTahap]);
    if (currentTahap < 3) {
      setCurrentTahap(currentTahap + 1);
    } else {
      alert('Selamat! Anda telah menyelesaikan semua tahap.');
      navigate('/dashboard-umkm');
    }
  };

  const tahapInfo = [
    {
      id: 1,
      title: 'Fakta Dasar',
      description: 'Informasi dasar tentang usaha Anda',
      status: completedTahap.includes(1) ? 'selesai' : currentTahap === 1 ? 'aktif' : 'menunggu'
    },
    {
      id: 2,
      title: 'Masalah & Solusi',
      description: 'Identifikasi masalah dan solusi yang diterapkan',
      status: completedTahap.includes(2) ? 'selesai' : currentTahap === 2 ? 'aktif' : 'menunggu'
    },
    {
      id: 3,
      title: 'Kesiapan Investasi',
      description: 'Persiapan untuk menerima investasi',
      status: completedTahap.includes(3) ? 'selesai' : currentTahap === 3 ? 'aktif' : 'menunggu'
    }
  ];

  return (
    <div className="container py-5">
      {/* Header */}
      <div className="row mb-5" data-aos="fade-up">
        <div className="col-md-8">
          <button className="btn btn-outline-primary mb-3" onClick={() => navigate('/dashboard-umkm')}>
            <i className="fas fa-arrow-left me-2"></i>
            Kembali ke Dashboard
          </button>
          <h1 className="display-6 fw-bold mb-2">Upload Ide Bertahap</h1>
          <p className="text-muted">
            Lengkapi data usaha Anda secara bertahap untuk mendapatkan skor yang akurat
          </p>
        </div>
        <div className="col-md-4 text-md-end">
          <div className="badge bg-primary px-3 py-2 fs-6">
            Tahap {currentTahap} dari 3
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="row mb-5" data-aos="fade-up">
        <div className="col-12">
          <div className="progress mb-3" style={{ height: '10px' }}>
            <div 
              className="progress-bar" 
              style={{ width: `${(completedTahap.length / 3) * 100}%` }}
            ></div>
          </div>
          <div className="d-flex justify-content-between">
            <span className="small">0%</span>
            <span className="small">33%</span>
            <span className="small">67%</span>
            <span className="small">100%</span>
          </div>
        </div>
      </div>

      {/* Tahap Overview */}
      <div className="row mb-5" data-aos="fade-up">
        {tahapInfo.map((tahap) => (
          <div key={tahap.id} className="col-md-4 mb-3">
            <div className={`card border-0 h-100 ${tahap.status === 'aktif' ? 'border-primary border-2' : ''}`}>
              <div className="card-body text-center p-4">
                <div className={`rounded-circle ${tahap.status === 'selesai' ? 'bg-success' : tahap.status === 'aktif' ? 'bg-primary' : 'bg-light'} 
                               ${tahap.status === 'selesai' || tahap.status === 'aktif' ? 'text-white' : 'text-muted'} 
                               d-inline-flex align-items-center justify-content-center mb-3`}
                     style={{ width: '60px', height: '60px' }}>
                  {tahap.status === 'selesai' ? (
                    <i className="fas fa-check fs-4"></i>
                  ) : tahap.status === 'aktif' ? (
                    <i className="fas fa-edit fs-4"></i>
                  ) : (
                    <i className="fas fa-clock fs-4"></i>
                  )}
                </div>
                <h5 className="mb-2">Tahap {tahap.id}</h5>
                <h6 className="text-primary mb-2">{tahap.title}</h6>
                <p className="text-muted small mb-3">{tahap.description}</p>
                <span className={`badge ${tahap.status === 'selesai' ? 'bg-success' : tahap.status === 'aktif' ? 'bg-primary' : 'bg-secondary'}`}>
                  {tahap.status === 'selesai' ? 'Selesai' : tahap.status === 'aktif' ? 'Sedang Berjalan' : 'Menunggu'}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Current Tahap Form */}
      <div data-aos="fade-up">
        <TahapUpload tahap={currentTahap} onComplete={handleTahapComplete} />
      </div>

      {/* Instructions */}
      <div className="row mt-5">
        <div className="col-md-6" data-aos="fade-right">
          <div className="card border-0 bg-light">
            <div className="card-body">
              <h6 className="mb-3">
                <i className="fas fa-lightbulb text-warning me-2"></i>
                Tips Pengisian
              </h6>
              <ul className="small mb-0">
                <li className="mb-2">Isi data dengan jujur dan akurat</li>
                <li className="mb-2">Siapkan dokumen pendukung sebelum mengisi</li>
                <li className="mb-2">Gunakan bahasa yang jelas dan mudah dipahami</li>
                <li className="mb-2">Simpan draft secara berkala</li>
                <li>Review kembali sebelum submit</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-6" data-aos="fade-left">
          <div className="card border-0 bg-light">
            <div className="card-body">
              <h6 className="mb-3">
                <i className="fas fa-exclamation-triangle text-danger me-2"></i>
                Peringatan Penting
              </h6>
              <ul className="small mb-0">
                <li className="mb-2">Data yang tidak akurat akan menurunkan skor Anda</li>
                <li className="mb-2">Setelah submit, data akan diverifikasi oleh mentor</li>
                <li className="mb-2">Perbaikan data hanya bisa dilakukan melalui mentor</li>
                <li>Data akan dilihat oleh investor potensial</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadIdeBertahap;