import { Route, Routes } from "react-router-dom";
import Paths from "./pages/Paths";
import { router } from "./router";

function App() {
  return (
    <div>
      <Routes>
        {router.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={route.component}
          ></Route>
        ))}
      </Routes>
      <Paths />
    </div>
  );
}

export default App;
