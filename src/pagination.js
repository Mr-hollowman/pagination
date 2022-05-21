import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";

function MyPagination() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentpage] = useState(1);
  const dataPerPage = 10;
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data.length / dataPerPage); i++) {
    pageNumbers.push(i);
  }
  const indexOfLastElement = currentPage * dataPerPage;
  const indexOfFirstElement = indexOfLastElement - dataPerPage;
  const currentElement = data.slice(indexOfFirstElement, indexOfLastElement);

  const displayUsers = currentElement.map((item, index) => (
    <tr key={index}>
      <td>{item.flight_number}</td>
      <td>{item.mission_name}</td>
      <td>{item.launch_year}</td>
    </tr>
  ));
  const handleClick = (event) => {
    setCurrentpage(event.target.id);
  };
  const displayPageNumbers = pageNumbers.map((number) => {
    return (
      <li
        className="pagenumber"
        key={number}
        id={number}
        onClick={(event) => handleClick(event)}
      >
        {number}
      </li>
    );
  });

  useEffect(() => {
    getData();
  }, []);
  const getData = () =>
    axios
      .get("https://api.spacexdata.com/v3/launches")
      .then((res) => setData(res.data));
  return (
    <div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Flight Name</th>
            <th>launch Year</th>
          </tr>
        </thead>
        <tbody>{displayUsers}</tbody>
      </Table>
      {displayPageNumbers}
    </div>
  );
}

export default MyPagination;
