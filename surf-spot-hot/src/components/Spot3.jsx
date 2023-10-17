import Spot3 from "./components/Spot3"


function Spot3(plage) {

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
  
  export default Spot3;