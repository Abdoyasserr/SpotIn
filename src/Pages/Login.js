import "./CSS-files/Login-css/Login.css";
import photo from "./CSS-files/Login-css/LOGO - BLACK.png";
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { Title } from "./Title";
import { ToastContainer, toast } from 'react-toastify';


function Login() {
    Title("SPOTIN | LOGIN");

    const [emailOrPhone, setEmailorPhone] = useState('');
    const [email, setEmail] = useState('');
    const [phonenumber, setphonenumber] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^\d{11}$/;

        const data = {
            
            phonenumber: emailOrPhone,
            password: password,

        };

        if (emailRegex.test(emailOrPhone)) {
            console.log('Email entered');
            data.email = emailOrPhone;

        } else if (phoneRegex.test(emailOrPhone)) {
            console.log('Phone number entered');
            data.phonenumber = emailOrPhone;
        }


        fetch('https://spot-in.online/api/authMgr/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },

            body: JSON.stringify(data)

        })

            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                return response.json();
            })
            .then(data => {
                // handle successful login
                const token = data.access_token;
                localStorage.setItem('token', token);
                console.log(data.message);
                navigate('/Home');
            })

            .catch(error => {
                if (emailOrPhone == "") {
                    toast.warning('Please enter your email/phone number', {
                        position: toast.POSITION.TOP_CENTER,
                        autoClose: 3000,
                        style: { marginLeft: '-50px' }
                    });
                }

                else if (password == "") {
                    toast.warning('Please enter your password', {
                        position: toast.POSITION.TOP_CENTER,
                        autoClose: 3000,
                    });
                }
                else {
                    // handle login error
                    console.error('Login error:', error);
                    toast.error('Incorrect email/phone or password', {
                        position: toast.POSITION.TOP_CENTER,
                        autoClose: 3000,
                        style: { marginLeft: '-20px' }
                    });
                }

            });

    }
    function togglePassword() {
        var passwordInput = document.querySelector('.input_passsword');
        var passwordToggle = document.querySelector('.password-toggle');

        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            passwordToggle.innerHTML = '<i class="fa fa-eye"></i>';
        } else {
            passwordInput.type = 'password';
            passwordToggle.innerHTML = '<i class="fa fa-eye-slash"></i>';
        }
    }
    function refreshPage() {
        window.location.reload();
    }
    return (
        <>
            <div>
                <div id="login_img" className="col-8" >
                    <div className="container">
                        <div className="logo">
                            <img id="logo" src={photo} alt="logo" onClick={refreshPage} />
                        </div>
                        <p id="p1">JUST CLOCK IN!</p>
                        <p id="p2">& FOCUS ON THE WORK THAT MATTERS!</p>
                        <p id="p3">Are you tired of beign late to work, running to catch up, and struggling to keep track of your attendance?</p>
                        <p id="p4">Say goodbye to those worries with our location-based attendance app. using cutting-edge GPS</p>
                        <p id="p5">technology to automatically mark your attendance as soon as you arrive at your workplace. No more</p>
                        <p id="p6">manual check-ins, no more stress.</p>
                    </div>
                </div>
                <div id="sign_in" className="col-4">
                    <form id="Login_form" className="Login_form" onSubmit={handleSubmit}>
                        <p>SIGN IN</p>
                        <input className="input_email" type="text" id="emailOrPhone" name="emailOrPhone" placeholder="Enter email or phone number" value={emailOrPhone} onChange={event => setEmailorPhone(event.target.value)} /><br />
                        <br />
                        <div className="password-wrapper">
                            <input className="input_passsword" type="password" id="password" name="password" placeholder="Enter password" value={password} onChange={event => setPassword(event.target.value)} /><br />
                            <span className="password-toggle" onClick={togglePassword}><i className="fa fa-eye-slash"></i></span>
                            <br />
                        </div>
                        <button id="next-page-button" type="submit" value="LOGIN" className="submit">
                            <span className="span-mother">
                                <span>L</span>
                                <span>O</span>
                                <span>G</span>
                                <span>I</span>
                                <span>N</span>
                            </span>
                            <span className="span-mother2">
                                <span>L</span>
                                <span>O</span>
                                <span>G</span>
                                <span>I</span>
                                <span>N</span>
                            </span>
                        </button>
                        <div id="Lasterror">{message}</div>
                    </form>
                </div>
            </div>
            <ToastContainer/>
        </>


    );

}

export default Login