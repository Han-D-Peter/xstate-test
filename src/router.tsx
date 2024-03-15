import ConditionalState from "./pages/ConditionalState";
import ContextCount from "./pages/ContextCount";

export const router = [
  { name: "조건부 상태", path: "/router", component: <ConditionalState /> },
  { name: "카운터", path: "/counter", component: <ContextCount /> },
];
