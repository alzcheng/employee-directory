import React, { useState, useEffect } from 'react';
import Table from '../Components/Table/Table';
import axios from 'axios';
import Button from '../Components/Button/Button';
import "./Home.css";

const Home = () => {
  const URL = "https://randomuser.me/api/?results=50"
  const [tableData, setTableData] = useState({
    arrayData: null,
    originalData: null,
  });


  useEffect(() => {
    axios.get(URL)
      .then(data => {
        console.log(data.data.results);
        setTableData({ arrayData: data.data.results, originalData: data.data.results });
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
    setTableData({ ...tableData, arrayData: sortedData });
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
    setTableData({ ...tableData, arrayData: sortedData });
  }

  const stateReset = () => {
    const originalData = tableData.originalData;
    console.log(originalData);
    setTableData({ ...tableData, arrayData: originalData })
  }
  const filterAge = (age) => {
    stateReset();
    console.log(age)
    const sortedData = tableData.arrayData.filter(data => parseInt(data.dob.age) == age);
    console.log(sortedData);
    console.log(tableData.originalData)
    setTableData({ ...tableData, arrayData: sortedData })
  }

  return (
    <div className="home-page">
      <h1>Employee Directory</h1>
      <Button clickFunction={sortUp} name="Sort First Name Ascending" />
      <Button clickFunction={sortDown} name="Sort First Name Descending" />
      <form>
        <input id="filteredAge" type="text" name="filterAge" placeholder="Enter an Age Number" />
        <Button clickFunction={(e) => {
          e.preventDefault();
          const age = document.getElementById("filteredAge").value;
          filterAge(age);
        }} name="Age Filter" />
        <Button clickFunction={(e) => {
          e.preventDefault();
          stateReset()
        }} name="Age Unfilter" />
      </form>
      {tableData.arrayData && <Table entries={tableData.arrayData} />}
    </div>
  )
}

export default Home
