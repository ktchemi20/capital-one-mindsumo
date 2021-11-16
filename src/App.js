import logo from './logo.svg';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Feed from "./components/Feed";
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <a
          className="App-link"
          href="https://www.nps.gov/anac/planyourvisit/things2do.htm"
          target="_blank"
          rel="noopener noreferrer"
        >
          Activities at Anacostia Park     
        </a>
        <a
          className="App-link"
          href="https://www.nps.gov/cato/planyourvisit/things2do.htm"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p></p>
          Activities at Catocin Park
        </a>
        <a
          className="App-link"
          href="https://www.nps.gov/grfa/planyourvisit/things2do.htm"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p></p>
          Activities at Great Falls Park
        </a>
      <Feed />
      <a
          className="App-link"
          href="https://www.nps.gov/anac/learn/index.htm"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p></p>
          Want to learn more about Anacostia Park?
        </a>
        <a
          className="App-link"
          href="https://www.nps.gov/cato/learn/index.htm"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p></p>
          Want to learn more about Catoctin Park?
        </a>
        <a
          className="App-link"
          href="https://www.nps.gov/grfa/learn/index.htm"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p></p>
          Want to learn more about Great Falls Park?
          <p></p>
        </a>
      <Footer />
    </div>
  );
}

export default App;
