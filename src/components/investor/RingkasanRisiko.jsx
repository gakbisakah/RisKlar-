import React, { useState } from 'react';

const RingkasanRisiko = ({ umkmData }) => {
  const [understandRisk, setUnderstandRisk] = useState(false);
  const [understandExit, setUnderstandExit] = useState(false);
  const [understandNoGuarantee, setUnderstandNoGuarantee] = useState(false);

  const risikoLevel = umkmData.skorSekarang < 50 ? 'Tinggi' : 
                    umkmData.skorSekarang < 70 ? 'Sedang' : 'Rendah';

  const risikoWarna = risikoLevel === 'Tinggi' ? 'danger' : 
                     risikoLevel === 'Sedang' ? 'warning' : 'success';

  return (
    <div className="card border-0 shadow" data-aos="fade-up">
      <div className="card-header bg-danger text-white">
        <h4 className="mb-0">Ringkasan Risiko</h4>
      </div>
      <div className="card-body">
        <div className="row mb-4">
          <div className="col-md-6">
            <div className="card border-0 bg-light h-100">
              <div className="card-body">
                <h6 className="mb-3">Level Risiko</h6>
                <div className="text-center">
                  <div className={`rounded-circle bg-${risikoWarna} bg-opacity-10 text-${risikoWarna} p-4 d-inline-flex align-items-center justify-content-center mb-3`}>
                    <i className={`fas fa-exclamation-triangle fs-1`}></i>
                  </div>
                  <h3 className={`text-${risikoWarna} fw-bold`}>{risikoLevel}</h3>
                  <p className="text-muted small">Berdasarkan analisis sistem</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card border-0 bg-light h-100">
              <div className="card-body">
                <h6 className="mb-3">Faktor Risiko Utama</h6>
                <ul className="list-unstyled mb-0">
                  {umkmData.risikoUtama && (
                    <li className="mb-2 d-flex align-items-start">
                      <i className="fas fa-circle text-danger me-2 mt-1" style={{ fontSize: '8px' }}></i>
                      <span>{umkmData.risikoUtama}</span>
                    </li>
                  )}
                  <li className="mb-2 d-flex align-items-start">
                    <i className="fas fa-circle text-warning me-2 mt-1" style={{ fontSize: '8px' }}></i>
                    <span>Usaha skala kecil/mikro</span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <i className="fas fa-circle text-warning me-2 mt-1" style={{ fontSize: '8px' }}></i>
                    <span>Ketergantungan pada pemilik</span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <i className="fas fa-circle text-info me-2 mt-1" style={{ fontSize: '8px' }}></i>
                    <span>Fluktuasi pasar UMKM</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <h6 className="mb-3">Yang TIDAK Dijanjikan Platform:</h6>
          <div className="row g-2">
            {[
              'Keuntungan atau ROI tertentu',
              'Pengembalian investasi',
              'Keberhasilan bisnis',
              'Rekomendasi investasi',
              'Jaminan legalitas sempurna'
            ].map((item, index) => (
              <div key={index} className="col-md-6">
                <div className="border rounded p-3">
                  <div className="d-flex align-items-center">
                    <i className="fas fa-times text-danger me-3"></i>
                    <span className="small">{item}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="edu-checklist">
          <h6 className="mb-3">Checklist Pemahaman Risiko (Wajib):</h6>
          <div className="border rounded p-3">
            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                id="understandRisk"
                checked={understandRisk}
                onChange={(e) => setUnderstandRisk(e.target.checked)}
              />
              <label className="form-check-label" htmlFor="understandRisk">
                Saya memahami bahwa investasi UMKM memiliki risiko tinggi dan saya bisa kehilangan seluruh dana yang diinvestasikan
              </label>
            </div>
            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                id="understandExit"
                checked={understandExit}
                onChange={(e) => setUnderstandExit(e.target.checked)}
              />
              <label className="form-check-label" htmlFor="understandExit">
                Saya memahami bahwa exit strategy (cara keluar dari investasi) mungkin sulit dan memakan waktu lama
              </label>
            </div>
            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                id="understandNoGuarantee"
                checked={understandNoGuarantee}
                onChange={(e) => setUnderstandNoGuarantee(e.target.checked)}
              />
              <label className="form-check-label" htmlFor="understandNoGuarantee">
                Saya memahami bahwa platform TIDAK memberikan jaminan apapun dan semua keputusan investasi adalah tanggung jawab saya sepenuhnya
              </label>
            </div>
          </div>
        </div>

        <div className="alert alert-info mt-4">
          <div className="d-flex">
            <i className="fas fa-info-circle me-3 mt-1"></i>
            <div>
              <small>
                <span className="fw-bold">Disclaimer:</span> Analisis risiko ini berdasarkan data yang tersedia.
                Anda disarankan melakukan due diligence tambahan sebelum mengambil keputusan investasi.
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RingkasanRisiko;