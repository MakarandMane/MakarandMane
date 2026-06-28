import "@/App.css";
import "@/pages/MakarandMinimal.css";
import "@/pages/MakarandSidebar.css";
import "@/pages/BlogIndex.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MakarandLanding from "@/pages/MakarandLanding";
import MakarandMinimal from "@/pages/MakarandMinimal";
import MakarandSidebar from "@/pages/MakarandSidebar";
import BlogIndex from "@/pages/BlogIndex";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MakarandLanding />} />
        <Route path="/minimal" element={<MakarandMinimal />} />
        <Route path="/sidebar" element={<MakarandSidebar />} />
        <Route path="/blog" element={<BlogIndex />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
