import { useMachine } from "@xstate/react";
import { setup } from "xstate";

function initializing(context: unknown, params: { count: number }) {
  alert(`init count = ${params.count}`);
}

const entryState = setup({
  actions: {
    initialize: initializing,
  },
}).createMachine({
  types: {
    context: {} as { count: number },
  },
  context: {
    count: 0,
  },
  entry: [
    { type: "initialize", params: ({ context }) => ({ count: context.count }) },
  ],
});
export default function EntriedActionState() {
  const [state] = useMachine(entryState);

  return <div>count: {state.context.count}</div>;
}
