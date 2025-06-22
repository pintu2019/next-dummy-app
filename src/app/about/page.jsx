"use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
const About = () =>{
    const router = useRouter();
    return (
        <div>
            <h1>About</h1>
            <p>This is the about page of my Next.js app.</p>
            <Link href="/">Go back to Home</Link>
            <br />
            <Link href="/about/aboutcollege">Go to About College</Link>
            <br/>
            <Link href="/about/aboutstudent">Go to About student</Link>

            {/* Other way also is there */}
            <br />
            <button className='rounded text-[#ffff] bg-[blue]' onClick={() => router.push('/about/aboutcollege')}>Go to About College</button>
        </div>
    )
}
export default About;