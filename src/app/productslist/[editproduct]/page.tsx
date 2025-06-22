"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface EditProductProps {
  params: {
    editproduct: string;
  };
}

const EditProduct = (props: EditProductProps) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [company, setCompany] = useState("");
  const [category, setCategory] = useState("");
  const router = useRouter(); 


  useEffect(() =>{
    getProductData();
  },[])

  const getProductData = async () =>{
    const response = await fetch (`http://localhost:3000/api/products/${props.params.editproduct}`);
    const data = await response.json();
    if (data.success) {
      setName(data.result.name);
      setPrice(data.result.price);
      setCompany(data.result.company);
      setCategory(data.result.category);
    } else {
      console.error("Failed to fetch product data");
    }
  }
  
  const updateProduct = async () =>{
    const result = await fetch (`http://localhost:3000/api/products/${props.params.editproduct}`, {
        method: "PUT",
        body: JSON.stringify({ name, price, company, category }),
    })
    const data = await result.json();
    if (data.success) {
        alert('Product updated successfully');
        router.push('/productslist')   
    }
  }
  return (
    <div className="flex  flex-col  justify-center items-center m-4">
      <h1>Update Product</h1>
      <form className="border-solid border-2 border-gray-600 p-4 space-y-4">
        <div>
          <label htmlFor="name">Product Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-2 border-gray-600 p-2"
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="text"
            id="price"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="border-2 border-gray-600 p-2"
          />
        </div>
        <div>
          <label htmlFor="company">company:</label>
          <input
            type="text"
            id="comapny"
            name="price"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="border-2 border-gray-600 p-2"
          />
        </div>
        <div>
          <label htmlFor="category">category:</label>
          <input
            type="text"
            id="price"
            name="price"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border-2 border-gray-600 p-2"
          />
        </div>
        <button
          type="submit"
          className="bg-[#000fff] px-4 py-2 cursor-pointer text-[#fff]"
          onClick={(e) =>{
            updateProduct();
            e.preventDefault();
          }}
        >
          Update Product
        </button>
      </form>
      <Link href ="/productslist">Go to product list</Link>
    </div>

  );
};

export default EditProduct;
