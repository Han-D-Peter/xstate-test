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

export const localStateCountState = createMachine({
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

export const humanInfoState = createMachine({
  initial: "NAME",
  context: {
    name: "",
    age: null,
    address: "",
  },

  states: {
    NAME: {
      on: {
        input: {
          actions: assign({
            name: ({ event }) => event.event,
          }),
          target: "AGE",
        },
      },
    },
    AGE: {
      on: {
        input: {
          actions: assign({
            age: ({ event }) => event.event,
          }),
          target: "ADDRESS",
        },
      },
    },
    ADDRESS: {
      on: {
        input: {
          actions: assign({
            address: ({ event }) => event.event,
          }),
        },
      },
    },
  },
});
