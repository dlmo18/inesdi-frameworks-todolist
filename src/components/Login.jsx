import { useState } from "react";

function Login({setAuth}) {
  const [msg, setMsg] = useState({
    text: "",
    status: "info"
  });
  const [login, setLogin] = useState({
    email: "",
    password: ""
  });

  async function loginSubmit(e) {

    e.preventDefault()
    try {

        if(login.email=="" || !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(login.email) ) {
          setMsg({
            text: "Se necesita un email válido",
            status: "error"
          })
        }
        else if(login.password=="") {        
          setMsg({
            text: "Se necesita password",
            status: "error"
          })
        }
        else {      
          setMsg({
            text: "Buscando usuario, espere por favor...",
            status: "info"
          })
          console.log(login);

          const requestBody = {
            "email": login.email, 
            "password": login.password
          }

          const options = {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
          };
          
          const response = await fetch('https://reqres.in/api/login',options);
          if (response.ok) {
            const data = await response.json();
            //console.log('data',data);
            setAuth(data.token)
            localStorage.setItem('access_token', data.token)
          } else {
            throw Error("Error: usuario no disponible");
          }
        }
        
    } catch (error) {
        setMsg({
          text: ""+error,
          status: "error"
        })      
    }
  }

  return (
    <>
      <form method="post" onSubmit={loginSubmit} className="login-form">
        <div className="login-input">
          <input type="email" className="login-user" value={login.email} placeholder="Email" 
            onChange={(e) =>
              setLogin({
                email: e.target.value,
                password: login.password
              })
            } 
          />
        </div>
        <div className="login-input">
          <input type="password" value={login.password} className="login-password" placeholder="Clave" 
            onChange={(e) =>
              setLogin({
                email: login.email,
                password: e.target.value,
              })
            }
          />
        </div>
        <button type="submit" className="login-button">
          <i className="fas fa-sign-in-alt"></i> Login
        </button>
        <div className={"login-message " + msg.status}>
          {msg.text}
        </div>
      </form>
    </>
  );
}
export default Login;
