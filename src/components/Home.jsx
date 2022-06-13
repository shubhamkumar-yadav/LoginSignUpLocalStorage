import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { SignImg } from "./SignImg";
import { useState } from "react";
import { Link } from "react-router-dom";
const Home = () => {
    const [inpval,setInpval] = useState({
        name:"",
        email:"",
        date:"",
        password:""
    });
    const [data,setData] = useState([]);
    const getdata = (e)=>{
        const {value,name} = e.target;
        setInpval(()=>{
            return {
                ...inpval,[name]:value
            }
        })
    };
    const addData = (e)=>{
        e.preventDefault();
        const {name,email,date,password} = inpval;
        if(name === ''){
            alert("name field is required")
        }
        else if(email === ''){
            alert("email field is required")
        }
        else if(!email.includes("@")){
            alert("please enter valid email address")
        }
        else if(date === ''){
            alert("date field is required")
        }
        else if(password === ''){
            alert("password field is required")
        }
        else if(password.length < 8){
            alert("password legnth should not be lesser than 8")
        }
        else{
            localStorage.setItem("useryoutube",JSON.stringify([...data,inpval]));
        }
    };
    return (<>
        <div className="container mt-3">
            <section className="d-flex justify-content-between">
                <div className="left_data mt-3 p-5" style={{width:"100%"}}>
                    <h3 className="text-center col-lg-4">Sign Up</h3>
                    <Form>
                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                            <Form.Control name="name" type="text" onChange={getdata}  placeholder="Enter Your Name" />
                        </Form.Group>
                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                            <Form.Control name="email" type="email" onChange={getdata} placeholder="Enter Your Email" />
                        </Form.Group>
                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                            <Form.Control name="date" type="date" onChange={getdata}/>
                        </Form.Group>

                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                            <Form.Control name="password" type="password" placeholder="Password" onChange={getdata} />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={addData} style={{background:"rgb(67,185,127)"}} className="col-lg-6">
                            Submit
                        </Button>
                    </Form>
                    <p className="mt-3">Already Have an Account ? <span><Link to="/login">SignIn</Link></span></p>
                </div>
                <SignImg/>
            </section>
        </div>
    </>)
};
export { Home };