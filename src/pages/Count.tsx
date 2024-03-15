import { useMachine } from "@xstate/react";
import { countState } from "../machine";

export default function Count() {
  const [state, send] = useMachine(countState);

  return (
    <div>
      <div>{state.context.count}</div>
      <button onClick={() => send({ type: "INCREMENT" })}>INC</button>
      <button onClick={() => send({ type: "DECREMENT" })}>DEC</button>
    </div>
  );
}
