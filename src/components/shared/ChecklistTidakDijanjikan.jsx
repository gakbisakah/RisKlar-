import React from 'react';

const ChecklistTidakDijanjikan = () => {
  const items = [
    'Keuntungan atau Return on Investment (ROI) tertentu',
    'Pengembalian dana investasi',
    'Keberhasilan bisnis UMKM',
    'Rekomendasi investasi dari platform',
    'Jaminan legalitas sempurna',
    'Minimal risiko kerugian',
    'Kemudahan exit strategy',
    'Data yang 100% akurat tanpa verifikasi mandiri',
    'Komitmen waktu tertentu dari UMKM',
    'Performa masa depan berdasarkan data historis'
  ];

  return (
    <div className="card border-danger border-2" data-aos="fade-up">
      <div className="card-header bg-danger text-white">
        <h5 className="mb-0">
          <i className="fas fa-exclamation-triangle me-2"></i>
          YANG TIDAK DIJANJIKAN PLATFORM
        </h5>
      </div>
      <div className="card-body">
        <p className="text-muted mb-4">
          Platform ini bersifat informatif dan transparan. Berikut hal-hal yang TIDAK kami janjikan:
        </p>
        
        <div className="row">
          {items.map((item, index) => (
            <div key={index} className="col-md-6 mb-3">
              <div className="border-start border-danger border-3 ps-3 py-1">
                <div className="d-flex align-items-start">
                  <i className="fas fa-times text-danger me-2 mt-1"></i>
                  <span className="small">{item}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="alert alert-warning mt-4">
          <div className="d-flex">
            <i className="fas fa-info-circle me-3 mt-1"></i>
            <div>
              <small>
                Platform hanya menyediakan informasi berdasarkan data yang diberikan UMKM.
                Keputusan investasi sepenuhnya menjadi tanggung jawab masing-masing pihak.
                Selalu lakukan due diligence mandiri sebelum mengambil keputusan.
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChecklistTidakDijanjikan;