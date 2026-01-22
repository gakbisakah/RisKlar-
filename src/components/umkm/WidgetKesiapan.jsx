import React, { useState } from 'react';

const WidgetKesiapan = () => {
  const [selfCheck, setSelfCheck] = useState({
    q1: null,
    q2: null,
    q3: null,
    q4: null,
    q5: null
  });

  const questions = [
    { id: 'q1', text: 'Apakah usaha sudah berjalan minimal 6 bulan?' },
    { id: 'q2', text: 'Apakah memiliki pencatatan keuangan sederhana?' },
    { id: 'q3', text: 'Apakah siap membagikan data usaha secara transparan?' },
    { id: 'q4', text: 'Apakah memahami risiko investasi di UMKM?' },
    { id: 'q5', text: 'Apakah bersedia diperiksa oleh mentor independen?' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const yesCount = Object.values(selfCheck).filter(v => v === true).length;
    
    let status = '';
    if (yesCount >= 4) {
      status = 'Siap';
    } else if (yesCount >= 2) {
      status = 'Perlu Edukasi';
    } else {
      status = 'Belum Siap';
    }
    
    localStorage.setItem('self_check_status', status);
    alert(`Self Check selesai! Status: ${status}`);
  };

  return (
    <div className="card border-0 shadow mb-4" data-aos="fade-up">
      <div className="card-header bg-primary text-white">
        <h4 className="mb-0">Self Check Awal (Wajib)</h4>
      </div>
      <div className="card-body">
        <p className="text-muted mb-4">
          Jawab 5 pertanyaan ini untuk mengetahui kesiapan awal Anda. Hasil menentukan akses Anda ke sistem.
        </p>
        
        <form onSubmit={handleSubmit}>
          {questions.map((q, index) => (
            <div key={q.id} className="mb-4">
              <p className="fw-bold mb-2">{index + 1}. {q.text}</p>
              <div className="btn-group w-100" role="group">
                <button
                  type="button"
                  className={`btn ${selfCheck[q.id] === true ? 'btn-success' : 'btn-outline-success'}`}
                  onClick={() => setSelfCheck({...selfCheck, [q.id]: true})}
                >
                  Ya
                </button>
                <button
                  type="button"
                  className={`btn ${selfCheck[q.id] === false ? 'btn-danger' : 'btn-outline-danger'}`}
                  onClick={() => setSelfCheck({...selfCheck, [q.id]: false})}
                >
                  Tidak
                </button>
              </div>
            </div>
          ))}
          
          <div className="mt-4">
            <button type="submit" className="btn btn-primary btn-lg w-100">
              Lihat Hasil Self Check
            </button>
          </div>
        </form>
        
        <div className="alert alert-info mt-4">
          <h6 className="mb-2">Hasil Self Check:</h6>
          <div className="row text-center">
            <div className="col-4">
              <div className="rounded-circle bg-danger bg-opacity-10 text-danger p-3 d-inline-flex align-items-center justify-content-center mb-2">
                <i className="fas fa-times fs-4"></i>
              </div>
              <p className="mb-0 small fw-bold">Belum Siap</p>
              <small className="text-muted">Kebutuhan: Edukasi dasar</small>
            </div>
            <div className="col-4">
              <div className="rounded-circle bg-warning bg-opacity-10 text-warning p-3 d-inline-flex align-items-center justify-content-center mb-2">
                <i className="fas fa-exclamation fs-4"></i>
              </div>
              <p className="mb-0 small fw-bold">Perlu Edukasi</p>
              <small className="text-muted">Kebutuhan: Peningkatan</small>
            </div>
            <div className="col-4">
              <div className="rounded-circle bg-success bg-opacity-10 text-success p-3 d-inline-flex align-items-center justify-content-center mb-2">
                <i className="fas fa-check fs-4"></i>
              </div>
              <p className="mb-0 small fw-bold">Siap</p>
              <small className="text-muted">Kebutuhan: Review mentor</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WidgetKesiapan;