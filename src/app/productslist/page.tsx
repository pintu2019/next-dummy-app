import Link from "next/link";
import DeleteProduct from "../../../components/deleteProduct";

interface Product {
  _id: string;
  name: string;
  price: number;
  company: string;
  category: string;
}

const getProducts = async (): Promise<Product[]> => {
  const response = await fetch("http://localhost:3000/api/products");
  const data = await response.json();

  if (data.success){
    return data.response as Product[];
  }
  else {
    return [];
  }
}

const Productlist = async () => {
  const products: Product[]  = await getProducts();
  return(
    <div>
      <h1>Product List</h1>
      <p>This is the product list page.</p>

      <table className="border-collapse border border-gray-400 w-full">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">Product Name</th>
            <th className="border border-gray-300 p-2">Price</th>
            <th className="border border-gray-300 p-2">Company</th>
            <th className="border border-gray-300 p-2">Category</th>
            <th className="border border-gray-300 p-2">Edit</th>
          </tr>   
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td className="border border-gray-300 p-2">{product.name}</td>
              <td className="border border-gray-300 p-2">{product.price}</td>
              <td className="border border-gray-300 p-2">{product.company}</td>
              <td className="border border-gray-300 p-2">{product.category}</td>
              <td className="border border-gray-300 p-2">
                  <button className="bg-[#fff000] px-4 py-2"><Link href={`productslist/${product._id}`}>Edit</Link></button>
              </td>
              <td className="border border-gray-300 p-2">
                  <DeleteProduct id={product._id}/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>  
  )
}
export default Productlist;