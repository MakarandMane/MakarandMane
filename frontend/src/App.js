import "@/App.css";
import "@/pages/MakarandMinimal.css";
import "@/pages/MakarandSidebar.css";
import "@/pages/BlogIndex.css";
import "@/pages/V4.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import V4Home from "@/pages/V4Home";
import V4Work from "@/pages/V4Work";
import V4Speaking from "@/pages/V4Speaking";
import V4Writing from "@/pages/V4Writing";
import V4Now from "@/pages/V4Now";

import MakarandLanding from "@/pages/MakarandLanding";
import MakarandMinimal from "@/pages/MakarandMinimal";
import MakarandSidebar from "@/pages/MakarandSidebar";
import BlogIndex from "@/pages/BlogIndex";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* v4 — primary */}
        <Route path="/" element={<V4Home />} />
        <Route path="/work" element={<V4Work />} />
        <Route path="/speaking" element={<V4Speaking />} />
        <Route path="/now" element={<V4Now />} />
        <Route path="/writing" element={<V4Writing />} />
        <Route path="/blog" element={<BlogIndex />} />

        {/* Reference variants */}
        <Route path="/v3" element={<MakarandSidebar />} />
        <Route path="/premium" element={<MakarandLanding />} />
        <Route path="/minimal" element={<MakarandMinimal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
