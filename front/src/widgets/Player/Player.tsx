import './Player.css';

export const Player = () => {
  return (
    <footer className="player">
      {/* Left – track info */}
      <div className="player__track">
        <div className="player__cover">
          <img src="https://picsum.photos/seed/hotel/48/48" alt="Hotel California" />
          {/* Playing indicator — показывать когда isPlaying === true */}
          <div className="player__cover-playing-indicator">
            <div className="bars">
              <div className="bar" />
              <div className="bar" />
              <div className="bar" />
            </div>
          </div>
        </div>

        <div className="player__info">
          <div className="player__title">Hotel California</div>
          <div className="player__artist">Eagles</div>
        </div>

        <button className="player__like-btn liked" aria-label="Добавить в избранное">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
          </svg>
        </button>
      </div>

      {/* Center – controls */}
      <div className="player__controls">
        <div className="player__buttons">
          {/* Shuffle */}
          <button className="player__btn player__btn--shuffle" aria-label="Перемешать">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="16 3 21 3 21 8"/>
              <line x1="4" y1="20" x2="21" y2="3"/>
              <polyline points="21 16 21 21 16 21"/>
              <line x1="15" y1="15" x2="21" y2="21"/>
            </svg>
          </button>

          {/* Prev */}
          <button className="player__btn" aria-label="Предыдущий">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <polygon points="19,20 9,12 19,4"/>
              <line x1="5" y1="19" x2="5" y2="5" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </button>

          {/* Play / Pause */}
          <button className="player__btn player__btn--play" aria-label="Пауза">
            {/* Play icon */}
            {/* <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21"/></svg> */}
            {/* Pause icon */}
            <svg viewBox="0 0 24 24" fill="currentColor">
              <rect x="6" y="4" width="4" height="16" rx="1"/>
              <rect x="14" y="4" width="4" height="16" rx="1"/>
            </svg>
          </button>

          {/* Next */}
          <button className="player__btn" aria-label="Следующий">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5,4 15,12 5,20"/>
              <line x1="19" y1="5" x2="19" y2="19" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </button>

          {/* Repeat */}
          <button className="player__btn player__btn--repeat" aria-label="Повтор">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="17 1 21 5 17 9"/>
              <path d="M3 11V9a4 4 0 014-4h14"/>
              <polyline points="7 23 3 19 7 15"/>
              <path d="M21 13v2a4 4 0 01-4 4H3"/>
            </svg>
          </button>
        </div>

        {/* Progress */}
        <div className="player__progress">
          <span className="player__time">2:14</span>
          <div className="player__seek" role="slider" aria-label="Прогресс">
            <div className="player__seek-fill" style={{ width: '35%' }} />
          </div>
          <span className="player__time player__time--end">6:30</span>
        </div>
      </div>

      {/* Right – volume */}
      <div className="player__right">
        <button className="player__right-btn" aria-label="Очередь">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="8" y1="6" x2="21" y2="6"/>
            <line x1="8" y1="12" x2="21" y2="12"/>
            <line x1="8" y1="18" x2="21" y2="18"/>
            <line x1="3" y1="6" x2="3.01" y2="6"/>
            <line x1="3" y1="12" x2="3.01" y2="12"/>
            <line x1="3" y1="18" x2="3.01" y2="18"/>
          </svg>
        </button>

        <button className="player__right-btn" aria-label="Громкость">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
            <path d="M19.07 4.93a10 10 0 010 14.14"/>
            <path d="M15.54 8.46a5 5 0 010 7.07"/>
          </svg>
        </button>

        <div className="player__volume" role="slider" aria-label="Громкость">
          <div className="player__volume-fill" style={{ width: '70%' }} />
        </div>
      </div>
    </footer>
  );
};
