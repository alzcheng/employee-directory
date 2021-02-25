import React, { useState, useEffect } from 'react';
import Table from '../Components/Table/Table';
import axios from 'axios';

const Home = () => {
  const URL = "https://randomuser.me/api/?results=5"
  const [tableData, setTableData] = useState({ arrayData: null });


  useEffect(() => {
    axios.get(URL)
      .then(data => {
        console.log(data.data.results);
        setTableData({ arrayData: data.data.results });
        console.log(tableData.arrayData);
      })
    return () => {

    }
  }, [])

  const sortUp = () => {
    const sortedData = tableData.arrayData.sort(function (a, b) {
      let fa = a.name.first.toLowerCase();
      let fb = b.name.first.toLowerCase();
      console.log(`${fa} and ${fb}`);
      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;
    });
    console.log(sortedData[1])
    setTableData({ arrayData: sortedData });
  }

  const sortDown = () => {
    const sortedData = tableData.arrayData.sort(function (a, b) {
      let fa = a.name.first.toLowerCase();
      let fb = b.name.first.toLowerCase();
      if (fa < fb) {
        return 1;
      }
      if (fa > fb) {
        return -1;
      }
      return 0;
    });
    console.log(sortedData[1])
    setTableData({ arrayData: sortedData });
  }

  return (
    <div>
      <h1>Hello from home</h1>
      <button onClick={sortUp}>Sort First Name Ascending</button>
      <button onClick={sortDown}>Sort First Name Descending</button>
      {tableData.arrayData && <Table entries={tableData.arrayData} />}
    </div>
  )
}

export default Home
