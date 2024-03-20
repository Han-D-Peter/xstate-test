import { useMachine } from "@xstate/react";
import { asyncState } from "../machine";

export default function AsyncState() {
  const [state, send] = useMachine(asyncState);
  const movies: { title: string; summary: string }[] =
    state.context.movies?.data?.movies ?? [];

  return (
    <div>
      {movies.map((movie) => {
        return (
          <>
            <h2>{movie.title}</h2>
            <div>{movie.summary}</div>
          </>
        );
      })}
    </div>
  );
}
