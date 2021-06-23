import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core/styles';
import Login from './Login'
import CreateUser from './CreateUser'


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#779651',
      contrastText: '#fff'
    }
  },
});

const NavBar = (props) => {
  const { setUsername, updateStatus, setUserID, userID, username, loggedIn } = props
  console.log("NavBar props: ", props)

  return (
    <ThemeProvider theme={theme}>
        <AppBar  className="NavBar" position="relative">
              <Toolbar>
                  <Typography variant="h6" style={{ flexGrow: "1" }}>
                    <Link to={{pathname:'/', username: username, userID : userID }}>Seymour</Link>
                  </Typography>
                  {/* {if(loggedIn === true)} */}
                  {loggedIn === false ? (
                  <ul className="nav-list">
                    <li className="nav-list-item">
                        <CreateUser />
                    </li>
                    <li className="nav-list-item">
                      <Login updateStatus={updateStatus} setUsername={setUsername} setUserID={setUserID} userID={userID}/>
                    </li>
                  </ul> ) : (
                  <ul className="nav-list">
                    <li className="nav-list-item">
                      <button color="primary">
                        <Link to={'/'} onClick={(e) => {updateStatus(false)}}>Logout</Link>
                      </button>
                    </li>
                    <li className="nav-list-item">
                      <button color="primary">
                        <Link to={{pathname:'/profile', username: username, userID : userID}}>My Plants</Link>
                      </button>
                    </li>
                  </ul>
                  )}
              </Toolbar>
          </AppBar>
      </ThemeProvider>
    )
}

export default NavBar