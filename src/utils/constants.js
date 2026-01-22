export const ROLES = {
  UMKM: 'umkm',
  INVESTOR: 'investor',
  MENTOR: 'mentor',
  ADMIN: 'admin'
};

export const STATUS_COLORS = {
  'Belum Siap': 'danger',
  'Perlu Edukasi': 'warning',
  'Siap': 'success',
  'Layak Ditampilkan': 'success',
  'Belum Lengkap': 'secondary'
};

export const SCORE_RANGES = {
  LOW: { min: 0, max: 50, color: '#dc3545', label: 'Rendah' },
  MEDIUM: { min: 51, max: 70, color: '#ffc107', label: 'Sedang' },
  HIGH: { min: 71, max: 100, color: '#198754', label: 'Tinggi' }
};

export const DUMMY_ACCOUNTS = {
  umkm: { email: 'umkm@demo.id', password: 'demo123', role: 'umkm' },
  investor: { email: 'investor@demo.id', password: 'demo123', role: 'investor' },
  mentor: { email: 'mentor@demo.id', password: 'demo123', role: 'mentor' },
  admin: { email: 'admin@demo.id', password: 'admin123', role: 'admin' }
};

export const NAVIGATION = {
  LANDING: '/',
  AUTH: '/auth',
  DASHBOARD_UMKM: '/dashboard-umkm',
  DASHBOARD_INVESTOR: '/dashboard-investor',
  DASHBOARD_MENTOR: '/dashboard-mentor',
  DETAIL_UMKM: '/detail-umkm',
  KESEPAKATAN: '/kesepakatan',
  STATUS: '/status'
};