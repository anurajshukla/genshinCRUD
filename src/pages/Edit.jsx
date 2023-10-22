import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import { toast } from "react-toastify";

const Edit = () => {

  let {id} = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState({
    name: "",
    element: "",
    image: "",
  });

  const getProduct = async() => {
    setIsLoading(true);
    try {
      const response = await axios.get(`https://crud-back-end-6swh.onrender.com/api/product/${id}`);
      setProduct({
        name: response.data.name,
        element: response.data.element,
        image: response.data.image,
      })
      setIsLoading(false);
    }
    catch {
      setIsLoading(false);
      toast.error(error.message);
    }

  }

  const updateProduct = async(e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.put(`https://crud-back-end-6swh.onrender.com/api/product/${id}`, product);
      toast.success(`updated ${response.data.name} successfully`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
      setIsLoading(false);
      navigate("/");
    }
    catch(error) {
      setIsLoading(false);
      toast.error(error.meesage);
    }
  }

  useEffect(() => {
    getProduct();
  }, [])

  return (
    <div className='max-w-lg bg-white shadow-lg mx-auto p-7 rounded mt-6'>
    <h2 className='font-semibold text-2xl mb-4 block text-center'>
      Edit Character
    </h2>
    {isLoading ? ("Loading") : (
      <>
            <form onSubmit={updateProduct}>
      <div className='space-y-2'>
        <div>
          <label> Name </label>
          <input type="text" value={product.name} onChange={(e) => setProduct({...product, name: e.target.value})}  className='w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholger-gray-400' placeholder='Enter Name' />
        </div>
        <div>
          <label> Element </label>
          <input type="text" value={product.element} onChange={(e) => setProduct({...product, element: e.target.value})}  className='w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholger-gray-400' placeholder='Enter Element' />
        </div>
        <div>
          <label> Image </label>
          <input type="text" value={product.image} onChange={(e) => setProduct({...product, image: e.target.value})}    className='w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholger-gray-400' placeholder='Enter Image url' />
        </div>
        <div>
          { !isLoading && (<button className='block w-full mt-6 bg-blue-500 text-white rounded-sm px-4 py-2 font-bold hover:bg-blue-700 hover:cursor-pointer '> Update </button>)}
          
        </div>
      </div>
    </form>
      </>
    )}
  </div>
  )
}

export default Edit