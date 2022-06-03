import React, { useState } from "react";
import "./Login.css";
// import Navbar from './navbar'
// import Footer from './Footer'
import { useNavigate } from "react-router-dom";
// import {useToast} from "@chakra-ui/react";
import app, { auth } from "./firebase";
import "firebase/compat/auth";
import './ForgotPassword'
import {Link, NavLink} from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [error,setError]=useState('');
    // const toast=useToast();

    // const handleForgotPassword=(email) =>{
    //   auth.sendPasswordResetEmail(email)
    //   .then(()=>{
    //         //  toast({

    //         //  })
    //   })

    // }
    

    const handleSubmit = (event) => {
        event.preventDefault();
        // clearErrors("API ERROR");
        
        app.auth()
            .signInWithEmailAndPassword(email, password)
    //         const user = app.auth().currentUser;
    //   console.log(user)
    //   user.sendEmailVerification().then(function() {
    //     console.log("Verification link sent to your email. Kinldy check to verify your account")
    // })
    // .then(() => {
    //   app.auth().onUserChanged(response => {
    //     if (response.emailVerified)
    //       return JSON({general: "Login Successful"});
    //   })
    // })
            .then(() => {
                alert("login sucessfully");
                navigate("/home");
            }); 
        // const u=res.user;    
        // const q = query(collection(db, "user"), where("id", "==", user.uid));
        // const docs = await getDocs(q);
        // catch((error)=>{
        //     setError("API ERROR",{
        //        messsage:"Email or password would be invalid",
        //     });
        // });
    };

    // const [user, setUser] = useState({
    //   email:"",
    //   psw:"",
    // });

    // let name, value;
    // const getUserData = (event) => {
    //   name = event.target.name;
    //   value = event.target.value;

    //   setUser({...user, [name]: value})
    // }

    const adminlogin = () => {
        if (email === "admin@admin.com" && password === "Admin") {
            navigate("/admin");
        } else {
        }
    };

    

    return (
        <>
            <div className="bg">
                {/* <Navbar/> */}
                <div className="login-page">
                    <div className="form">
                        <div className="login">
                            <div className="login-header">
                                <h3>LOGIN</h3>
                                Please enter your credentials to log in
                            </div>
                        </div>
                        <form className="login-form" onSubmit={handleSubmit}>
                            <input
                                type="email"
                                placeholder="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                type="password"
                                placeholder="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button
                                onClick={() => {
                                    adminlogin();
                                    console.log("Button clicked");
                                    localStorage.setItem("Userid",email);
                                  }}
                                className="btn btn-light"
                            >
                                login
                            </button>
                            {/* <p class="message">Not registered? <a href="#">Create an account</a></p> */}
                            <br />
                            <p className="message">
                                
                            <Link to='/ForgotPassword'>Forgot Password?</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
            {/* <Footer/> */}
        </>
    );
};

export default Login;