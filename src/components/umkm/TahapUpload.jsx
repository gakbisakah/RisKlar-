import React, { useState } from 'react';

const TahapUpload = ({ tahap, onComplete }) => {
  const [formData, setFormData] = useState({
    statusUsaha: '',
    omzet: '',
    karyawan: '',
    legalitas: ''
  });

  const [bukti, setBukti] = useState([]);

  const tahapConfig = {
    1: {
      title: 'Tahap 1 — Fakta Dasar',
      fields: [
        { name: 'statusUsaha', label: 'Status Usaha', type: 'select', options: ['Berjalan', 'Rencana', 'Baru Mulai'] },
        { name: 'omzet', label: 'Range Omzet per Bulan', type: 'select', options: ['< 5 juta', '5-10 juta', '10-25 juta', '25-50 juta', '> 50 juta'] },
        { name: 'karyawan', label: 'Jumlah Karyawan', type: 'number', placeholder: '0' },
        { name: 'legalitas', label: 'Legalitas Usaha', type: 'select', options: ['Belum Ada', 'NIB', 'SIUP', 'TDP', 'Lainnya'] }
      ]
    },
    2: {
      title: 'Tahap 2 — Masalah & Solusi',
      fields: [
        { name: 'masalah', label: 'Deskripsi Masalah Nyata', type: 'textarea', placeholder: 'Jelaskan masalah utama yang dihadapi...' },
        { name: 'solusi', label: 'Solusi yang Diterapkan', type: 'textarea', placeholder: 'Bagaimana solusi yang sudah/sedang dilakukan...' }
      ]
    },
    3: {
      title: 'Tahap 3 — Kesiapan Investasi',
      fields: [
        { name: 'penggunaanDana', label: 'Penggunaan Dana Detail', type: 'textarea', placeholder: 'Rincian penggunaan dana investasi...' },
        { name: 'risikoTerburuk', label: 'Risiko Terburuk yang Mungkin Terjadi', type: 'textarea', placeholder: 'Identifikasi risiko terburuk...' },
        { name: 'kesediaanLaporan', label: 'Kesediaan Berbagi Laporan', type: 'checkbox', options: ['Laporan Keuangan', 'Laporan Operasional', 'Laporan Pemasaran'] }
      ]
    }
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setBukti([...bukti, ...files.map(file => ({
      name: file.name,
      size: file.size,
      type: file.type
    }))]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Data Tahap ${tahap} berhasil disimpan!`);
    if (onComplete) onComplete();
  };

  const config = tahapConfig[tahap];

  if (!config) return null;

  return (
    <div className="card border-0 shadow-lg" data-aos="fade-up">
      <div className="card-header bg-primary text-white">
        <h4 className="mb-0">{config.title}</h4>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          {config.fields.map((field) => (
            <div key={field.name} className="mb-4">
              <label className="form-label fw-bold">{field.label} *</label>
              {field.type === 'select' ? (
                <select
                  className="form-select"
                  value={formData[field.name] || ''}
                  onChange={(e) => setFormData({...formData, [field.name]: e.target.value})}
                  required
                >
                  <option value="">Pilih {field.label}</option>
                  {field.options.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              ) : field.type === 'textarea' ? (
                <textarea
                  className="form-control"
                  rows={4}
                  value={formData[field.name] || ''}
                  onChange={(e) => setFormData({...formData, [field.name]: e.target.value})}
                  placeholder={field.placeholder}
                  required
                />
              ) : field.type === 'checkbox' ? (
                <div className="border rounded p-3">
                  {field.options.map(opt => (
                    <div key={opt} className="form-check mb-2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id={opt}
                        checked={formData[field.name]?.includes(opt) || false}
                        onChange={(e) => {
                          const checked = e.target.checked;
                          setFormData(prev => ({
                            ...prev,
                            [field.name]: checked 
                              ? [...(prev[field.name] || []), opt]
                              : (prev[field.name] || []).filter(item => item !== opt)
                          }));
                        }}
                      />
                      <label className="form-check-label" htmlFor={opt}>
                        {opt}
                      </label>
                    </div>
                  ))}
                </div>
              ) : (
                <input
                  type={field.type}
                  className="form-control"
                  value={formData[field.name] || ''}
                  onChange={(e) => setFormData({...formData, [field.name]: e.target.value})}
                  placeholder={field.placeholder}
                  required
                />
              )}
            </div>
          ))}

          <div className="mb-4">
            <label className="form-label fw-bold">Upload Bukti Pendukung</label>
            <div className="border rounded p-4 text-center">
              <input
                type="file"
                className="d-none"
                id="fileUpload"
                multiple
                onChange={handleFileUpload}
              />
              <label htmlFor="fileUpload" className="btn btn-outline-primary mb-3">
                <i className="fas fa-cloud-upload-alt me-2"></i>
                Pilih File
              </label>
              <p className="text-muted small mb-2">Format: JPG, PNG, PDF (Max 5MB per file)</p>
              
              {bukti.length > 0 && (
                <div className="mt-3">
                  <h6 className="mb-2">File Terupload:</h6>
                  {bukti.map((file, index) => (
                    <div key={index} className="d-flex justify-content-between align-items-center border rounded p-2 mb-2">
                      <div>
                        <i className="fas fa-file me-2"></i>
                        <span>{file.name}</span>
                      </div>
                      <small className="text-muted">{(file.size / 1024).toFixed(1)} KB</small>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="alert alert-warning">
            <div className="d-flex">
              <i className="fas fa-exclamation-triangle me-3 mt-1"></i>
              <div>
                <small className="fw-bold">Validasi Sistem:</small>
                <small className="d-block">
                  Data akan divalidasi oleh sistem dan mentor. Ketidaksesuaian dapat menurunkan skor Anda.
                </small>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-between mt-4">
            {tahap > 1 && (
              <button type="button" className="btn btn-outline-secondary">
                Tahap Sebelumnya
              </button>
            )}
            <button type="submit" className="btn btn-primary ms-auto">
              Simpan dan Lanjut
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TahapUpload;