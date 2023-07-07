import './App.css';

import Router from "./components/Router";
import Root from "./pages/Root";
import About from "./pages/About";
import Route from "./Components/Route";

function App() {
  return (
    <div className="App">
    <Router>
      <Route pathname="/" component={<Root />} />
      <Route pathname="/about" component={<About />} />
    </Router>
    </div>
  );
}

export default App;
