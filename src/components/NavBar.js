import React from 'react'
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core'
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
  const { setUsername, updateStatus, username, loggedIn } = props
  console.log("NavBar props: ", props)

  return (
    <ThemeProvider theme={theme}>
        <AppBar  className="NavBar" position="relative">
              <Toolbar>
                  <Typography variant="h6" style={{ flexGrow: "1" }}>
                    <Link to={'/'}>Seymour</Link>
                  </Typography>
                  {/* {if(loggedIn === true)} */}
                  {loggedIn === false ? (
                  <ul className="nav-list">
                    <li className="nav-list-item">
                        <CreateUser />
                    </li>
                    <li className="nav-list-item">
                      <Login updateStatus={updateStatus} setUsername={setUsername}/>
                    </li>
                  </ul> ) : (
                  <ul className="nav-list">
                    <li className="nav-list-item">
                      <Button color="primary">
                        <Link to={'/'} onClick={(e) => {updateStatus(false)}}>Logout</Link>
                      </Button>
                    </li>
                    <li className="nav-list-item">
                      <Button color="primary">
                        <Link to={{pathname:'/profile', username: username}}>My Plants</Link>
                      </Button>
                    </li>
                  </ul>
                  )}
              </Toolbar>
          </AppBar>
      </ThemeProvider>
    )
}

export default NavBar