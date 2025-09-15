import { Search } from '../../../Assets/SVGS';
import './SearchInput.css'
function SearchInput({getSearchValue}){
  return (
    <>
      <div className='search-input'>
        <div className='icon'>
          <Search width='25px' />
        </div>
        <input onChange={(e)=>getSearchValue(e)} type='search' placeholder='Search here...' />
      </div>
    </>
  );
}
export default SearchInput