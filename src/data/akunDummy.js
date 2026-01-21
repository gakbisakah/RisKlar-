export const akunDummy = {
  currentUser: null,
  
  users: [
    {
      id: 'umkm-1',
      role: 'UMKM',
      name: 'UMKM A - Warung Kopi Nusantara',
      email: 'umkm.a@demo.com',
      status: 'Belum Siap',
      skor: 45,
      lastLogin: '2024-01-15'
    },
    {
      id: 'umkm-2',
      role: 'UMKM',
      name: 'UMKM B - Batik Kreatif Indonesia',
      email: 'umkm.b@demo.com',
      status: 'Siap dengan Catatan',
      skor: 68,
      lastLogin: '2024-01-18'
    },
    {
      id: 'umkm-3',
      role: 'UMKM',
      name: 'UMKM C - EcoPack Solution',
      email: 'umkm.c@demo.com',
      status: 'Layak Dipresentasikan',
      skor: 82,
      lastLogin: '2024-01-20'
    },
    {
      id: 'investor-1',
      role: 'INVESTOR',
      name: 'Investor X',
      email: 'investor@demo.com',
      status: 'Aktif',
      lastLogin: '2024-01-19'
    },
    {
      id: 'mentor-1',
      role: 'MENTOR',
      name: 'Mentor Bisnis',
      email: 'mentor@demo.com',
      status: 'Tersedia',
      lastLogin: '2024-01-17'
    }
  ],

  login: function(email) {
    const user = this.users.find(u => u.email === email)
    if (user) {
      this.currentUser = user
      localStorage.setItem('currentUser', JSON.stringify(user))
      return user
    }
    return null
  },

  logout: function() {
    this.currentUser = null
    localStorage.removeItem('currentUser')
  },

  getCurrentUser: function() {
    if (!this.currentUser) {
      const stored = localStorage.getItem('currentUser')
      if (stored) {
        this.currentUser = JSON.parse(stored)
      }
    }
    return this.currentUser
  },

  getUsersByRole: function(role) {
    return this.users.filter(user => user.role === role)
  },

  getUserById: function(id) {
    return this.users.find(user => user.id === id)
  }
}