import './TwoInputs.css'
function TwoInputs({typeOne , typeTwo ,valueOne , valueTwo , placeOne , placeTwo , fnOne , fnTwo}){
  return(
    <div className="twoInputs">
      <input type={typeOne} value={valueOne} placeholder={placeOne} onClick={fnOne} />
      <input type={typeTwo} value={valueTwo} placeholder={placeTwo} onClick={fnTwo} />
    </div>
  )
}
export default TwoInputs