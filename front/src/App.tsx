import { Sidebar } from './widgets/Sidebar/Sidebar.tsx';
import { Player } from './widgets/Player/Player.tsx';
import './styles/global.css';
import {AppRouter} from "./app/router/router.tsx";

export const App = () => {
  return (
    <div className="app-layout">
      {/* Sidebar */}
      <div className="app-sidebar">
        <Sidebar />
      </div>

      {/* Main content */}
      <div className="app-main">
          <AppRouter />
      </div>

      {/* Footer player */}
      <div className="app-player">
        <Player />
      </div>
    </div>
  );
};
