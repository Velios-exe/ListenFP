import './SongCard.css';
import { useNavigate } from 'react-router-dom';

interface SongCardProps {
  id: string;
  title: string;
  artist: string;
  cover: string;
  genre?: string;
  bpm?: number;
  badge?: string;
  variant?: 'grid' | 'list';
  index?: number;
  duration?: string;
}

export const SongCard = ({
  id,
  title,
  artist,
  cover,
  genre,
  bpm,
  badge,
  variant = 'grid',
  index,
  duration,
}: SongCardProps) => {
  const navigate = useNavigate();

  if (variant === 'list') {
    return (
      <div className="song-card song-card--list" onClick={() => navigate(`/song/${id}`)}>
        {index !== undefined && <span className="song-card__num">{index}</span>}
        <div className="song-card__cover-wrap">
          <img className="song-card__cover" src={cover} alt={title} />
        </div>
        <div className="song-card__info">
          <div className="song-card__title">{title}</div>
          <div className="song-card__artist">{artist}</div>
        </div>
        {genre && <div className="song-card__tag">{genre}</div>}
        {bpm && <div className="song-card__bpm">{bpm} BPM</div>}
        <div className="song-card__action">
          <button className="song-card__action-btn" aria-label="Добавить в избранное">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
            </svg>
          </button>
          <button className="song-card__action-btn" aria-label="Ещё">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="5" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="19" r="1.5"/>
            </svg>
          </button>
        </div>
        {duration && <span className="song-card__duration">{duration}</span>}
      </div>
    );
  }

  return (
    <div className="song-card" onClick={() => navigate(`/song/${id}`)}>
      <div className="song-card__cover-wrap">
        <img className="song-card__cover" src={cover} alt={title} />
        {badge && <span className="song-card__badge">{badge}</span>}
        <div className="song-card__overlay">
          <button
            className="song-card__play-btn"
            aria-label={`Воспроизвести ${title}`}
            onClick={e => e.stopPropagation()}
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5,3 19,12 5,21"/>
            </svg>
          </button>
        </div>
      </div>

      <div className="song-card__title">{title}</div>
      <div className="song-card__artist">{artist}</div>

      {(genre || bpm) && (
        <div className="song-card__meta">
          {genre && <span className="song-card__tag">{genre}</span>}
          {bpm && <span className="song-card__bpm">{bpm} BPM</span>}
        </div>
      )}
    </div>
  );
};
