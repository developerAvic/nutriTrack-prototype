
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./main/layout/Layout";
import Dashboard from "./main/Pages/Dashboard";
import Settings from "./main/Pages/Settings";
import Home from "./main/Pages/Home";
import Gpa from "./main/Pages/GPA";
import AIChat from "./main/Pages/AIchat";
import Export from "./main/Pages/Export";
import Activity from "./main/Pages/Activity";


export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/gpa" element={<Gpa />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/Aichat" element={<AIChat />} />
          <Route path="/export" element={<Export />} />
          <Route path="/settings" element={<Settings />} />
          
        </Routes>
      </Layout>
    </Router>
  );
}
