interface Props {
  data : [][]
}

const table = (props: Props) => {

  if (props.data.length === 0) {
    return (
      <div></div>
    )
  }

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {
              props.data[0].map((item, index) => (
                <th key={index} className="text-xs sm:text-sm md:text-md px-0 sm:px-4 md:px-6 py-3 text-center">
                  {item}
                </th>
                )
              )
            }
          </tr>
        </thead>
        <tbody>

          {
            props.data.slice(1).map((item, index) => (
              <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                {
                  item.map((item2, index2) => (
                    index2 === 1 ?
                      <td key={index2} className="text-xs sm:text-sm md:text-md px-0 sm:px-4 md:px-6 py-1 text-center" dangerouslySetInnerHTML={{ __html: `${(item2 as String ).split('~')[0]} <br>~<br> ${(item2 as String ).split('~')[1]}` }} /> :
                      <td key={index2} className="text-xs sm:text-sm md:text-md px-0 sm:px-4 md:px-6 py-1 text-center" dangerouslySetInnerHTML={{ __html: item2 }} />
                  ))
                }
              </tr>
              )
            )
          }
        </tbody>
      </table>
    </div>
  )
}

export default table;
