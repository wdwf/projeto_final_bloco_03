import { BrowserRouter as Router, Route, Routes } from "react-router";
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Home from "./pages/Home";
import FormCategoria from "./components/FormCategoria";
import NotFound from "./pages/NotFound";
import ListaCategorias from "./components/ListaCategorias";
import DeletarCategoria from "./components/DeletarCategoria";
import { ToastContainer } from "react-toastify";
import ListaProdutos from "./components/ListaProdutos";

function App() {

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Router>
        <ToastContainer />
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cadastrar-categoria" element={<FormCategoria />} />
            <Route path="/editar-categoria/:id" element={<FormCategoria />} />
            <Route path="/deletar-categoria/:id" element={<DeletarCategoria />} />
            <Route path="/categorias" element={<ListaCategorias />} />
            <Route path="/produtos" element={<ListaProdutos />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </main>
  )
}

export default App
