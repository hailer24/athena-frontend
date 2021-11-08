import "./App.css";
import CreateEvents from "./components/CreateEvents/CreateEvents";
import Meetings from "./components/Meetings/Meetings";
import Nav from "./components/Navbar";
import NewMeet from "./components/NewEvents/NewMeet";

function App() {
  return (
    <div className="App">
      <div className="nav">
        <Nav></Nav>
      </div>
      <section className="content">
        <div className="meeting">
          <h1>Invitations</h1>
          <Meetings></Meetings>
        </div>
        <div className="newMeet">
          <h1>New Meetings</h1>
          <CreateEvents />
        </div>
      </section>
      <footer>hi</footer>
    </div>
  );
}

export default App;
