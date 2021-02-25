import React from 'react'

const Table = (props) => {
  const dataArray = props.entries;
  console.log(dataArray);

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">City</th>
          <th scope="col">Country</th>
          <th scope="col">E-mail</th>
          <th scope="col">Phone</th>
          <th scope="col">Age</th>
        </tr>
      </thead>
      <tbody>
        {dataArray.map((data) => (
          <tr key={`${data.login.uuid}`}>
            <td>{data.name.title}</td>
            <td>{data.name.first}</td>
            <td>{data.name.last}</td>
            <td>{data.location.city}</td>
            <td>{data.location.country}</td>
            <td>{data.email}</td>
            <td>{data.phone}</td>
            <td>{data.dob.age}</td>
          </tr>
        ))}
      </tbody>
    </table >
  )
}

export default Table