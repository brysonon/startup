import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');

  // Asynchronously determine if the user is authenticated by calling the service
  const [authState, setAuthState] = React.useState(AuthState.Unknown);
  React.useEffect(() => {
    if (userName) {
      fetch(`/api/user/${userName}`)
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          }
        })
        .then((user) => {
          const state = user?.authenticated ? AuthState.Authenticated : AuthState.Unauthenticated;
          setAuthState(state);
        });
    } else {
      setAuthState(AuthState.Unauthenticated);
    }
  }, [userName]);

  return (
    <body>
      <header className="flex-wrap align-items-center justify-content-center justify-content-md-between">
      <h1>
        <span className="fw-bold text-dark">Caregiver Tool</span>
      </h1>
      <ul className="nav nav-pills p-1 mx-3">
        <li className='nav-item'>
          <NavLink className='nav-link' to=''>
            Login
          </NavLink>
        </li>
        {authState === AuthState.Authenticated && (
          <li className='nav-item'>
            <NavLink className='nav-link' to='play'>
              Play
            </NavLink>
          </li>
        )}
        {authState === AuthState.Authenticated && (
          <li className='nav-item'>
            <NavLink className='nav-link' to='scores'>
              Scores
            </NavLink>
          </li>
        )}
        <li className='nav-item'>
          <NavLink className='nav-link' to='about'>
            About
          </NavLink>
        </li>
      </ul>
    </header>

      <footer className="flex-wrap justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <a className='text-muted' href="https://github.com/brysonon/startup">Bryson On</a>
        </div>
      </footer>
    </body>
  );
}

export default App;
