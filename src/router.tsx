import ConditionalState from "./pages/ConditionalState";
import Count from "./pages/Count";

export const router = [
  { name: "조건부 상태", path: "/router", component: <ConditionalState /> },
  { name: "카운터", path: "/counter", component: <Count /> },
];
