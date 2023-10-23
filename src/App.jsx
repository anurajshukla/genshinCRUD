import { Link, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Create from "./pages/Create"
import Edit from "./pages/Edit"
import {ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <div>
        <nav className="bg-black">
          <div className="inline container mx-auto p-4 flex justify-between " >
            <Link to="/"> <div className="inline-block text-white text-xl font-bold"> GENSHIN CRUD </div> </Link>
            <Link to="/create" className='shadow-md bg-blue-400 text-white rounded-sm px-4 py-2 font-bold hover:bg-blue-500 hover:cursor-pointer'> Add character </Link>
          </div>
        </nav>
        {/* created routes */}
        <div className="container mx-auto p-2 h-full">
          <Routes>
            <Route index element={<Home />}></Route>
            <Route path="/create" element={<Create/>}></Route>
            <Route path="/edit/:id" element={<Edit/>}></Route>
          </Routes>
        </div>
        <ToastContainer />
      </div>
    </>
  )
}

export default App
