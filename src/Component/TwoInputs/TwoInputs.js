import './TwoInputs.css'
function TwoInputs({typeOne , typeTwo ,valueOne , valueTwo , placeOne , placeTwo , fnOne , fnTwo}){
  return(
    <div className="twoInputs">
      <input type={typeOne} value={valueOne} placeholder={placeOne} onChange={fnOne} />
      <input type={typeTwo} value={valueTwo} placeholder={placeTwo} onChange={fnTwo} />
    </div>
  )
}
export default TwoInputs