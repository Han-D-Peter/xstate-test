import { useMachine } from "@xstate/react";
import { assign, createMachine } from "xstate";

const conditionalGuardState = createMachine(
  {
    context: {
      count: 0,
    },

    initial: "INC",

    states: {
      INC: {
        entry: assign({ count: ({ context }) => context.count + 1 }),
        on: {
          action: [
            { guard: "isOverTen", target: "DEC" },
            {
              actions: assign({ count: ({ context }) => context.count + 1 }),
            },
          ],
        },
      },
      DEC: {
        entry: assign({ count: ({ context }) => context.count - 1 }),
        on: {
          action: [
            { guard: "isUnderMinusTen", target: "INC" },
            { actions: assign({ count: ({ context }) => context.count - 1 }) },
          ],
        },
      },
    },
  },
  {
    guards: {
      isOverTen: ({ context }) => context.count > 9,
      isUnderMinusTen: ({ context }) => context.count < -9,
    },
  }
);

export default function ConditionalGuardState() {
  const [state, sendTo] = useMachine(conditionalGuardState);
  return (
    <div>
      <div>{state.context.count}</div>
      <button onClick={() => sendTo({ type: "action" })}>action</button>
    </div>
  );
}
