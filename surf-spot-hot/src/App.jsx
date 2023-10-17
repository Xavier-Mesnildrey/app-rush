import Spot1 from "./components/Spot1"
import Spot2 from "./components/Spot2"
import Spot3 from "./components/Spot3"
import './App.css'

const spotList = [
  { 
    name: "La Sud",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    level: "",
    meteo: "",
    localisation: "",
    },
  { 
    name: "Santosha",
    imgSrc: "",
    level: "",
    meteo: "",
    localisation: "",
 },
];


const App = () => {

  const plage = spotList[0]

  return (
    <div>
      <h1>Trouves ta vague</h1>
      <Spot1 plage={plage}/>
      <Spot2 plage={plage}/>
      <Spot3 plage={plage}/>
    </div>
  );
};

export default App;

