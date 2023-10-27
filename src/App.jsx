import { Route, Routes} from "react-router-dom";
import "./App.css";
import { Home, Login, Registration } from "./pages";

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Registration />} />
    </Routes>
  );
};

export default App;
