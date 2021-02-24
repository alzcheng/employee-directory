import React, { useState, useEffect } from 'react';
import Table from '../Components/Table/Table';
import axios from 'axios';

const Home = () => {
  const URL = "https://randomuser.me/api/?results=5"
  const [tableData, setTableData] = useState(null);


  useEffect(() => {
    axios.get(URL)
      .then(data => {
        console.log(data);
        setTableData(data);
      })
    return () => {

    }
  }, [])

  return (
    <div>
      <h1>Hello from home</h1>
      {tableData && <Table entries={tableData} />}
    </div>
  )
}

export default Home
