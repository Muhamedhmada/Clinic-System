const handleSearch = ({data , keys , searchValue })=>{
  // remove space from value i search on it
  searchValue = searchValue.trim()
  // if no search value return all data
  if(searchValue === "") return data
  // filter data
  return  data?.filter((item) =>
    keys.some(
      (key) =>
        item[key]?.toLowerCase().includes(searchValue.toLocaleLowerCase())
    )
  );
}
export default handleSearch