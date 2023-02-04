interface Props {
  data : [][]
}

const table = (props: Props) => {
  console.log(props.data)

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
                <th key={index} className="px-6 py-3">
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
                    <td key={index2} className="px-6 py-1" dangerouslySetInnerHTML={{__html: item2}}>

                    </td>
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
