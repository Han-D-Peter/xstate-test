import { useMachine } from "@xstate/react";
import { humanInfoState } from "../machine";
import { FormEvent, useEffect, useRef } from "react";

export default function StepForm() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [state, send] = useMachine(humanInfoState);
  const { name, age, address } = state.context;
  const STATE_KEYS = Object.keys(state.machine.states);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    send({ type: "input", event: inputRef.current?.value });
  }

  useEffect(() => {
    inputRef.current?.focus();
  }, [state]);

  return (
    <div>
      <div>
        <div>이름: {name}</div>
        <div>나이: {age}</div>
        <div>주소: {address}</div>
      </div>
      <form onSubmit={submit}>
        {STATE_KEYS.map((key) => (
          <>
            {state.matches(key) && (
              <div>
                {key}:
                <input ref={inputRef} />
              </div>
            )}
          </>
        ))}
        <button>다음</button>
      </form>
    </div>
  );
}
