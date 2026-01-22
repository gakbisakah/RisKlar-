import React from 'react';

const CatatanSistem = ({ catatan }) => {
  const defaultCatatan = catatan || {
    sistem: [
      'UMKM ini telah melalui 3 kali review mentor',
      'Skor meningkat 14% dalam 30 hari terakhir',
      'Masih dalam tahap perbaikan legalitas',
      'Telah mengunggah bukti operasional'
    ],
    mentor: [
      'Keuangan sudah realistis, perlu perbaikan SOP operasional',
      'Model bisnis cukup kuat untuk skala kecil',
      'Komitmen perbaikan terlihat dari riwayat upload'
    ],
    peringatan: [
      'Legalitas belum lengkap - perlu NIB dan izin usaha',
      'Cash flow masih tergantung pada pemilik',
      'Belum memiliki sistem manajemen yang terdokumentasi'
    ]
  };

  return (
    <div className="card border-0 shadow" data-aos="fade-up">
      <div className="card-header bg-info text-white">
        <h5 className="mb-0">
          <i className="fas fa-sticky-note me-2"></i>
          Catatan Sistem
        </h5>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card border-0 bg-light h-100">
              <div className="card-body">
                <h6 className="text-info mb-3">
                  <i className="fas fa-robot me-2"></i>
                  Catatan Sistem
                </h6>
                <ul className="list-unstyled mb-0">
                  {defaultCatatan.sistem.map((item, index) => (
                    <li key={index} className="mb-2 d-flex align-items-start">
                      <i className="fas fa-circle text-info me-2 mt-1" style={{ fontSize: '6px' }}></i>
                      <small>{item}</small>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          <div className="col-md-4 mb-4">
            <div className="card border-0 bg-light h-100">
              <div className="card-body">
                <h6 className="text-warning mb-3">
                  <i className="fas fa-user-graduate me-2"></i>
                  Catatan Mentor
                </h6>
                <ul className="list-unstyled mb-0">
                  {defaultCatatan.mentor.map((item, index) => (
                    <li key={index} className="mb-2 d-flex align-items-start">
                      <i className="fas fa-circle text-warning me-2 mt-1" style={{ fontSize: '6px' }}></i>
                      <small>{item}</small>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          <div className="col-md-4 mb-4">
            <div className="card border-0 bg-light h-100">
              <div className="card-body">
                <h6 className="text-danger mb-3">
                  <i className="fas fa-exclamation-triangle me-2"></i>
                  Peringatan Sistem
                </h6>
                <ul className="list-unstyled mb-0">
                  {defaultCatatan.peringatan.map((item, index) => (
                    <li key={index} className="mb-2 d-flex align-items-start">
                      <i className="fas fa-circle text-danger me-2 mt-1" style={{ fontSize: '6px' }}></i>
                      <small>{item}</small>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="alert alert-light border mt-3">
          <small className="text-muted">
            <i className="fas fa-info-circle me-2"></i>
            Catatan ini dihasilkan secara otomatis berdasarkan data yang diunggah UMKM dan review mentor.
            Diperbarui setiap ada perubahan data atau review baru.
          </small>
        </div>
      </div>
    </div>
  );
};

export default CatatanSistem;