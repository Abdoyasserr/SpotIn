import React from "react";
import { Title } from "./Title";
import Sidebar from "./Sidebar";
import "./CSS-files/Branches-css/Branches.css";
import image1 from "./CSS-files/Branches-css/home_200x200.jpg";
import image2 from "./CSS-files/Branches-css/655903438_355430668_DJI_0043_200x200.jpg";


function Branches() {
    Title("SPOTIN | Branches");

    return (
        <>
            <div>
                <Sidebar />
            </div>
            <div className="row my-3">
                <div id="search" className="input-group">
                    <input type="text" className="form-control" placeholder="Search" />
                </div>
            </div>
            {/* Card Container */}
            <div className="home-cards-branch">
                {/* Card 1 */}
                <div className="card-branch">
                    <h5 id="branch_id"># 1</h5>
                    <br />
                    <div className="card-image-branch">
                        <img id="Photo-branch" src={image1} alt="" />
                    </div>
                    <div>
                        <p className="card-name-branch">Branch Elshrouk</p>
                        <p className="card-email-branch">Elshrouk@gamil.com</p>
                        <p className="card-phone-branch">01142314520</p>
                        {/* <a type="button" className="btn btn-block text-muted card-btn" data-bs-toggle="modal" data-bs-target="#Profile">
                            History
                        </a> */}
                    </div>
                </div>
                {/* Card 2 */}
                <div className="card-branch">
                    <h5 id="branch_id"># 2</h5>
                    <br />
                    <div className="card-image-branch">
                        <img id="Photo-branch" src={image2} alt="" />
                    </div>
                    <div>
                        <p className="card-name-branch">Branch Elshrouk 2</p>
                        <p className="card-email-branch">Elshrouk2@gamil.com</p>
                        <p className="card-phone-branch">01142314520</p>
                        {/* <a type="button" className="btn btn-block text-muted card-btn" data-bs-toggle="modal" data-bs-target="#Profile">
                            History
                        </a> */}
                    </div>
                </div>

            </div>
        </>

//aye 7aga

    );
}

export default Branches