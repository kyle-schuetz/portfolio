import React from 'react'

export default function Nav() {
  return (
    <nav className="flex justify-end text-sm font-medium border-b border-gray-100">
        <a href="" className="p-4 -mb-px border-b border-current text-cyan-500">
            Kyle Schuetz
        </a>

        <a href="" className="p-4 -mb-px border-b border-transparent hover:text-cyan-500">
            Blog
        </a>

        <a href="" className="p-4 -mb-px border-b border-transparent hover:text-cyan-500">
            Tags
        </a>

        <a href="" className="p-4 -mb-px border-b border-transparent hover:text-cyan-500">
            About
        </a>
        
        <a href="" className="p-4 -mb-px border-b border-transparent hover:text-cyan-500">
            Projects
        </a>

        <a href="" className="p-4 -mb-px border-b border-transparent hover:text-cyan-500">
            Contact
        </a>
    </nav>
  )
}
