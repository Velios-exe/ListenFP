import '../../styles/Song.css';
import { ChordViewer } from '../../widgets/ChordViewer/ChordViewer';

/* Static mock for visual prototype */
const SONG = {
  title: 'Hotel California',
  artist: 'Eagles',
  genre: 'Classic Rock',
  bpm: 75,
  key: 'Am',
  duration: '6:30',
  cover: 'https://picsum.photos/seed/hotelcal/600/600',
  progressPercent: 35,
};

export const Song = () => {
  return (
    <div className="song-page page-enter">
      {/* ── Left Panel ── */}
      <aside className="song-page__left">
        {/* Cover */}
        <div className="song-page__cover-wrap">
          <img className="song-page__cover" src={SONG.cover} alt={SONG.title} />
          <div className="song-page__cover-overlay" />
          <div className="song-page__cover-badge">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5,3 19,12 5,21"/>
            </svg>
            Сейчас играет
          </div>
        </div>

        {/* Song meta */}
        <div className="song-page__meta">
          <h1 className="song-page__title">{SONG.title}</h1>
          <div className="song-page__artist">{SONG.artist}</div>
          <div className="song-page__tags">
            <span className="song-page__tag">{SONG.genre}</span>
            <span className="song-page__tag">Акустика</span>
            <span className="song-page__tag">Классика</span>
          </div>
        </div>

        {/* Stats */}
        <div className="song-page__stats">
          <div className="song-page__stat">
            <span className="song-page__stat-label">Тональность</span>
            <span className="song-page__stat-value song-page__stat-value--accent">{SONG.key}</span>
          </div>
          <div className="song-page__stat">
            <span className="song-page__stat-label">Темп</span>
            <span className="song-page__stat-value">{SONG.bpm} BPM</span>
          </div>
          <div className="song-page__stat">
            <span className="song-page__stat-label">Длительность</span>
            <span className="song-page__stat-value">{SONG.duration}</span>
          </div>
          <div className="song-page__stat">
            <span className="song-page__stat-label">Сложность</span>
            <span className="song-page__stat-value song-page__stat-value--accent">★★★☆☆</span>
          </div>
        </div>

        {/* Player controls */}
        <div className="song-page__player">
          <div className="song-page__player-btns">
            {/* Prev */}
            <button className="song-page__player-btn" aria-label="Перемотать назад 10 сек">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 102.13-9.36L1 10"/>
              </svg>
            </button>

            {/* Play / Pause */}
            <button className="song-page__player-btn song-page__player-btn--main" aria-label="Воспроизвести">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5,3 19,12 5,21"/>
              </svg>
            </button>

            {/* Fwd */}
            <button className="song-page__player-btn" aria-label="Перемотать вперёд 10 сек">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 11-2.12-9.36L23 10"/>
              </svg>
            </button>
          </div>

          {/* Progress bar */}
          <div className="song-page__progress">
            <span className="song-page__progress-time">2:18</span>
            <div className="song-page__progress-bar" role="slider" aria-label="Прогресс воспроизведения">
              <div className="song-page__progress-fill" style={{ width: `${SONG.progressPercent}%` }} />
            </div>
            <span className="song-page__progress-time">{SONG.duration}</span>
          </div>
        </div>

        {/* Action buttons */}
        <div className="song-page__actions">
          <button className="song-page__action-btn song-page__action-btn--like" aria-label="Добавить в избранное">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
            </svg>
            В избранное
          </button>
          <button className="song-page__action-btn song-page__action-btn--share" aria-label="Поделиться">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
            </svg>
            Поделиться
          </button>
        </div>
      </aside>

      {/* ── Right Panel ── */}
      <section className="song-page__right">
        <div className="song-page__right-header">
          <h2 className="song-page__right-title">Аккорды и табулатура</h2>
          <div className="song-page__key-badge">
            Тональность: <strong>{SONG.key}</strong>
          </div>
        </div>

        {/* ChordViewer with tabs: Аккорды / Табулатура / Текст */}
        {/* activeChordIndex — передаётся из логики плеера */}
        <ChordViewer activeChordIndex={2} />
      </section>
    </div>
  );
};
