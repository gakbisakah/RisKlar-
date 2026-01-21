export const statusDummy = [
  {
    id: 'status-1',
    umkmId: 'umkm-3',
    umkmNama: 'EcoPack Solution',
    investorId: 'investor-1',
    investorNama: 'Investor X',
    status: 'Dalam Kerja Sama',
    warna: 'success',
    tanggalMulai: '2024-01-25',
    estimasiSelesai: '2027-01-25',
    jenisKerjaSama: 'Equity Investment',
    nilai: 'Rp 750.000.000',
    progress: 15,
    
    timeline: [
      {
        tanggal: '2024-01-18',
        event: 'Pertemuan pertama',
        status: 'Selesai'
      },
      {
        tanggal: '2024-01-20',
        event: 'Negosiasi term sheet',
        status: 'Selesai'
      },
      {
        tanggal: '2024-01-25',
        event: 'Penandatanganan awal',
        status: 'Selesai'
      },
      {
        tanggal: '2024-02-15',
        event: 'Due diligence',
        status: 'Dalam Proses'
      },
      {
        tanggal: '2024-03-01',
        event: 'Pencairan tahap pertama',
        status: 'Menunggu'
      }
    ],
    
    catatanPlatform: 'Platform hanya mencatat proses, bukan menilai hasil kerja sama.'
  },
  
  {
    id: 'status-2',
    umkmId: 'umkm-2',
    umkmNama: 'Batik Kreatif Indonesia',
    investorId: null,
    investorNama: null,
    status: 'Mencari Investor',
    warna: 'warning',
    tanggalMulai: '2024-01-02',
    
    timeline: [
      {
        tanggal: '2024-01-02',
        event: 'Bergabung platform',
        status: 'Selesai'
      },
      {
        tanggal: '2024-01-15',
        event: 'Lolos penyaringan sistem',
        status: 'Selesai'
      },
      {
        tanggal: '2024-01-20',
        event: 'Tersedia untuk investor',
        status: 'Selesai'
      }
    ]
  }
]

export const getAllStatus = () => statusDummy

export const getStatusByUMKMId = (umkmId) => {
  return statusDummy.find(status => status.umkmId === umkmId)
}

export const updateStatus = (umkmId, newStatus) => {
  const index = statusDummy.findIndex(s => s.umkmId === umkmId)
  if (index !== -1) {
    statusDummy[index].status = newStatus
    
    // Update warna berdasarkan status
    const statusColors = {
      'Dalam Kerja Sama': 'success',
      'Kerja Sama Selesai': 'info',
      'Dibatalkan': 'danger',
      'Mencari Investor': 'warning'
    }
    
    statusDummy[index].warna = statusColors[newStatus] || 'info'
    return statusDummy[index]
  }
  return null
}