import Header from "./components/Header";
import CourseGoals from "./components/CourseGoals";

import goalsImage from "./assets/goals.jpg";

function App() {

  return (
    <main>
      <Header image={{src: goalsImage, alt: "A list of goals"}}>
        <h1>My Course Goals</h1>
      </Header>
      <CourseGoals 
        goals={[
          {
            id:1, 
            title: "Learn TS", 
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto consectetur minima similique. Voluptatem nam nisi ex possimus culpa suscipit eligendi!"
          },
          {
            id:2, 
            title: "Learn Japanese", 
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
          }
        ]}
      />
    </main>
  );
}

export default App;
