import logo from './logo.svg';
import './App.css';
import { Slides } from './components/Slides';


function App({slides}) {
   return (
     <div>
       <h1>Slideshow app</h1>
       <div className="App">
         <Slides slides={slides} />
       </div>
     </div>
   );
}

export default App;
