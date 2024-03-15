import { Route, Routes } from "react-router-dom";
import ConditionalState from "./pages/ConditionalState";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/router" element={<ConditionalState />}></Route>
      </Routes>
    </div>
  );
}

export default App;
