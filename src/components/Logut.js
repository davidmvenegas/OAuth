import { GoogleLogout } from "react-google-login"
const clientId = "417062811091-knevjljms68q8pkrih0p2ul4c8bqvct2.apps.googleusercontent.com"

function Logout() {
    function onLogoutSuccess() {
        console.log('LOGOUT SUCCESSFUL')
    }
    return (
        <div id="signInButton">
            <GoogleLogout 
                clientId={clientId}
                buttonText={"Logout"}
                onLogoutSuccess={onLogoutSuccess}
            />
        </div>
    )
}

export default Logout