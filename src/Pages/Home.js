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
    const [photo, setphoto] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    useEffect(() => {
        fetch("https://spot-in.online/api/authMgr/allemps").then(
            response => response.json().then(data => {
                setphoto(data)
            })
        )
    }, [])

    const filteredData = photo.filter(item =>
        (item.name && item.name.toLowerCase().includes(searchQuery?.toLowerCase())) ||
        (item.id && item.id.toString().toLowerCase().includes(searchQuery?.toLowerCase())) ||
        (item.email && item.email.toLowerCase().includes(searchQuery?.toLowerCase()))
    );


    return (
        <>
            <div>
                <div>
                    <Sidebar />
                </div>
                <div className="row my-3">
                    <div id="search" className="input-group">
                        <input type="text" className="form-control" placeholder="Search" onChange={(e) => setSearchQuery(e.target.value)} />
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
                <Images data={filteredData} />
            </div>

        </>


    );
}

export default Home
