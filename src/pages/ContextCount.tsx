import { useMachine } from "@xstate/react";
import { assign, createMachine } from "xstate";

const countState = createMachine({
  initial: "count",
  context: {
    count: 0,
  },

  states: {
    count: {
      on: {
        INCREMENT: {
          actions: assign({ count: ({ context }) => context.count + 1 }),
        },
        DECREMENT: {
          actions: assign({ count: ({ context }) => context.count - 1 }),
        },
      },
    },
  },
});

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
