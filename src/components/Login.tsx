"use client"
import { useState } from "react"


const Login = () => {
    const [email, setemail] = useState<string>('')
    const [password, setpassword] = useState<string>('')
const loginHandle = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    setemail('')
    setpassword('')
    const numricPassword = Number(password)
    const res  = await fetch('/api/login',{
        method: 'POST',
        body: JSON.stringify({email, password: numricPassword})
    });
    const data = await res.json()
    console.log(data)
    if(data.isLoggedIn){
        alert('Login succesfully!')
    }else{
        alert('Login failed!')
    }
}
    return (
        <div className="w-full p-10 bg-[#f0f4f8] h-screen flex justify-center items-center">
            <form className="bg-white space-y-5 w-full max-w-[450px] p-5 rounded-md"
            onSubmit={loginHandle}
            >
                <h1 className="font-bold text-2xl text-center">Login Form</h1>
                <div>
                    <label htmlFor="email"></label>
                    <input type="text"
                        id="email"
                        className="w-full p-2 outline-none border"
                        placeholder="Email" 
                        value={email}
                        onChange={(e) => {
                            setemail(e.target.value)
                            console.log(email)
                        }}
                       
                        />
                        
                </div>

                <div>
                    <label htmlFor="password"></label>
                    <input type="password"
                        id="password"
                        className="w-full p-2 outline-none border"
                        placeholder="Password" 
                        onChange={(e) => {
                            setpassword(e.target.value)
                            console.log(password)
                        }}
                        value={password}
                        />
                </div>
                <input type="submit"
                    value="Submit"
                    className="w-full p-2 bg-blue-500 hover:bg-blue-600 text-white cursor-pointer" />
            </form>



        </div>
    )
}

export default Login