import {BrowserRouter as Router} from 'react-router-dom'
import Routes from './Routes';
import GlobalStyle from './Styles/global';
function App() {

  return (
      <Router>
        <Routes />
        <GlobalStyle />
      </Router>
  );
}

export default App;