import { useMachine } from "@xstate/react";
import { localStateCountState } from "../machine";

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
