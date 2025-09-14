import { Search } from '../../../Assets/SVGS';
import './SearchInput.css'
function SearchInput(){
  return (
    <>
      <div className='search-input'>
        <div className='icon'>
          <Search width='25px' />
        </div>
        <input type='search' placeholder='Search here...' />
      </div>
    </>
  );
}
export default SearchInput