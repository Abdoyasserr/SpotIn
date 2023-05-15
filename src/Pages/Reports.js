import React from "react";
import { Title } from "./Title";
import Sidebar from "./Sidebar";
import "./CSS-files/Reports-css/Table.css";
import { useState, useEffect } from "react";
import Table from "./Table";



function Reports() {
    Title("SPOTIN | Reports");
    // const [images, setImages] = useState([]);
    // const [id, setID] = useState([]);
    // const [name, setname] = useState([]);
    // const [phonenumber, setphonenumber] = useState([]);
    // const [email, setemail] = useState([]);
    // const [department, setdepartment] = useState([]);
    // const [branch_name, setbranch] = useState([]);
    const [id, setid] = useState([]);
    useEffect(() => {
        fetch("https://spot-in.online/api/authMgr/reports", {
            // method: 'GET',
            // headers: {
            //     accept: 'application/json',
            // },
            // mode: 'no-cors'
        }).then(
            response => response.json().then(data => {
                // setImages(data)
                // setId(data)
                // setname(data)
                // setphonenumber(data)
                // setemail(data)
                // setdepartment(data)
                // setbranch(data)
                setid(data)
            })
        )
    }, [])
    return (
        <>
            <div>
                <div>
                    <Sidebar />
                </div>
                <div className="row my-3">
                    <div id="search" className="input-group">
                        <input type="text" className="form-control" placeholder="Search" />

                    </div>
                </div>
            </div>
            <div className="Report-table">
                <Table data={id} />
            </div>

        </>


    );
}

export default Reports