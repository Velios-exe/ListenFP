import '../../styles/Sidebar.css';
import { NavLink } from 'react-router-dom';

const recentTracks = [
  { id: '1', title: 'Wonderwall', artist: 'Oasis', cover: 'https://picsum.photos/seed/oasis/40/40' },
  { id: '2', title: 'Hotel California', artist: 'Eagles', cover: 'https://picsum.photos/seed/eagles/40/40' },
  { id: '3', title: 'Stairway to Heaven', artist: 'Led Zeppelin', cover: 'https://picsum.photos/seed/ledzep/40/40' },
];

export const Sidebar = () => {
  return (
    <aside className="sidebar">
      {/* Logo */}
      <div className="sidebar__logo">
        <div className="sidebar__logo-icon">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3a9 9 0 100 18A9 9 0 0012 3zm0 16a7 7 0 110-14 7 7 0 010 14zm-1-10.5v5l4-2.5-4-2.5z"/>
          </svg>
        </div>
        <span className="sidebar__logo-text">ListenFP</span>
      </div>

      {/* Main nav */}
      <nav className="sidebar__nav">
        <span className="sidebar__nav-label">Меню</span>

        <NavLink to="/" className={({ isActive }) => `sidebar__nav-item${isActive ? ' active' : ''}`} end>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
            <polyline points="9,22 9,12 15,12 15,22"/>
          </svg>
          Главная
        </NavLink>

        <NavLink to="/search" className={({ isActive }) => `sidebar__nav-item${isActive ? ' active' : ''}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/>
            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          Поиск
        </NavLink>

        <NavLink to="/library" className={({ isActive }) => `sidebar__nav-item${isActive ? ' active' : ''}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 19.5A2.5 2.5 0 016.5 17H20"/>
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/>
          </svg>
          Библиотека
        </NavLink>

        <NavLink to="/favorites" className={({ isActive }) => `sidebar__nav-item${isActive ? ' active' : ''}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
          </svg>
          Избранное
        </NavLink>
      </nav>

      {/* Recent tracks */}
      <div className="sidebar__recent">
        <div className="sidebar__recent-title">Недавнее</div>
        {recentTracks.map(track => (
          <div className="sidebar__recent-track" key={track.id}>
            <img className="sidebar__recent-cover" src={track.cover} alt={track.title} />
            <div className="sidebar__recent-info">
              <div className="sidebar__recent-name">{track.title}</div>
              <div className="sidebar__recent-artist">{track.artist}</div>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};
