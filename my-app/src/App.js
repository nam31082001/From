
import './App.css';
import EssayForm from './component/EssayFrom';
import FlavorForm from './component/FlavorForm ';
import NameForm from './component/NameFrom';
import Reservation from './component/Reservation ';

function App() {
  return (
    <div>
     <NameForm/>
     <EssayForm/>
     <FlavorForm/>
     <Reservation/>
    </div>
  );
}

export default App;
