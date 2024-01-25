import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';
function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="easy" targetTime={1}/>
        <TimerChallenge title="Not easy" targetTime={2} />
        <TimerChallenge title="Getting tough" targetTime={5} />
        <TimerChallenge title="Die to play" targetTime={10} />
      </div>
    </>
  );
}

export default App;
