export const diskusiDummy = {
  'umkm-3': [
    {
      id: 'msg-1',
      pengirim: 'investor-1',
      nama: 'Investor X',
      role: 'INVESTOR',
      waktu: '2024-01-18 14:30',
      pesan: 'Bisa dijelaskan lebih detail mengenai timeline implementasi otomasi?',
      type: 'text'
    },
    {
      id: 'msg-2',
      pengirim: 'umkm-3',
      nama: 'Rudi Hartono',
      role: 'UMKM',
      waktu: '2024-01-18 15:15',
      pesan: 'Timeline estimasi 6-8 bulan dari dana cair. Sudah ada vendor teknologi yang siap.',
      type: 'text'
    },
    {
      id: 'msg-3',
      pengirim: 'investor-1',
      nama: 'Investor X',
      role: 'INVESTOR',
      waktu: '2024-01-18 16:00',
      pesan: 'Apakah ada risiko dependency pada vendor tersebut?',
      type: 'text'
    },
    {
      id: 'msg-4',
      pengirim: 'mentor-1',
      nama: 'Mentor Bisnis',
      role: 'MENTOR',
      waktu: '2024-01-18 16:30',
      pesan: 'Saran: Pertimbangkan klausa knowledge transfer dalam kontrak dengan vendor.',
      type: 'saran'
    }
  ],
  
  'umkm-2': [
    {
      id: 'msg-1',
      pengirim: 'mentor-1',
      nama: 'Mentor Bisnis',
      role: 'MENTOR',
      waktu: '2024-01-16 11:00',
      pesan: 'Untuk ekspansi pasar digital, apa sudah ada rencana marketing budget?',
      type: 'text'
    }
  ]
}

export const getDiskusiByUMKMId = (umkmId) => {
  return diskusiDummy[umkmId] || []
}

export const addDiskusiMessage = (umkmId, message) => {
  if (!diskusiDummy[umkmId]) {
    diskusiDummy[umkmId] = []
  }
  diskusiDummy[umkmId].push(message)
  return message
}