import { type FormEvent } from 'react';

export default function NewGoal() {
  // In this case, the event type is FormEvent, which is a generic type that can be used for form events in React.
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your Goal</label>
        <input type="text" id="goal" />
      </p>
      <p>
        <label htmlFor="summary">Short Summary</label>
        <input type="text" id="summary" />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
}