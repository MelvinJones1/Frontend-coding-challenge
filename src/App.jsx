import { Route, Routes } from "react-router-dom";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/add-user" element={<AddUser />} />
      </Routes>
    </div>
  );
}

export default App;
