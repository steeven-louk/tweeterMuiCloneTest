import './App.css';
import Feed from './components/feed/Feed';
import LeftSide from './components/leftSide/LeftSide';
import RightSide from './components/rightSide/RightSide';

function App() {
  return (
    <div className="App d-flex ">
        <LeftSide />
        <Feed />
        <RightSide />
    </div>
  );
}

export default App;
