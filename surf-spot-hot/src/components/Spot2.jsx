import Spot2 from "./components/Spot2"


function Spot2(plage) {

  return (
    <figure>
      {plage.imgSrc ?(<img src={plage.imgSrc} 
      alt={plage.name} /> 
       ) : (
      <p>???</p>
      )}
      <figcaption>{plage.name}</figcaption>
    </figure>

)}
  
  export default Spot2;