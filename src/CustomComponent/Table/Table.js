import './Table.css'
function Table({data , headers , keys  , renderAction}){
  return(
    <div className="table-container">
      <table>
        <thead>
          <tr>
            {
              headers?.map((item)=>{
                return(
                  <th>{item}</th>
                )
              })
            }
          </tr>
        </thead>
        <tbody>
          {
            data.length>0?data.map((item)=>{
              return(
                <tr>
                  {
                    keys?.map((key)=>{
                      return(
                        <>
                          <td>
                            {item[key]?item[key]:"-"}
                          </td>
                        </>
                      )
                    })
                  }
                  {renderAction && renderAction(item)}
                </tr>
              )
            }):<td  colSpan={keys.length + 1} className='no_data'>there is no data to display...</td>
          }
        </tbody>
      </table>
    </div>
  )
}
export default Table