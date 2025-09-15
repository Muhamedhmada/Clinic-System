import { useEffect, useState } from 'react'
import Loader from '../../common/Loader/Loader'
import './Table.css'
import Icon from '../../common/Icon/Icon'
import {ArrowLeft , ArrowRight} from '../../../Assets/SVGS.jsx'
import { AnimatePresence, motion } from 'framer-motion'
function Table({data , headers , keys  , renderAction , loader , searchValue=""}){

  const [filteredData , setFilteredData] = useState(data|| [])
  const [currentPage , setCurrentPage] = useState(1)
  let ItemsPerPage = 5
  let indexOfLastItem = currentPage * ItemsPerPage
  let indexOfFirstItem = indexOfLastItem - ItemsPerPage
  const totalPage = Math.ceil(data?.length / ItemsPerPage)
  const currentData = filteredData?.slice(indexOfFirstItem , indexOfLastItem)

  console.log(data)
  console.log(filteredData)
  console.log(currentData)
  console.log(searchValue === "")
  const filterData = ()=>{

    console.log(data)
    if(searchValue === ""){
      setFilteredData(data)
      console.log("no search")
      return
    }
    if(searchValue !== ""){
      console.log("search")
      const filterData = data?.filter(
        (item) =>
          item.first_name?.toLowerCase().includes(searchValue?.toLowerCase()) ||
          item.last_name?.toLowerCase().includes(searchValue?.toLowerCase()) 
          // item.phone.includes(searchValue)
      );
      setFilteredData(filterData)
    }
    console.log(searchValue)
  }


  useEffect(()=>{
    filterData()
  } , [searchValue , data])
  return (
    <div className='table-container'>
      <table>
        <thead>
          <tr>
            {headers?.map((item) => {
              return <th>{item}</th>;
            })}
          </tr>
        </thead>
        <AnimatePresence>
          <motion.tbody
            key={currentPage}
            initial={{translateX: -100, opacity: 0}}
            animate={{translateX: 0, opacity: 1}}
            transition={{duration: 0.5}}
          >
            {loader ? (
              <tr>
                <td colSpan={headers?.length}>
                  <Loader />
                </td>
              </tr>
            ) : currentData?.length > 0 ? (
              currentData.map((item) => {
                return (
                  <tr>
                    {keys?.map((key) => {
                      return (
                        <>
                          <td>
                            {key === "date"
                              ? new Date(item[key]).toLocaleDateString()
                              : item[key]
                              ? item[key]
                              : "-"}
                          </td>
                        </>
                      );
                    })}
                    {renderAction && renderAction(item)}
                  </tr>
                );
              })
            ) : (
              <td colSpan={keys?.length + 1} className='no_data'>
                there is no data to display...
              </td>
            )}
          </motion.tbody>
        </AnimatePresence>
      </table>

      {/* pagination */}
      {data?.length > 0 ? (
        <div className='table-pagination'>
          {currentPage > 1 ? (
            <Icon
              icon={<ArrowLeft />}
              func={() => setCurrentPage((prev) => (prev > 1 ? prev - 1 : 1))}
            />
          ) : null}
          {currentPage < totalPage ? (
            <Icon
              icon={<ArrowRight />}
              func={() =>
                setCurrentPage((prev) => (prev < totalPage ? prev + 1 : prev))
              }
            />
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
export default Table