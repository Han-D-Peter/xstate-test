import { useMachine } from "@xstate/react";
import { enqueueActions, setup } from "xstate";

const enqueueActionList = setup({
  actions: {
    increase: () => setTimeout(() => alert("increase after a second"), 1000),
    decrease: () => setTimeout(() => alert("decrease after 0.2 seconds"), 200),
  },
}).createMachine({
  context: { count: 3 },

  initial: "increase",
  states: {
    increase: {
      entry: enqueueActions(({ enqueue }) => {
        enqueue({ type: "increase" });
        enqueue({ type: "increase" });
        enqueue({ type: "decrease" });
      }),
    },
  },
});

export default function EnqueueActionState() {
  const [state] = useMachine(enqueueActionList);
  return <div>{state.context.count}</div>;
}
