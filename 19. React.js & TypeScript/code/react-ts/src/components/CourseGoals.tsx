// import { type FC } from 'react';

type Goal = {
  id: number,
  title: string,
  description: string
};

interface CourseGoalsProps {
  goals: Goal[]
};

export default function CourseGoals({ goals }: CourseGoalsProps) { // Recommended for React 18+
// const CourseGoals: FC<CourseGoalsProps> = ({goals}) => { // Old project (React 17 and earlier)
  return (
    <ul>
      {goals.map(goal => (
        <li key={goal.id}>
          <article>
            <div>
              <h2>{goal.title}</h2>
              <p>{goal.description}</p>
            </div>
            <button>Delete</button>
          </article>
        </li>
      ))}
    </ul>
  )
}

// export default CourseGoals;