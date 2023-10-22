import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

const Create = () => {

  const [name, setName] = useState("");
  const [element, setElement] = useState("");
  const [image, setImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const saveProduct = async(e) => {
    e.preventDefault();
    if(name == "" || element == "" || image == "") {
      alert('please fill out all input!');
      return;
    }
    try{
      setIsLoading(true);
      const response = await axios.post("https://crud-back-end-6swh.onrender.com/api/product", {name: name, element: element, image: image});
      toast.success(`Saved ${response.data.name} successfully`, {
        position: "top-right",
        autoClose: 5000,
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
      toast.error(error.message);
      setIsLoading(false);
    }
  }


  return (
    <div className='max-w-lg bg-white shadow-lg mx-auto p-7 rounded mt-6'>
      <h2 className='font-semibold text-2xl mb-4 block text-center'>
        Add Character
      </h2>
      <form onSubmit={saveProduct}>
        <div className='space-y-2'>
          <div>
            <label> Name </label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className='w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholger-gray-400' placeholder='Enter Name' />
          </div>
          <div>
            <label> Element </label>
            <input type="text" value={element} onChange={(e) => setElement(e.target.value)} className='w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholger-gray-400' placeholder='Enter Element' />
          </div>
          <div>
            <label> Image </label>
            <input type="text" value={image} onChange={(e) => setImage(e.target.value)} className='w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholger-gray-400' placeholder='Enter Image url' />
          </div>
          <div>
            { !isLoading && (<button className='block w-full mt-6 bg-blue-500 text-white rounded-sm px-4 py-2 font-bold hover:bg-blue-700 hover:cursor-pointer '> Save </button>)}
            
          </div>
        </div>
      </form>
    </div>
  )
}

export default Create