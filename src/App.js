import "./App.css";
import { Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import Manage from "./pages/Manage";
import Navigator from "./components/UI/Navigator";
import Spinner from "./components/UI/Spinner";
import Modal from "./components/UI/Modal";
import NoPage from "./components/UI/NoPage";
const App = (props) => {
  return (
    <>
      <Modal />
      <Spinner>
        <Routes>
          <Route path="/" element={<Navigator />}>
            <Route index element={<Index />} />
            <Route path="manage" element={<Manage />} />
          </Route>
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Spinner>
    </>
  );
};
export default App;
