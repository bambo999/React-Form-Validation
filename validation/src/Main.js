import React from "react";

export default function Main() {

  const [username, setusername] = React.useState("");
  const [email, setemail] = React.useState("");
  const [password, setpassword] = React.useState("");
  const [cpassword, setcpassword] = React.useState("");


  const[eusername, seteusername] = React.useState("");
  const[eemail, seteemail] = React.useState("");
  const [epassword, setepassword] = React.useState("");
  const[ecpassword, setecpassword] = React.useState("");
  
  const[ucolor, setucolor]= React.useState("")
  const[ecolor, setecolor]= React.useState("")
  const[pcolor, setpcolor]= React.useState("")
  const[cpcolor, setcpcolor]= React.useState("")

  function validate(){
    if(username.length > 5){
      seteusername("");
      setucolor('green')
    }else{
      seteusername("Username must be atleast 6 characters");
      setucolor('red')
    }

    if(email.length > 5 && email.includes('@')){
      seteemail("");
      setecolor('green')
    }else{
      seteemail("Invalid Email");
      setecolor('red')
    }

    if(password.length > 5 && password.includes('@') && password.includes('_')){
      setepassword("");
      setpcolor('green')
    }else{
      setepassword("Password must contain atleast 1 special character");
      setpcolor('red')
    }

    if(password !== '' && password === cpassword){
      setecpassword('')
      setcpcolor('green')
    }else{
      setecpassword('Password not matched')
      setcpcolor('red')
    }
  } 
 
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-5 shadow-lg p-3 mb-5 bg-white rounded">
          <h1>Form Validation</h1>

          <input type="text" placeholder="username" className="form-control" style={{borderColor:ucolor}} value={username} onChange={(e)=>{setusername(e.target.value)}} />
          <p>{eusername}</p>

          <input type="text" placeholder="email" className="form-control" style={{borderColor:ecolor}} value={email} onChange={(e)=>{setemail(e.target.value)}}/>
          <p>{eemail}</p>

          <input type="text" placeholder="password" className="form-control" style={{borderColor:pcolor}} value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
          <p>{epassword}</p>

          <input type="text" placeholder="confirm password" className="form-control" style={{borderColor:cpcolor}} value={cpassword} onChange={(e)=>{setcpassword(e.target.value)}}/>
          <p>{ecpassword}</p>

          <button className="btn btn-success" onClick={validate}>Submit</button>
        </div>
      </div>
    </div>
  );
}
