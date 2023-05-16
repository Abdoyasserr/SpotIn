import React, { useState, useEffect } from "react";
import { Title } from "./Title";
import Sidebar from "./Sidebar";
import "./CSS-files/Reports-css/Table.css";
import Table from "./Table";

function Reports() {
  Title("SPOTIN | Reports");
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    fetch("https://spot-in.online/api/authMgr/reports")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <>
      <div>
        <div>
          <Sidebar />
        </div>
        <div className="row my-3">
          <div id="search" className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="Report-table">
        <Table data={filteredData} />
      </div>
    </>
  );
}

export default Reports;
