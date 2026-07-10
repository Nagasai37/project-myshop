

import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Footer from "./components/footer";

import Home from "./pages/Home";
import Products from "./pages/products";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <>
      <Navbar />

      <div className="layout">
        <Sidebar />

        <div className="content">
          
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;