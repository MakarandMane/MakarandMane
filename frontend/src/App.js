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
        {/* v3 sidebar is now the primary site */}
        <Route path="/" element={<MakarandSidebar />} />
        <Route path="/blog" element={<BlogIndex />} />
        {/* Reference variants */}
        <Route path="/premium" element={<MakarandLanding />} />
        <Route path="/minimal" element={<MakarandMinimal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
