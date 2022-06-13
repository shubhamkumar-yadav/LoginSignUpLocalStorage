import React, { useState } from "react";
import { SignImg } from "./SignImg";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
const Login = ()=>{
    const [inpval,setInpval] = useState({
        email:"",
        password:""
    });
    // const [data,setData] = useState([]);
    const getdata = (e)=>{
        const {value,name} = e.target;
        setInpval(()=>{
            return {
                ...inpval,[name]:value
            }
        })
    };
    const history = useNavigate();
    const addData = (e)=>{
        e.preventDefault();
        const getuserArr = localStorage.getItem("useryoutube");
        console.log(getuserArr);
        const {email,password} = inpval;
        if(email === ''){
            alert("email field is required")
        }
        else if(password === ''){
            alert("password field is required")
        }
        else{
            if(getuserArr && getuserArr.length){
                const userdata = JSON.parse(getuserArr);
                const userlogin = userdata.filter((val,key)=>{
                    return val.email === email && val.password === password
                })
                if(userlogin.length === 0){
                    alert("invalid details")
                }
                else{
                    localStorage.setItem("user_login",JSON.stringify(getuserArr))
                    history('/details')
                }
            }
        }
    };
    return(<>
    <div className="container mt-3">
            <section className="d-flex justify-content-between">
                <div className="left_data mt-3 p-5" style={{width:"100%"}}>
                    <h3 className="text-center col-lg-4">Sign In</h3>
                    <Form>
                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                            <Form.Control name="email" type="email" onChange={getdata} placeholder="Enter Your Email" />
                        </Form.Group>
                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                            <Form.Control name="password" type="password" placeholder="Password" onChange={getdata} />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={addData} style={{background:"rgb(67,185,127)"}} className="col-lg-6">
                            Submit
                        </Button>
                    </Form>
                    {/* <p className="mt-3">Already Have an Account ? <span>SignIn</span></p> */}
                </div>
                <SignImg/>
            </section>
        </div>
    </>)
};
export{Login};