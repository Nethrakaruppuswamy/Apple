import React from 'react'
import{
    FaBook,
} from "react-icons/fa" 
 const link = [
    {
        name: "Vite Documentation",
        icon: <FaBook/>,
        href: "#",
 },
 {
        name: "React Guide",
        icon: <FaBook/>,
        href: "#",
 },
 {
        name: "Frontend Trends",
        icon: <FaBook/>,
        href: "#",
 },
 ]

const Aside = () => {
  return (
    <aside className='container bg-gray-400 rounded shadow-md'>
        <h2 className='text-xl font-bold'>Related Links</h2>
        <ul>
            <li>
<a href='' className='flex items-center text-blue-500 gap-1 hover:underline'> <FaBook/> Vite Documentation</a>
            </li>
        </ul>
    </aside>
  )
}

export default Aside;