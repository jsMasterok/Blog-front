import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import FullPost from "./Pages/FullPost";
import Main from "./Pages/Main";

function App() {
  return (
    <div className="w-screen box-border max-w-full min-h-screen flex flex-col font-sans overflow-x-hidden">
      <Header />
      <div className="flex flex-col flex-1 w-full  max-w-3xl mx-auto">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/post/:id" element={<FullPost />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
