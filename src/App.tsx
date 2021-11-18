import {BrowserRouter as Router} from 'react-router-dom'
import Routes from './routes';
import GlobalStyle from './Styles/global';
import { AuthProvider } from "./hooks/Auth";
function App() {

  return (
    <AuthProvider>
      <Router>
        <Routes />
        <GlobalStyle />
      </Router>
      </AuthProvider>
  );
}

export default App;