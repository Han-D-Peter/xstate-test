import { useMachine } from "@xstate/react";
import { Fragment } from "react/jsx-runtime";
import { assign, fromPromise, setup } from "xstate";

async function fetchMovies() {
  return fetch("https://yts.mx/api/v2/list_movies.json").then((res) =>
    res.json()
  );
}

const asyncState = setup({
  actors: {
    fetchMovies: fromPromise(fetchMovies),
  },
}).createMachine({
  initial: "loading",
  context: {
    movies: [],
  },

  states: {
    loading: {
      invoke: {
        id: "fetch-movies",
        src: "fetchMovies",
        onDone: {
          target: "loaded",
          actions: assign({
            movies: ({ event }) => event.output,
          }),
        },
        onError: "failure",
      },
    },
    loaded: {
      on: {
        REFRESH: "loading",
      },
    },
    failure: {
      on: {
        RETRY: "loading",
      },
    },
  },
});

export default function AsyncState() {
  const [state] = useMachine(asyncState);
  const movies: { id: number; title: string; summary: string }[] =
    state.context.movies?.data?.movies ?? [];

  return (
    <div>
      {movies.map((movie) => {
        return (
          <Fragment key={movie.id}>
            <h2>{movie.title}</h2>
            <div>{movie.summary}</div>
          </Fragment>
        );
      })}
    </div>
  );
}
