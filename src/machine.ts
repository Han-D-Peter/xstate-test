import { createMachine } from "xstate";

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
