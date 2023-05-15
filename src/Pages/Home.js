import React from "react";
import { Title } from "./Title";
import Sidebar from "./Sidebar";
import "./CSS-files/Home-css/Home.css";
import Card from "./Card";
import { useState, useEffect } from "react";
import Images from "./Images";
import "./CSS-files/Home-css/test.css";


function Home() {
    Title("SPOTIN | HOME");
    // const [images, setImages] = useState([]);
    // const [id, setID] = useState([]);
    // const [name, setname] = useState([]);
    // const [phonenumber, setphonenumber] = useState([]);
    // const [email, setemail] = useState([]);
    // const [department, setdepartment] = useState([]);
    // const [branch_name, setbranch] = useState([]);
    const [photo, setphoto] = useState([]);
    useEffect(() => {
        fetch("https://spot-in.online/api/authMgr/allemps",{
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
                setphoto(data)
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
                        <a href="/Addemp">
                            <button type="button" className="Add_button">
                                <span class="Add_button__text">Add Employee</span>
                                <span class="Add_button__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" height="24" fill="none" class="svg"><line y2="19" y1="5" x2="12" x1="12"></line><line y2="12" y1="12" x2="19" x1="5"></line></svg></span>
                            </button>
                        </a>
                    </div>
                </div>
        

            </div>
            <div className="home-cards">
                <Images data={photo} />
            </div>

        </>


    );
}

export default Home