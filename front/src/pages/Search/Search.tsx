import './Search.css';
import { useState } from 'react';
import { SearchBar } from '../../widgets/SearchBar/SearchBar';
import { SongCard } from '../../widgets/SongCard/SongCard';

const ALL_SONGS = [
  { id: '1', title: 'Hotel California', artist: 'Eagles', cover: 'https://picsum.photos/seed/hotel/300/300', genre: 'Rock', bpm: 75, duration: '6:30' },
  { id: '2', title: 'Wonderwall', artist: 'Oasis', cover: 'https://picsum.photos/seed/oasis/300/300', genre: 'Britpop', bpm: 87, duration: '4:18' },
  { id: '3', title: 'Stairway to Heaven', artist: 'Led Zeppelin', cover: 'https://picsum.photos/seed/ledzep/300/300', genre: 'Rock', bpm: 82, duration: '8:02' },
  { id: '4', title: 'Wish You Were Here', artist: 'Pink Floyd', cover: 'https://picsum.photos/seed/pinkfloyd/300/300', genre: 'Rock', bpm: 63, duration: '5:34' },
  { id: '5', title: 'Blackbird', artist: 'The Beatles', cover: 'https://picsum.photos/seed/beatles/300/300', genre: 'Folk', bpm: 93, duration: '2:18' },
  { id: '6', title: 'Nothing Else Matters', artist: 'Metallica', cover: 'https://picsum.photos/seed/metal/300/300', genre: 'Metal', bpm: 69, duration: '6:28' },
  { id: '7', title: 'Creep', artist: 'Radiohead', cover: 'https://picsum.photos/seed/radio/300/300', genre: 'Alt Rock', bpm: 92, duration: '3:55' },
  { id: '8', title: 'Smells Like Teen Spirit', artist: 'Nirvana', cover: 'https://picsum.photos/seed/nirv/300/300', genre: 'Grunge', bpm: 116, duration: '5:01' },
];

const CATEGORIES = [
  { label: 'Rock', color: '#7C3AED', img: 'https://picsum.photos/seed/cat-rock/300/120' },
  { label: 'Blues', color: '#1D4ED8', img: 'https://picsum.photos/seed/cat-blues/300/120' },
  { label: 'Jazz', color: '#B45309', img: 'https://picsum.photos/seed/cat-jazz/300/120' },
  { label: 'Metal', color: '#374151', img: 'https://picsum.photos/seed/cat-metal/300/120' },
  { label: 'Folk', color: '#065F46', img: 'https://picsum.photos/seed/cat-folk/300/120' },
  { label: 'Pop', color: '#BE185D', img: 'https://picsum.photos/seed/cat-pop/300/120' },
  { label: 'Grunge', color: '#44403C', img: 'https://picsum.photos/seed/cat-grunge/300/120' },
  { label: 'Classical', color: '#1E3A5F', img: 'https://picsum.photos/seed/cat-class/300/120' },
];

const FILTERS = ['Все', 'Rock', 'Blues', 'Jazz', 'Metal', 'Folk', 'Grunge'];

export const Search = () => {
  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('Все');

  const filtered = ALL_SONGS.filter(s => {
    const q = query.toLowerCase();
    const matchQuery = !q || s.title.toLowerCase().includes(q) || s.artist.toLowerCase().includes(q);
    const matchFilter = activeFilter === 'Все' || s.genre === activeFilter;
    return matchQuery && matchFilter;
  });

  const hasQuery = query.length > 0;

  return (
    <main className="search-page page-enter">
      <div className="search-page__header">
        <h1 className="search-page__title">Поиск</h1>
        <SearchBar value={query} onChange={setQuery} />

        {hasQuery && (
          <div className="search-page__filters">
            {FILTERS.map(f => (
              <button
                key={f}
                className={`search-page__filter${activeFilter === f ? ' active' : ''}`}
                onClick={() => setActiveFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Results */}
      {hasQuery ? (
        <section className="search-page__results">
          <div className="search-page__results-count">
            Найдено: <strong>{filtered.length}</strong> {filtered.length === 1 ? 'результат' : 'результата'}
          </div>
          <div>
            {filtered.map((song, i) => (
              <SongCard
                key={song.id}
                {...song}
                variant="list"
                index={i + 1}
              />
            ))}
          </div>
        </section>
      ) : (
        /* Browse categories */
        <section className="search-page__categories">
          <div className="section-header">
            <h2 className="section-title">Жанры</h2>
          </div>
          <div className="search-page__cats-grid">
            {CATEGORIES.map(cat => (
              <div key={cat.label} className="search-cat" onClick={() => { setQuery(cat.label); }}>
                <div
                  className="search-cat__bg"
                  style={{ backgroundImage: `url(${cat.img})`, backgroundColor: cat.color }}
                />
                <div className="search-cat__overlay" />
                <span className="search-cat__label">{cat.label}</span>
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  );
};
