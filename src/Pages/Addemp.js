import { Title } from "./Title";
import 'react-phone-input-2/lib/style.css';
import Sidebar from "./Sidebar";
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./CSS-files/Addemp-css/Addemp.css";
import defaultLogo from "./CSS-files/Addemp-css/Icon awesome-image.png";
import axios from "axios";

function Addemp() {
    Title("SPOTIN | ADD EMPLOYEE");

    function HidePassword() {
        var passwordInput = document.querySelector('.Addinput_passsword');
        var passwordToggle = document.querySelector('.Addpassword-toggle');

        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            passwordToggle.innerHTML = '<i class="fa fa-eye"></i>';
        } else {
            passwordInput.type = 'password';
            passwordToggle.innerHTML = '<i class="fa fa-eye-slash"></i>';
        }
    }
    /**************************************************************************/

    function checkRequiredFields() {
        const fullName = document.getElementById('fullname').value;
        const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*( ?[a-zA-Z]*)?$/;
        const email = document.getElementById('email').value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const Phonenumber = document.getElementById('phonenumber').value;
        const phoneRegex = /^0(10|11|12|15)\d{0,8}$/;
        const gender = document.getElementById('Gender').value;
        const department = document.getElementById('Department').value;
        const branch = document.getElementById('Branch').value;
        const password = document.getElementById('password').value;

        const errorFullName = document.getElementById('error-fullname');
        const erroremail = document.getElementById('error-email');
        const errorphone = document.getElementById('error-phone');


        let hasError = false;


        if (!fullName) {
            hasError = true;
        }
        else if (!nameRegex.test(fullName)) {
            errorFullName.innerHTML = 'Please enter valid full name.';
            errorFullName.style.display = 'block';
            hasError = true;
        }
        else {
            errorFullName.innerHTML = '';
            errorFullName.style.display = 'none';
        }
        if (!email) {
            hasError = true;
        }
        else if (!emailRegex.test(email)) {
            erroremail.innerHTML = 'Please enter valid email.';
            erroremail.style.display = 'block';
            hasError = true;
        }
        else {
            erroremail.innerHTML = '';
            erroremail.style.display = 'none';
        }
        if (!Phonenumber) {
            hasError = true;
        }
        else if (!phoneRegex.test(Phonenumber)) {
            errorphone.innerHTML = 'Please enter valid Phone number.';
            errorphone.style.display = 'block';
            hasError = true;
        }
        else {
            errorphone.innerHTML = '';
            errorphone.style.display = 'none';
        }

        if (gender === 'Gender') {
            hasError = true;
        }

        if (department === 'Department') {
            hasError = true;
        }

        if (!branch) {
            hasError = true;
        }

        if (!password) {
            hasError = true;
        }
        if (!fullName || (!email && !Phonenumber) || gender === 'Gender' || department === 'Department' || !branch || !password) {
            return handleClick();
        }

        return !hasError;
    }

    function handleClick() {
        toast.error('Please fill all the below fields', {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 3000,
        });
    }


    const [name, setname] = useState('')
    const [phonenumber, setphonenumber] = useState('')
    const [email, setemail] = useState('')
    const [gender, setgender] = useState('')
    const [birthdate, setbirthdate] = useState('')
    const [department, setdepartment] = useState('')
    const [branch_id, setbranch] = useState('')
    const [password, setpassword] = useState('')
    const [photo, setphoto] = useState('')

    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData();
        formData.append('photo', photo);
        formData.append('name', name);
        formData.append('phonenumber', phonenumber);
        formData.append('email', email);
        formData.append('gender', gender);
        formData.append('birthdate', birthdate);
        formData.append('department', department);
        formData.append('branch_id', branch_id);
        formData.append('password', password);

        axios.post('https://spot-in.online/api/authMgr/check', {
            email: email,
            phonenumber: phonenumber
        })
            .then(response => {
                if (response.data.exists === true) {
                    console.log('Email/Phonenumber already exists');
                    toast.error('Email/Phonenumber already exists', {
                        position: toast.POSITION.TOP_CENTER,
                        autoClose: 3000,
                        style: { marginLeft: '-20px' }
                    });
                } else {
                    console.log('Email and phone number do not exist in database');
                    fetch('https://spot-in.online/api/authMgr/addemp', {
                        method: 'POST',
                        body: formData,
                    })
                        .then((response) => {
                            if (!response.ok) {
                                throw new Error('Network response was not ok');
                            }
                            return response.json();
                        })
                        .then((data) => {
                            console.log(data.message);
                            toast.success('Employee added successfully', {
                                position: toast.POSITION.TOP_CENTER,
                                autoClose: 3000,
                                style: { marginLeft: '-50px' },
                            });
                            setname('');
                            setphonenumber('');
                            setemail('');
                            setgender('');
                            setbirthdate('');
                            setdepartment('');
                            setbranch('');
                            setpassword('');
                            setphoto('');
                            setLogo(defaultLogo);
                        })
                        .catch((error) => {
                            console.error(error);
                            return checkRequiredFields();
                        });
                }
            })
            .catch(error => {
                console.log(error);
            });

    }


    const [logo, setLogo] = useState('');

    function handleFileUpload(e) {
      const file = e.target.files[0];
      if (file) {
        setLogo(URL.createObjectURL(file));
      } else {
        setLogo('');
      }
    }
    
    useEffect(() => {
      if (!logo) {
        setLogo(defaultLogo);
      }
    }, [logo]);
    



    return (
        <>
            <Sidebar />
            <form id="Signin-form" class="myform" enctype="multipart/form-data" method="post" onSubmit={handleSubmit}>
                <div class="hero col-4">
                    <div class="card_emp">
                        <img src={logo} alt="logo" id="profile-pic" />
                        <label htmlFor="input-file">Add Photo</label>
                        <input className="upload" accept="image/jpeg, image/png, image/jpg" type="file" id="input-file" name="image" onChange={handleFileUpload} />
                    </div>
                </div>
                <p id="add_p">Add Employee</p>

                <input id="fullname" class="input_fullname" type="text" name="name" placeholder="Full Name*" value={name} onChange={(event) => setname(event.target.value)} />
                <div id="error-fullname"></div><br />

                <input id="phonenumber" class="input_form" type="tel" name="phone" placeholder="Phone Number*" value={phonenumber} onChange={(event) => setphonenumber(event.target.value)} />
                <div id="error-phone"></div><br />

                <input class="input_form" type="text" id="email" name="email" placeholder="Enter email" value={email} onChange={(event) => setemail(event.target.value)} />
                <div id="error-email"></div><br />

                <select class="form-select" name="gender" id="Gender" value={gender} onChange={(event) => setgender(event.target.value)}>
                    <option value="" >Gender*</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select><br />

                <input type="date" id="date" name="date" placeholder="date" value={birthdate} onChange={(event) => setbirthdate(event.target.value)} /><br />

                <select class="form-select" name="department" id="Department" value={department} onChange={(event) => setdepartment(event.target.value)}>
                    <option value="">Department*</option>
                    <option value="HR">HR</option>
                    <option value="Sales">Sales</option>
                    <option value="Accounting and Finance">Accounting & Finance</option>
                    <option value="Marketing">Marketing</option>
                </select><br />

                <select id="Branch" class="form-select" name="branch_id" value={branch_id} onChange={(event) => setbranch(event.target.value)}>
                    <option value="">Branches*</option>
                    <option value="1">El Shorouk Academy</option>
                    <option value="2">Mass Communication</option>

                </select><br />

                <div class="Addpassword-wrapper">
                    <input class="Addinput_passsword" type="password" id="password" name="password" placeholder="Enter password*" value={password} onChange={(event) => setpassword(event.target.value)} /><br />
                    <span class="Addpassword-toggle" onClick={HidePassword}><i id="eye" class="fa fa-eye-slash"></i></span>
                    <br />
                </div>

                <button type="submit" value="Confirm" class="Addsubmit">
                    <span class="span-mother">
                        <span>C</span>
                        <span>O</span>
                        <span>N</span>
                        <span>F</span>
                        <span>I</span>
                        <span>R</span>
                        <span>M</span>
                    </span>
                    <span class="span-mother2">
                        <span>C</span>
                        <span>O</span>
                        <span>N</span>
                        <span>F</span>
                        <span>I</span>
                        <span>R</span>
                        <span>M</span>
                    </span>
                </button>
                <ToastContainer />
            </form>
        </>


    );
}

export default Addemp
