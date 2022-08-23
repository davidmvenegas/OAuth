import Login from './components/Login'
import Logout from './components/Logut'
import { gapi } from 'gapi-script'
import { useEffect } from 'react'

function App() {
  const clientId = "417062811091-knevjljms68q8pkrih0p2ul4c8bqvct2.apps.googleusercontent.com"

  useEffect(() => {
    function start() {
        gapi.client.init({
        clientId: clientId,
        scope: ""
      })
    }

    gapi.load('client:auth2', start)
  }, [])
  

  return (
    <div className="App">
      <h1>OAuth Demo</h1>
      <Login/>
      <Logout/>
    </div>
  )
}

export default App
