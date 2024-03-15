import { Link } from "react-router-dom";
import { router } from "../router";

export default function Paths() {
  return (
    <div>
      {router.map((route) => (
        <div key={route.name}>
          <Link to={route.path}>{route.name}</Link>
        </div>
      ))}
    </div>
  );
}
