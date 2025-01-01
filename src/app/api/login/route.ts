import { NextRequest, NextResponse } from "next/server";

//creted api to handle login form data
export const POST = async (req: NextRequest) => {
// json data to be channged into js object
const data = await req.json();
const {email, password} = data
//given mockdata as database
const mockData = {
    email: "abc@yahoo.com",
    password: 12345
}
// giving condtion if email and pass not exit it will say login false
if(email === mockData.email && password === mockData.password){
    return NextResponse.json({isLoggedIn: true})
}
return NextResponse.json({isLoggedIn: false})

}

