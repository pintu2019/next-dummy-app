"use client";
import { useState } from "react";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [company, setCompany] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    let result = await fetch("http://localhost:3000/api/products", {
      method: "POST",
      body: JSON.stringify({ name, price, company, category }),
    });
    const data = await result.json();
    if (data.success) {
      alert("Product added successfully");
      setName("");
      setPrice("");
      setCompany("");
      setCategory("");
    }
  };
  return (
    <div className="flex  flex-col  justify-center items-center m-4">
      <h1>Add Product</h1>
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
          onClick={handleSubmit}
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
