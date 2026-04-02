import { Toaster } from "react-hot-toast";
import { Table } from "antd";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import StoryForm from "./pages/Lab4";
import EditStory from "./pages/Lab6";
import { StoryList } from "./pages/Lab5";

function App() {
  return (
    <>
      <Navbar />
      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto mt-10 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Chào mừng đến với WEB2091</h1>
        <Header />
        <Routes>
          <Route path="/list" element={<StoryList />} />
          <Route path="/add" element={<StoryForm />} />
          <Route path="/edit/:id" element={<EditStory />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Table columns={[]} dataSource={[]} />
      </div>

      <Toaster />
    </>
  );
}

export default App;
