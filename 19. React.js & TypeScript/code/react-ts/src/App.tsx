import Header from "./components/Header";
import goalsImage from "./assets/goals.jpg";

function App() {

  return (
    <main>
      <Header image={{src: goalsImage, alt: "A list of goals"}}>
        <h1>My Course Goals</h1>
      </Header>
    </main>
  );
}

export default App;
