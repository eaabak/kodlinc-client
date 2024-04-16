import EditorPage from "./Editor";
import Home from "./Home";
import NotFound from "./NotFound";
import Header from "./components/header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <html lang="en" suppressHydrationWarning>
      <Router>
        <div>
          <Header />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/link" element={<Home />} />
          <Route path="/link/:slug" element={<EditorPage />} />
          <Route path="*" element={<NotFound text="Page not found"/>} /> 
        </Routes>
      </Router>
    </html>
  );
}
