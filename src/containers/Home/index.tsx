import logo from './logo.svg';
import StyledApp from './index.style';

const App = () => {
  return (
    <StyledApp>
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <a
          className="app-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </StyledApp>
  );
};

export default App;
