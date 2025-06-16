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
            data?.map((item)=>{
              return(
                <tr>
                  {
                    keys?.map((key)=>{
                      return(
                        <>
                          <td>
                            {item[key]}
                          </td>
                        </>
                      )
                    })
                  }
                  {renderAction && renderAction(item)}
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}
export default Table