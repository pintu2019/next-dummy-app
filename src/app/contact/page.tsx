"use client";
import { usePathname } from "next/navigation";

const Contact = () =>{
    const pathName = usePathname();
    console.log("Current path:", pathName);
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-24">
            <h1>This is the contact page</h1>
        </div>
    )
}
export default Contact;