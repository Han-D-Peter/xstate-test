import { useMachine } from "@xstate/react";
import { assign, createMachine } from "xstate";

const localStateCountState = createMachine({
  initial: "MINE",
  context: { mine: 0, yours: 0 },
  states: {
    MINE: {
      on: {
        INC: {
          actions: assign({
            mine: ({ context }) => context.mine + 1,
            yours: ({ context }) => context.yours - 1,
          }),
        },
        DEC: {
          actions: assign({
            yours: ({ context }) => context.yours + 1,
            mine: ({ context }) => context.mine - 1,
          }),
        },
        TURN: {
          target: "YOURS",
        },
      },
    },
    YOURS: {
      on: {
        INC: {
          actions: assign({
            mine: ({ context }) => context.mine - 1,
            yours: ({ context }) => context.yours + 1,
          }),
        },
        DEC: {
          actions: assign({
            yours: ({ context }) => context.yours - 1,
            mine: ({ context }) => context.mine + 1,
          }),
        },
        TURN: {
          target: "MINE",
        },
      },
    },
  },
});

export default function ModeChangeCount() {
  const [state, send] = useMachine(localStateCountState);
  const isMine = state.matches("MINE");

  return (
    <div>
      {isMine ? <div>내꺼 통제</div> : <div>너꺼 통제</div>}
      <div>
        MINE: {state.context.mine} YOURS: {state.context.yours}
      </div>
      <div>
        <div>
          <button onClick={() => send({ type: "INC" })}>INC</button>
          <button onClick={() => send({ type: "DEC" })}>DEC</button>
        </div>
      </div>
      <div>
        <button onClick={() => send({ type: "TURN" })}>Change</button>
      </div>
    </div>
  );
}
