export const kesepakatanDummy = {
  'umkm-3': {
    id: 'ksp-1',
    umkmId: 'umkm-3',
    investorId: 'investor-1',
    tanggalMulai: '2024-01-20',
    status: 'Dalam Negosiasi',
    
    checklist: [
      { id: 'c1', item: 'Jumlah investasi disepakati', status: false },
      { id: 'c2', item: 'Valuasi perusahaan disepakati', status: false },
      { id: 'c3', item: 'Struktur kepemilikan jelas', status: false },
      { id: 'c4', item: 'Hak dan kewajiban investor', status: false },
      { id: 'c5', item: 'Exit strategy disepakati', status: false },
      { id: 'c6', item: 'Jangka waktu investasi', status: false },
      { id: 'c7', item: 'Mekanisme pengambilan keputusan', status: false },
      { id: 'c8', item: 'Konfirmasi kesediaan audit', status: true }
    ],
    
    dokumen: [
      { nama: 'Term Sheet Draft', status: 'Draft' },
      { nama: 'Business Plan Update', status: 'Selesai' }
    ],
    
    catatan: 'Negosiasi masih berjalan. Fokus pada klausa governance.',
    
    platformCatatan: 'Platform hanya mencatat proses, bukan menilai hasil kerja sama.'
  }
}

export const getKesepakatanByUMKMId = (umkmId) => {
  return kesepakatanDummy[umkmId] || null
}

export const updateChecklistItem = (umkmId, checklistId, status) => {
  const kesepakatan = kesepakatanDummy[umkmId]
  if (kesepakatan) {
    const item = kesepakatan.checklist.find(c => c.id === checklistId)
    if (item) {
      item.status = status
      return true
    }
  }
  return false
}