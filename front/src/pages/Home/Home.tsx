import './Home.css';
import { SongCard } from '../../widgets/SongCard/SongCard';
import { useNavigate } from 'react-router-dom';

const POPULAR_SONGS = [
  { id: '1', title: 'Hotel California', artist: 'Eagles', cover: 'https://picsum.photos/seed/hotel/300/300', genre: 'Rock', bpm: 75, badge: '🔥 Топ' },
  { id: '2', title: 'Wonderwall', artist: 'Oasis', cover: 'https://picsum.photos/seed/oasis/300/300', genre: 'Britpop', bpm: 87 },
  { id: '3', title: 'Stairway to Heaven', artist: 'Led Zeppelin', cover: 'https://picsum.photos/seed/ledzep/300/300', genre: 'Rock', bpm: 82 },
  { id: '4', title: 'Wish You Were Here', artist: 'Pink Floyd', cover: 'https://picsum.photos/seed/pinkfloyd/300/300', genre: 'Rock', bpm: 63 },
  { id: '5', title: 'Blackbird', artist: 'The Beatles', cover: 'https://picsum.photos/seed/beatles/300/300', genre: 'Folk', bpm: 93 },
  { id: '6', title: 'Tears in Heaven', artist: 'Eric Clapton', cover: 'https://picsum.photos/seed/clapton/300/300', genre: 'Blues', bpm: 80 },
];

const RECENT_SONGS = [
  { id: '7', title: 'Nothing Else Matters', artist: 'Metallica', cover: 'https://picsum.photos/seed/metal/300/300', genre: 'Metal', bpm: 69 },
  { id: '8', title: 'Creep', artist: 'Radiohead', cover: 'https://picsum.photos/seed/radio/300/300', genre: 'Alt Rock', bpm: 92 },
  { id: '9', title: 'House of the Rising Sun', artist: 'The Animals', cover: 'https://picsum.photos/seed/animals/300/300', genre: 'Rock', bpm: 78 },
  { id: '10', title: 'Smells Like Teen Spirit', artist: 'Nirvana', cover: 'https://picsum.photos/seed/nirv/300/300', genre: 'Grunge', bpm: 116 },
];

const QUICK_PICKS = [
  { id: '1', title: 'Hotel California', artist: 'Eagles', cover: 'https://picsum.photos/seed/hotel/52/52' },
  { id: '2', title: 'Wonderwall', artist: 'Oasis', cover: 'https://picsum.photos/seed/oasis/52/52' },
  { id: '3', title: 'Blackbird', artist: 'The Beatles', cover: 'https://picsum.photos/seed/beatles/52/52' },
  { id: '5', title: 'Creep', artist: 'Radiohead', cover: 'https://picsum.photos/seed/radio/52/52' },
  { id: '6', title: 'Tears in Heaven', artist: 'Eric Clapton', cover: 'https://picsum.photos/seed/clapton/52/52' },
];

const ARTISTS = [
  { id: 'a1', name: 'Eagles', genre: 'Rock', avatar: 'https://picsum.photos/seed/eaglesart/80/80' },
  { id: 'a2', name: 'Oasis', genre: 'Britpop', avatar: 'https://picsum.photos/seed/oasisart/80/80' },
  { id: 'a3', name: 'Led Zeppelin', genre: 'Hard Rock', avatar: 'https://picsum.photos/seed/ledzep2/80/80' },
  { id: 'a4', name: 'Pink Floyd', genre: 'Prog Rock', avatar: 'https://picsum.photos/seed/pink2/80/80' },
  { id: 'a5', name: 'The Beatles', genre: 'Pop Rock', avatar: 'https://picsum.photos/seed/beat2/80/80' },
  { id: 'a6', name: 'Nirvana', genre: 'Grunge', avatar: 'https://picsum.photos/seed/nirv2/80/80' },
  { id: 'a7', name: 'Radiohead', genre: 'Alt Rock', avatar: 'https://picsum.photos/seed/radioart/80/80' },
];

export const Home = () => {
  const navigate = useNavigate();

  return (
    <main className="home page-enter">
      {/* Hero banner */}
      <div className="home__hero">
        <div className="home__hero-content">
          <div className="home__hero-label">Песня дня</div>
          <h1 className="home__hero-title">Hotel California</h1>
          <div className="home__hero-sub">Eagles · Am · 75 BPM · Classic Rock</div>
          <button className="home__hero-btn" onClick={() => navigate('/song/1')}>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5,3 19,12 5,21"/>
            </svg>
            Играть сейчас
          </button>
        </div>
        <div className="home__hero-cover" onClick={() => navigate('/song/1')}>
          <img src="https://picsum.photos/seed/hotel/280/280" alt="Hotel California" />
        </div>
      </div>

      {/* Quick picks */}
      <section className="home__section">
        <div className="section-header">
          <h2 className="section-title">Быстрый выбор</h2>
        </div>
        <div className="home__quick">
          {QUICK_PICKS.map(song => (
            <div key={song.id} className="home__quick-item" onClick={() => navigate(`/song/${song.id}`)}>
              <img src={song.cover} alt={song.title} />
              <div className="home__quick-info">
                <div className="home__quick-title">{song.title}</div>
                <div className="home__quick-artist">{song.artist}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Popular songs */}
      <section className="home__section">
        <div className="section-header">
          <h2 className="section-title">Популярные песни</h2>
          <a className="section-link" onClick={() => navigate('/library')}>Все песни →</a>
        </div>
        <div className="songs-grid">
          {POPULAR_SONGS.map(song => (
            <SongCard key={song.id} {...song} variant="grid" />
          ))}
        </div>
      </section>

      {/* Recently added */}
      <section className="home__section">
        <div className="section-header">
          <h2 className="section-title">Недавно добавленные</h2>
          <a className="section-link" onClick={() => navigate('/library')}>Смотреть все →</a>
        </div>
        <div className="songs-grid">
          {RECENT_SONGS.map(song => (
            <SongCard key={song.id} {...song} variant="grid" />
          ))}
        </div>
      </section>

      {/* Popular artists */}
      <section className="home__section">
        <div className="section-header">
          <h2 className="section-title">Популярные исполнители</h2>
        </div>
        <div className="artists-grid">
          {ARTISTS.map(artist => (
            <div key={artist.id} className="artist-card">
              <img className="artist-card__avatar" src={artist.avatar} alt={artist.name} />
              <div className="artist-card__name">{artist.name}</div>
              <div className="artist-card__genre">{artist.genre}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};
