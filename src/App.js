import './App.css';
import Nav from './components/Nav';
import Library from './components/Library';
import Topbar from './components/Topbar';
import Maintop from './components/Maintop';
import Player from './components/Player';

function App() {
  return (
    <>
    <div className="top-section">
    <div class="container">
    <div class="left  ">
      <Nav/>
      <Library/>
    </div>
    <div class="right">
      <Topbar/>
      <div class="main-body">
      <div class="from-your-playlist">
    <Maintop/>
      </div>
      </div>
    </div>
    </div>
    </div>
    <div class="bottom-section">
      <Player/>
</div>
    </>
  );
}

export default App;
