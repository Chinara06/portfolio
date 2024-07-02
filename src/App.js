import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import Home from "./pages/Home/Home";
import "./styles/style.scss"
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Contacts from "./pages/Contacts/Contacts";
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/"element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contacts" element={<Contacts />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
