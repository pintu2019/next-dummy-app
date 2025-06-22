"use client"

import { useRouter } from "next/navigation";

useRouter
const DeleteProduct  = (props: { id: any; }) =>{
    const router = useRouter();
    const deleteProduct = async() =>{
        let response = await fetch(`http://localhost:3000/api/products/${props.id}`,{
            method:"DELETE"
        })
        const result = await response.json()
        if (result.success){
            alert('The product is deleted')
            router.push("/productslist")
        }
    }
    return(
        <button onClick={deleteProduct}>
            Delete
        </button>
    )

}
export default DeleteProduct;