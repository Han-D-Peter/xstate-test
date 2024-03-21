import { useMachine } from "@xstate/react";
import { assign, createMachine } from "xstate";

const guardState = createMachine(
  {
    initial: "INC",
    context: {
      count: 0,
    },
    states: {
      INC: {
        on: {
          action: {
            actions: assign({ count: ({ context }) => context.count + 1 }),
            guard: "isValid",
          },
        },
      },
    },
  },
  {
    guards: {
      isValid: ({ context }) => {
        return context.count < 10; // 10 미만이지만 9인순간엔 10 미만이므로 가드 통과하여 값이 10이 나옴
      },
    },
  }
);

export default function GuardState() {
  const [state, sendTo] = useMachine(guardState);

  return (
    <div>
      <div>Guarded under 10 :{state.context.count}</div>
      <div>
        <button onClick={() => sendTo({ type: "action" })}>action</button>
      </div>
    </div>
  );
}
