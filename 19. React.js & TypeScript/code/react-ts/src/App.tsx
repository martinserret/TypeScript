import { useState } from "react";

import Header from "./components/Header";
import CourseGoals from "./components/CourseGoals";

import goalsImage from "./assets/goals.jpg";

function App() {
  // useState is a generic type. You can specify the type of the state variable (useState<Type>())
  // Alternatively, you can use TypeScript's type inference to automatically determine the type based on the initial value.
  const [goals, setGoals] = useState([ 
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
  ]);


  function handleDeleteGoal(id: number) {
    setGoals((prevGoals) => prevGoals.filter(goal => goal.id !== id));
  }

  return (
    <main>
      <Header image={{src: goalsImage, alt: "A list of goals"}}>
        <h1>My Course Goals</h1>
      </Header>
      <CourseGoals 
        goals={goals}
        onDelete={handleDeleteGoal}
      />
    </main>
  );
}

export default App;
