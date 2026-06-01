import '../../styles/Library.css';
import { useState } from 'react';
import { SongCard } from '../../widgets/SongCard/SongCard';

const SONGS = [
  { id: '1',  title: 'Hotel California',      artist: 'Eagles',       cover: 'https://picsum.photos/seed/hotel/300/300',    genre: 'Rock',    bpm: 75,  duration: '6:30' },
  { id: '2',  title: 'Wonderwall',             artist: 'Oasis',        cover: 'https://picsum.photos/seed/oasis/300/300',    genre: 'Britpop', bpm: 87,  duration: '4:18' },
  { id: '3',  title: 'Stairway to Heaven',     artist: 'Led Zeppelin', cover: 'https://picsum.photos/seed/ledzep/300/300',   genre: 'Rock',    bpm: 82,  duration: '8:02' },
  { id: '4',  title: 'Wish You Were Here',     artist: 'Pink Floyd',   cover: 'https://picsum.photos/seed/pinkfloyd/300/300',genre: 'Rock',    bpm: 63,  duration: '5:34' },
  { id: '5',  title: 'Blackbird',              artist: 'The Beatles',  cover: 'https://picsum.photos/seed/beatles/300/300',  genre: 'Folk',    bpm: 93,  duration: '2:18' },
  { id: '6',  title: 'Tears in Heaven',        artist: 'Eric Clapton', cover: 'https://picsum.photos/seed/clapton/300/300', genre: 'Blues',   bpm: 80,  duration: '4:36' },
  { id: '7',  title: 'Nothing Else Matters',   artist: 'Metallica',    cover: 'https://picsum.photos/seed/metal/300/300',   genre: 'Metal',   bpm: 69,  duration: '6:28' },
  { id: '8',  title: 'Creep',                  artist: 'Radiohead',    cover: 'https://picsum.photos/seed/radio/300/300',   genre: 'Alt Rock',bpm: 92,  duration: '3:55' },
  { id: '9',  title: 'House of the Rising Sun',artist: 'The Animals',  cover: 'https://picsum.photos/seed/animals/300/300', genre: 'Rock',    bpm: 78,  duration: '4:31' },
  { id: '10', title: 'Smells Like Teen Spirit',artist: 'Nirvana',      cover: 'https://picsum.photos/seed/nirv/300/300',    genre: 'Grunge',  bpm: 116, duration: '5:01' },
  { id: '11', title: 'Bohemian Rhapsody',      artist: 'Queen',        cover: 'https://picsum.photos/seed/queen/300/300',   genre: 'Rock',    bpm: 72,  duration: '5:55' },
  { id: '12', title: 'Behind Blue Eyes',       artist: 'The Who',      cover: 'https://picsum.photos/seed/thewho/300/300',  genre: 'Rock',    bpm: 88,  duration: '3:42' },
];

type ViewMode = 'list' | 'grid';

export const Library = () => {
  const [view, setView] = useState<ViewMode>('list');

  return (
    <main className="library-page page-enter">
      <div className="library-page__header">
        <div>
          <h1 className="library-page__title">Библиотека</h1>
          <div className="library-page__subtitle">{SONGS.length} песен</div>
        </div>

        <div className="library-page__controls">
          {/* Sort */}
          <select className="library-page__sort" aria-label="Сортировка">
            <option>По популярности</option>
            <option>По названию</option>
            <option>По исполнителю</option>
            <option>По BPM</option>
            <option>Недавно добавленные</option>
          </select>

          {/* View toggle */}
          <button
            className={`library-page__view-btn${view === 'list' ? ' active' : ''}`}
            onClick={() => setView('list')}
            aria-label="Список"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="8" y1="6" x2="21" y2="6"/>
              <line x1="8" y1="12" x2="21" y2="12"/>
              <line x1="8" y1="18" x2="21" y2="18"/>
              <line x1="3" y1="6" x2="3.01" y2="6"/>
              <line x1="3" y1="12" x2="3.01" y2="12"/>
              <line x1="3" y1="18" x2="3.01" y2="18"/>
            </svg>
          </button>

          <button
            className={`library-page__view-btn${view === 'grid' ? ' active' : ''}`}
            onClick={() => setView('grid')}
            aria-label="Сетка"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
              <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Table header (list mode only) */}
      {view === 'list' && (
        <div className="library-page__table-header">
          <span className="library-page__col-label">#</span>
          <span className="library-page__col-label">Название</span>
          <span className="library-page__col-label">Исполнитель</span>
          <span className="library-page__col-label">Жанр</span>
          <span className="library-page__col-label">BPM</span>
          <span className="library-page__col-label library-page__col-label--right">Время</span>
        </div>
      )}

      {/* Songs */}
      {view === 'list' ? (
        <div>
          {SONGS.map((song, i) => (
            <SongCard key={song.id} {...song} variant="list" index={i + 1} />
          ))}
        </div>
      ) : (
        <div className="library-page__grid">
          {SONGS.map(song => (
            <SongCard key={song.id} {...song} variant="grid" />
          ))}
        </div>
      )}
    </main>
  );
};
