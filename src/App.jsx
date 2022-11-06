import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";

const App = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route index element={<p className="container"></p>} />
      </Routes>
    </>
  );
};

export default App;
