import './App.css';
import HomePage from './pages/HomePage';
import Toggles from './components/Toggles';
function App() {
  return (
    <div className="container">
      <div>
      <HomePage/>
      </div>
     <div>
      <Toggles/>
     </div>
    </div>
  );
}

export default App;
