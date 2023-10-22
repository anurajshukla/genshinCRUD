import React, { useEffect, useState } from 'react'
import axios from "axios";
import Product from '../components/Product';
import { Link } from 'react-router-dom';

const Home = () => {

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getProducts = async() => {
    try {
      setIsLoading(true);
      const response = await axios.get("https://crud-back-end-6swh.onrender.com/api/product");
      console.log(response.data);
      setProducts(response.data);
      setIsLoading(false);

    } catch(error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProducts();
  }, [])

  return (
    <div>

        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 mt-5'>
          {isLoading ? (
            "Loading"
          ) : (
            <>
            {products.length > 0 ? (
              <>
                {
                  products.map((product, index) => {
                    return (
                      <Product key={index} product={product} getProducts={getProducts} />
                    )
                  })
                }
              </>
            ) : (
              <div>
                There is no product
              </div>
            )}
            </>
          )}
        </div>
    </div>
  )
}

export default Home