import Header from "./components/Header";
import goalsImage from "./assets/goals.jpg";

function App() {

  return (
    <main>
      <Header image={{src: goalsImage, alt: "A list of goals"}} />
    </main>
  );
}

export default App;
