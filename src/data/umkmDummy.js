export const umkmDummy = [
  {
    id: 'umkm-1',
    namaUsaha: 'Warung Kopi Nusantara',
    pemilik: 'Budi Santoso',
    email: 'umkm.a@demo.com',
    whatsapp: '+6281234567890',
    statusUsaha: 'Berjalan (1-3 tahun)',
    omzetRange: 'Rp 50-100 juta/tahun',
    karyawan: '2-5 orang',
    legalitas: 'Belum berbadan hukum',
    
    masalah: {
      masalahUtama: 'Manajemen keuangan tidak tertata',
      solusi: 'Sedang mencoba software akuntansi sederhana',
      bukti: 'Laporan keuangan manual',
      risikoTerburuk: 'Kebangkrutan dalam 6 bulan jika tidak ada perbaikan',
      penggunaanDana: 'Modal kerja dan pembelian peralatan',
      kesediaanTransparansi: 'Ya, dengan batasan tertentu'
    },
    
    skor: {
      total: 45,
      legalitas: 30,
      kejelasanUsaha: 60,
      realistisKeuangan: 40,
      risikoOperasional: 50,
      masalahUtama: ['Arus kas tidak jelas', 'Target pasar terlalu umum'],
      rekomendasi: 'Fokus pada pembukuan dasar sebelum mencari investor'
    },
    
    timelinePerbaikan: [
      {
        date: '2024-01-10',
        action: 'Melengkapi data dasar usaha',
        perubahan: 'Data omzet dan karyawan diperbarui'
      },
      {
        date: '2024-01-12',
        action: 'Upload dokumen pendukung',
        perubahan: 'Tambahan foto usaha dan produk'
      }
    ],
    
    catatanSistem: [
      'Legalitas dasar belum memadai untuk investasi',
      'Perlu bukti konsistensi omzet minimal 6 bulan',
      'Struktur biaya operasional belum jelas'
    ],
    
    statusInvestor: 'hidden',
    tanggalBergabung: '2024-01-05'
  },
  
  {
    id: 'umkm-2',
    namaUsaha: 'Batik Kreatif Indonesia',
    pemilik: 'Siti Aminah',
    email: 'umkm.b@demo.com',
    whatsapp: '+6282345678901',
    statusUsaha: 'Berjalan (3-5 tahun)',
    omzetRange: 'Rp 200-500 juta/tahun',
    karyawan: '10-15 orang',
    legalitas: 'CV',
    
    masalah: {
      masalahUtama: 'Ekspansi pasar terhambat modal',
      solusi: 'Sudah memiliki rencana pemasaran digital',
      bukti: 'Analisis pasar dan kompetitor',
      risikoTerburuk: 'Pertumbuhan stagnan',
      penggunaanDana: 'Ekspansi produksi dan marketing',
      kesediaanTransparansi: 'Ya, penuh'
    },
    
    skor: {
      total: 68,
      legalitas: 80,
      kejelasanUsaha: 75,
      realistisKeuangan: 60,
      risikoOperasional: 65,
      masalahUtama: ['Perlu stabilisasi arus kas', 'Risiko persaingan tinggi'],
      rekomendasi: 'Siap presentasi dengan catatan risiko operasional'
    },
    
    timelinePerbaikan: [
      {
        date: '2024-01-08',
        action: 'Perbaikan data keuangan',
        perubahan: 'Laporan keuangan 3 bulan terakhir'
      },
      {
        date: '2024-01-15',
        action: 'Analisis pasar',
        perubahan: 'Data target pasar diperbarui'
      },
      {
        date: '2024-01-18',
        action: 'Rencana penggunaan dana',
        perubahan: 'Detail alokasi dana investasi'
      }
    ],
    
    catatanSistem: [
      'Arus kas belum stabil sepanjang tahun',
      'Risiko persaingan di pasar batik cukup tinggi',
      'Sudah memiliki legalitas yang memadai'
    ],
    
    statusInvestor: 'visible',
    investorViews: 12,
    tanggalBergabung: '2024-01-02'
  },
  
  {
    id: 'umkm-3',
    namaUsaha: 'EcoPack Solution',
    pemilik: 'Rudi Hartono',
    email: 'umkm.c@demo.com',
    whatsapp: '+6283456789012',
    statusUsaha: 'Berjalan (>5 tahun)',
    omzetRange: 'Rp 1-2 M/tahun',
    karyawan: '20-30 orang',
    legalitas: 'PT',
    
    masalah: {
      masalahUtama: 'Kebutuhan modal untuk otomasi produksi',
      solusi: 'Sudah ada prototype mesin otomasi',
      bukti: 'Studi kelayakan dan R&D',
      risikoTerburuk: 'Delay implementasi teknologi',
      penggunaanDana: 'Otomasi dan riset produk baru',
      kesediaanTransparansi: 'Ya, termasuk audit eksternal'
    },
    
    skor: {
      total: 82,
      legalitas: 90,
      kejelasanUsaha: 85,
      realistisKeuangan: 80,
      risikoOperasional: 75,
      masalahUtama: ['Investasi teknologi berisiko tinggi', 'Lead time implementasi'],
      rekomendasi: 'Layak dipresentasikan ke investor'
    },
    
    timelinePerbaikan: [
      {
        date: '2023-12-20',
        action: 'Penyempurnaan business plan',
        perubahan: 'Rencana bisnis 3 tahun'
      },
      {
        date: '2024-01-05',
        action: 'Analisis risiko teknologi',
        perubahan: 'Mitigasi risiko otomasi'
      },
      {
        date: '2024-01-10',
        action: 'Persiapan data investor',
        perubahan: 'Deck presentasi lengkap'
      }
    ],
    
    catatanSistem: [
      'Struktur bisnis sudah matang',
      'Risiko utama pada implementasi teknologi',
      'Track record keuangan baik'
    ],
    
    statusInvestor: 'featured',
    investorViews: 25,
    minatInvestor: 3,
    tanggalBergabung: '2023-12-15'
  }
]

export const getUMKMById = (id) => {
  return umkmDummy.find(umkm => umkm.id === id)
}

export const getUMKMForInvestor = () => {
  return umkmDummy.filter(umkm => umkm.statusInvestor !== 'hidden')
}

export const updateUMKMSkor = (id, newData) => {
  const index = umkmDummy.findIndex(umkm => umkm.id === id)
  if (index !== -1) {
    umkmDummy[index] = { ...umkmDummy[index], ...newData }
    return umkmDummy[index]
  }
  return null
}