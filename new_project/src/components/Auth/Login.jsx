import React from 'react'
import { useState } from "react";

export default function Login() {

    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    const submiteHandler = (e) => {
        e.preventDefault()
        console.log("form submited")
        console.log("email is ", email);
        console.log("password is", password)

        setemail("")
        password("")

    }

    return (
        <>
            <h1 className=' m-3 p-3'>Login Form</h1>
            <div className=' d-flex justify-content-center align-items-center vh-100  '>
                <form onSubmit={(e) => {
                    submiteHandler(e)
                }} className=' w-25 shadow p-5 rounded rounded-3 border border-black'>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                            Email address
                        </label>
                        <input

                            value={email}

                            onChange={(e) => {
                                setemail(e.target.value)
                            }}
                            required
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                        />
                        <div id="emailHelp" className="form-text">
                            We'll never share your email with anyone else.
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">
                            Password
                        </label>
                        <input

                            value={password}
                            onChange={(e) => {
                                setpassword(e.target.value)
                            }}
                            required
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                        />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">
                            Check me out
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>

        </>
    )


}
