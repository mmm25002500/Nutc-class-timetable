import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import school from "../assets/school.json";
import React, { useState, useEffect, SetStateAction } from 'react';
import axios from 'axios';
import Table from "../components/table";

const Home = () => {

  const [data, setData] = useState([]);
  const [cache, setCache] = useState('');
  const [filiterData, setFiliterData] = useState<{ id: string | number; name: string; }[]>([]);

  const getData = async (id: number | String) => {
    await axios(`https://api.tershi.com/getTable?id=${id}`)
      .then((response) => {
        setData(response.data);
      }
    )
  };

  useEffect(() => {
    setFiliterData(school.filter((item) => {
      // 如果沒有搜尋到 name
      if (String(item.name).toUpperCase().includes(cache.toUpperCase())) {
        return item.name.toUpperCase().includes(cache.toUpperCase())
      } else {
        return false
      }
    }))

  }, [cache]);

  return (
    <div className="container mx-auto pt-8 pl-5 pr-5 text-black dark:text-white transition-colors duration-100">
      <h1 className="text-4xl text-center">臺中科技大學課表</h1>

      <div className="text-center p-4 mb-4 text-xl text-red-800 rounded-lg bg-red-100 dark:bg-gray-900 dark:text-red-400" role="alert">
        <FontAwesomeIcon icon={['fas', 'triangle-exclamation']} className="pr-2"/>
        還沒做好拉w，預計要三月。
      </div>

      <select defaultValue={"defaultSelect"} onChange={(e) => getData(e.target.value)} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none">
        <option value="defaultSelect" disabled className="">請選擇班級</option>
        {
          filiterData.map((item, index) => {
            return (
              <option key={item.id} value={item.id}>{ item.name }</option>
            )
          })
        }
      </select>

      <input type="text" id="first_name" onChange={ e => setCache(e.target.value)} className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none" placeholder="請輸入班級" required />
      <Table data={data} />
    </div>
  )
}

export default Home;
