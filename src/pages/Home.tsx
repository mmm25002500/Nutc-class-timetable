import school from "../assets/school.json";
import React, { useState, useEffect, SetStateAction } from 'react';
import axios from 'axios';
import Table from "../components/table";
import RedAlert from "../components/red-alert";

const Home = () => {

  // time table data
  const [data, setData] = useState([]);
  // id
  const [cache, setCache] = useState('');
  // class name
  const [filiterData, setFiliterData] = useState<{ id: string | number; name: string; }[]>([]);

  const getData = async (id: number | String) => {
    localStorage.setItem('classID', id.toString());
    await axios(`https://api.tershi.com/getTable?id=${id}`)
      .then((response) => {
        setData(response.data);
      }
    )
  };

  useEffect(() => {
    console.log('localStorage cache:' + localStorage.getItem('classID'))
    console.log('cache:' + cache)
    if (localStorage.getItem('classID') !== null) {
      getData(localStorage.getItem('classID') as string);
    }

  }, []);

  useEffect(() => {

    // 篩選班級到 filiterData
    setFiliterData(school.filter((item) => {
      // 如果沒有搜尋到 name
      if (String(item.name).toUpperCase().includes(cache.toUpperCase())) {
        return item.name.toUpperCase().includes(cache.toUpperCase())
      } else if (String(item.id).toUpperCase().includes(cache.toUpperCase())) {
        return item.id.toUpperCase().includes(cache.toUpperCase())
      } else {
        return false
      }
    }))

  }, [cache]);

  return (
    <div className="container mx-auto pt-8 pl-5 pr-5 text-black dark:text-white transition-colors duration-100">
      <h1 className="text-4xl text-center">國立臺中科技大學課表</h1>

      <RedAlert text="還沒做好拉w，預計要三月。"/>

      <select defaultValue={"defaultSelect"} value={localStorage.getItem('classID')!} onChange={(e) => getData(e.target.value)} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none">
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
