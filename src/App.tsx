import { PhaserGame } from './game/PhaserGame';
import './App.css';

function App() {
  return (
      <div className="app-container">
        {/* Das Spiel im Hintergrund */}
        <PhaserGame />

        {/* Hier kommt später dein React-UI drüber (Inventory, Stats) */}
        <div className="ui-layer">
          <h1>Dungeon Architect</h1>
          <p>Stats: HP 100 | Gold 0</p>
        </div>
      </div>
  );
}

export default App;
