import React from "react";
import { GoogleAPI, GoogleLogin, GoogleLogout } from "react-google-oauth"

function Login() {


    const responseGoogle = (response) => {
        console.log(response)
        var token = response
        var data = {
            provider: "google_oauth2",
            uid: token.Ca,
            id_token: response.wc.id_token,
            info: {
                email: token.nt.Wt
            }
        }
    }

    console.log(data)
    const requestOptions = {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${response.wc.access_token}`,
            'Content-Type': 'application/json',
            'access_token': `${response.wc.access_token}`
        },
        body: JSON.stringify(data)
    }

    return fetch(requestOptions)
    .then(response => response.json())
    .then(response => {
        console.log(response, "Backend")

    })
   
    

    return(
        <div>

        <GoogleAPI clientId={CLIENT_ID}>
            <div>
                <GoogleLogin
                height="10"
                width="500px"
                backgroundColor="#4285f4"
                access="offline"
                scope="email profile"
                onLoginSuccess={responseGoogle}
                onFailure={responseGoogle} />
            </div>
        </GoogleAPI>


        </div>
    )

}

export default Login;