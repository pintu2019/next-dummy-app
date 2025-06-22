"use client";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0)
  return (
       <div className="flex flex-col items-center justify-center min-h-screen p-24">
          <h1 className="text-[24px]">This is my heading</h1>
          <button onClick={()=>setCount(count+1)} className="bg-[red] p-4">click me</button>
          <p>count: {count}</p>
       </div>
  );
}
