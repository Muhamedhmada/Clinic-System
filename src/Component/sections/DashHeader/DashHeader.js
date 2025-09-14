import SearchInput from '../../common/SearchInput/SearchInput'
import './DashHeader.css'
function DashHeader({header , children , btnFn}){
  return(
    <div className="dashHeader-container">
      <h2>{header}</h2>
      <div>
        <SearchInput/>
        {
          btnFn&&
        <button onClick={btnFn}>add</button>
        }
      </div>
    </div>
  )
}
export default DashHeader