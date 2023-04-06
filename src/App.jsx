import Hero from "./components/Hero/Hero";
import MainComponent from "./components/Main/Main";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <div className="App__Main">
        <Hero />
        <MainComponent />
      </div>
    </div>
  );
}

export default App;
