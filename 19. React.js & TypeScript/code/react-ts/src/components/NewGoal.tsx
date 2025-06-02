import { useRef, type FormEvent } from 'react';

export default function NewGoal() {
  // here, we use ref to access the input elements directly but we could also use controlled components with useState
  const goalRef = useRef<HTMLInputElement>(null); // We add an explicit type to the ref to indicate that it will hold an HTMLInputElement and not the type of the initial value (which is null).
  const summaryRef = useRef<HTMLInputElement>(null);// We add an explicit type to the ref to indicate that it will hold an HTMLInputElement and not the type of the initial value (which is null).
  
  // In this case, the event type is FormEvent, which is a generic type that can be used for form events in React.
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const enteredGoal = goalRef.current!.value; // "!" is a non-null assertion operator, which tells TypeScript that we are sure goalRef.current is not null.
    const enteredSummary = summaryRef.current!.value; // "!" is a non-null assertion operator, which tells TypeScript that we are sure goalRef.current is not null.

    // validation...

    
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your Goal</label>
        <input type="text" id="goal" ref={goalRef} />
      </p>
      <p>
        <label htmlFor="summary">Short Summary</label>
        <input type="text" id="summary" ref={summaryRef} />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
}