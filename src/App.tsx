import { Route, Routes } from "react-router-dom";
import ConditionalState from "./pages/ConditionalState";

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<ConditionalState />}></Route>
      </Routes>
    </div>
  );
}

export default App;
