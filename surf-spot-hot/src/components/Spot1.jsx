import Spot1 from "./components/Spot1"

function Spot1(plage) {

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

  
  export default Spot1;