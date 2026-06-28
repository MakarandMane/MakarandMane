import "@/App.css";
import "@/pages/MakarandMinimal.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MakarandLanding from "@/pages/MakarandLanding";
import MakarandMinimal from "@/pages/MakarandMinimal";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MakarandLanding />} />
        <Route path="/minimal" element={<MakarandMinimal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
