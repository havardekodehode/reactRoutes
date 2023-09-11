import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../src/index.css";
import Navbar from "./Components/Navbar/Navbar";
import BlogCard from "./Components/BlogCard/BlogCard";

function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<h1>Hello there!</h1>} />
                    <Route path="/contact" element={<h2>Contact me at</h2>} />

                    <Route path="/posts" element={<BlogCard />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
