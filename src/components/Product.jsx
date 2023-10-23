import React from 'react'
import { Link } from 'react-router-dom'
import axios from "axios";
import { toast } from "react-toastify";
import Swal from "sweetalert2";


const Product = ({product, getProducts }) => {

  const deleteProduct = async(id) => {
    const result = await Swal.fire({
      title: "Do you want to delete this character?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonColor: "black",
      confirmButtonColor: "red"
    })
    if(result.isConfirmed) {
      try {
        await axios.delete(`https://crud-back-end-6swh.onrender.com/api/product/${id}`);
        toast.success(`Deleted successfully`, {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
        getProducts();
      }
      catch(error) {
        toast.error(error.message);
      }
    }
  }

  return (
    <div className='bg-white rounded shadow-xl overflow-hidden'>
        <img src={product.image} className='w-full h-80 object-cover' />
        <div className='font-sans text-center px-5 pt-2 pb-4'>
            <h1 className='text font-bold'> {product.name} </h1>
            <div className='text-sm'> Element: {product.element} </div>

            <div className='mt-2 flex gap-4'> 
                <Link to={`/edit/${product._id}`} className='inline-block w-full text-center shadow-md text-sm bg-black text-white rounded-sm px-4 py-1 font-bold hover:bg-black hover:cursor-pointer'> Edit </Link>
                <button onClick={() => deleteProduct(product._id)}  className='inline-block w-full text-center shadow-md text-sm bg-red-700 text-white rounded-sm px-4 py-1 font-bold hover:bg-red-900 hover:cursor-pointer'> Delete </button>
            </div>

        </div>
        
    </div>
  )
}

export default Product