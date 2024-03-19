import { useMachine } from "@xstate/react";
import { asyncState } from "../machine";

export default function AsyncState() {
  const [state, send] = useMachine(asyncState);

  console.log("state", state);

  return <div>hello</div>;
}
