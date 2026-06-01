import './Favorites.css';
import { SongCard } from '../../widgets/SongCard/SongCard';
import { useNavigate } from 'react-router-dom';

const FAVORITES = [
  { id: '1', title: 'Hotel California',    artist: 'Eagles',       cover: 'https://picsum.photos/seed/hotel/300/300',    genre: 'Rock',    bpm: 75,  duration: '6:30' },
  { id: '2', title: 'Wonderwall',          artist: 'Oasis',        cover: 'https://picsum.photos/seed/oasis/300/300',    genre: 'Britpop', bpm: 87,  duration: '4:18' },
  { id: '3', title: 'Stairway to Heaven',  artist: 'Led Zeppelin', cover: 'https://picsum.photos/seed/ledzep/300/300',   genre: 'Rock',    bpm: 82,  duration: '8:02' },
  { id: '5', title: 'Blackbird',           artist: 'The Beatles',  cover: 'https://picsum.photos/seed/beatles/300/300',  genre: 'Folk',    bpm: 93,  duration: '2:18' },
];

/* Set to [] to see empty state */
const hasFavorites = FAVORITES.length > 0;

export const Favorites = () => {
  const navigate = useNavigate();

  return (
    <main className="favorites-page page-enter">
      {/* Header */}
      <div className="favorites-page__header">
        <div className="favorites-page__header-icon">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
          </svg>
        </div>

        <div className="favorites-page__header-info">
          <div className="favorites-page__header-label">Плейлист</div>
          <h1 className="favorites-page__header-title">Избранное</h1>
          <div className="favorites-page__header-count">
            {FAVORITES.length} {FAVORITES.length === 1 ? 'песня' : FAVORITES.length < 5 ? 'песни' : 'песен'}
          </div>
        </div>

        {hasFavorites && (
          <div className="favorites-page__header-actions">
            <button className="favorites-page__play-btn" aria-label="Воспроизвести всё">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5,3 19,12 5,21"/>
              </svg>
            </button>
            <button className="favorites-page__action-btn" aria-label="Перемешать">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="16 3 21 3 21 8"/>
                <line x1="4" y1="20" x2="21" y2="3"/>
                <polyline points="21 16 21 21 16 21"/>
                <line x1="15" y1="15" x2="21" y2="21"/>
              </svg>
            </button>
            <button className="favorites-page__action-btn" aria-label="Ещё">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="5" r="1.5"/>
                <circle cx="12" cy="12" r="1.5"/>
                <circle cx="12" cy="19" r="1.5"/>
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* Content */}
      {hasFavorites ? (
        <div>
          {FAVORITES.map((song, i) => (
            <SongCard key={song.id} {...song} variant="list" index={i + 1} />
          ))}
        </div>
      ) : (
        /* Empty state */
        <div className="favorites-page__empty">
          <div className="favorites-page__empty-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
            </svg>
          </div>
          <div className="favorites-page__empty-title">Нет избранных песен</div>
          <div className="favorites-page__empty-sub">
            Добавляйте понравившиеся песни, нажимая ♡ в карточке или на странице песни
          </div>
          <button className="favorites-page__empty-btn" onClick={() => navigate('/')}>
            Найти музыку
          </button>
        </div>
      )}
    </main>
  );
};
