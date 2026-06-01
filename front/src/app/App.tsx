import { Routes, Route } from 'react-router-dom';
import { Sidebar } from '../widgets/Sidebar/Sidebar';
import { Player } from '../widgets/Player/Player';
import { Home } from '../pages/Home/Home';
import { Song } from '../pages/Song/Song';
import { Search } from '../pages/Search/Search';
import { Library } from '../pages/Library/Library';
import { Favorites } from '../pages/Favorites/Favorites';
import '../styles/global.css';

export const App = () => {
  return (
    <div className="app-layout">
      {/* Sidebar */}
      <div className="app-sidebar">
        <Sidebar />
      </div>

      {/* Main content */}
      <div className="app-main">
        <Routes>
          <Route path="/"           element={<Home />} />
          <Route path="/song/:id"   element={<Song />} />
          <Route path="/search"     element={<Search />} />
          <Route path="/library"    element={<Library />} />
          <Route path="/favorites"  element={<Favorites />} />
        </Routes>
      </div>

      {/* Footer player */}
      <div className="app-player">
        <Player />
      </div>
    </div>
  );
};
