import { assign, createMachine } from "xstate";

export const conditionOfState = createMachine({
  initial: "pending",
  states: {
    pending: {
      on: {
        RESOLVE: { target: "resolved" },
        REJECT: { target: "rejected" },
      },
    },
    resolved: {
      type: "final",
    },
    rejected: {
      type: "final",
    },
  },
});

export const countState = createMachine({
  initial: "count",
  context: {
    count: 0,
  },

  states: {
    count: {
      on: {
        INCREMENT: {
          actions: assign({ count: ({ context }) => context.count + 1 }),
        },
        DECREMENT: {
          actions: assign({ count: ({ context }) => context.count - 1 }),
        },
      },
    },
  },
});
