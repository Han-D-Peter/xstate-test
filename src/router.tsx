import AsyncState from "./pages/AsyncState";
import ConditionalState from "./pages/ConditionalState";
import ContextCount from "./pages/ContextCount";
import ModeChangeCount from "./pages/ModeChangeCount";
import StepForm from "./pages/StepForm";

export const router = [
  { name: "조건부 상태", path: "/router", component: <ConditionalState /> },
  {
    name: "컨텍스트 카운터",
    path: "/contextcounter",
    component: <ContextCount />,
  },
  {
    name: "모드 변경 카운터",
    path: "/modechangecount",
    component: <ModeChangeCount />,
  },
  {
    name: "순차적 양식",
    path: "/stepform",
    component: <StepForm />,
  },
  {
    name: "비동기 상태",
    path: "/asyncstate",
    component: <AsyncState />,
  },
];
