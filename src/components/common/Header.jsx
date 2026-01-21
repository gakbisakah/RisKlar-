import { Link, useNavigate } from 'react-router-dom'
import { akunDummy } from '../../data/akunDummy'

const Header = () => {
  const navigate = useNavigate()
  const currentUser = akunDummy.getCurrentUser()

  const handleLogout = () => {
    akunDummy.logout()
    navigate('/auth')
  }

  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <div style={styles.logoContainer}>
          <Link to="/" style={styles.logo}>
            UMKM<span style={styles.logoHighlight}>Invest</span>
          </Link>
          <div style={styles.tagline}>Penyaring Risiko, Bukan Janji Keuntungan</div>
        </div>

        <nav style={styles.nav}>
          {currentUser ? (
            <>
              <Link to={currentUser.role === 'UMKM' ? '/dashboard-umkm' : '/dashboard-investor'} 
                    style={styles.navLink}>
                Dashboard
              </Link>
              <Link to="/penilaian" style={styles.navLink}>Prinsip Transparansi</Link>
              <div style={styles.userMenu}>
                <span style={styles.userName}>{currentUser.name}</span>
                <span style={styles.userRole}>{currentUser.role}</span>
                <button onClick={handleLogout} style={styles.logoutBtn}>
                  Keluar
                </button>
              </div>
            </>
          ) : (
            <>
              <Link to="/" style={styles.navLink}>Cara Kerja</Link>
              <Link to="/penilaian" style={styles.navLink}>Prinsip Transparansi</Link>
              <Link to="/penilaian" style={styles.navLink}>Tentang Sistem</Link>
              <Link to="/auth" style={styles.navLink}>
                <button style={styles.loginBtn}>Masuk</button>
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  )
}

const styles = {
  header: {
    backgroundColor: 'white',
    borderBottom: '1px solid #e5e7eb',
    padding: '1rem 0',
    position: 'sticky',
    top: 0,
    zIndex: 1000
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logoContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#1f2937',
    textDecoration: 'none'
  },
  logoHighlight: {
    color: '#2563eb'
  },
  tagline: {
    fontSize: '0.75rem',
    color: '#6b7280',
    marginTop: '0.25rem'
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
    gap: '2rem'
  },
  navLink: {
    color: '#4b5563',
    textDecoration: 'none',
    fontSize: '0.875rem',
    fontWeight: '500',
    transition: 'color 0.2s'
  },
  loginBtn: {
    backgroundColor: '#2563eb',
    color: 'white',
    padding: '0.5rem 1.5rem',
    border: 'none',
    borderRadius: '0.375rem',
    cursor: 'pointer',
    fontWeight: '600'
  },
  userMenu: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem'
  },
  userName: {
    fontSize: '0.875rem',
    fontWeight: '600'
  },
  userRole: {
    backgroundColor: '#dbeafe',
    color: '#1e40af',
    padding: '0.25rem 0.75rem',
    borderRadius: '9999px',
    fontSize: '0.75rem',
    fontWeight: '600'
  },
  logoutBtn: {
    backgroundColor: '#f3f4f6',
    color: '#4b5563',
    padding: '0.25rem 0.75rem',
    border: '1px solid #d1d5db',
    borderRadius: '0.375rem',
    cursor: 'pointer',
    fontSize: '0.875rem'
  }
}

export default Header