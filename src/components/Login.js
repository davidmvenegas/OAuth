import { GoogleLogin } from "react-google-login"
const clientId = "417062811091-knevjljms68q8pkrih0p2ul4c8bqvct2.apps.googleusercontent.com"

function Login() {
    function onSuccess(res) {
        console.log('LOGIN SUCCESSFUL - ', res.profileObj)
    }
    function onFailure(res) {
        console.log('LOGIN FAILED - ',  res)
    }
    return (
        <div id="signInButton">
            <GoogleLogin 
                clientId={clientId}
                buttonText={"Login"}
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={"single_host_origin"}
                isSignedIn={true}
            />
        </div>
    )
}

export default Login