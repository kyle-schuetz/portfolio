import React from 'react'

export default function Banner() {
  return (
    <section className="relative bg-white">
      <div className="relative max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex">
        <div className="max-w-xl text-center sm:text-left">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            👋🏼   I am Kyle Schuetz
          </h1>
          <p className="mt-4 sm:leading-relaxed sm:text-xl italic">
            Software Architect, Engineer, Seeker
          </p>
          <div className="flex flex-wrap justify-left gap-4 mt-8">
            <a
              className="px-8 py-4 font-bold transition bg-pink-400 border-4 border-black rounded-xl focus:outline-none focus:ring shadow-[6px_6px_0_0_#000] hover:shadow-none active:bg-pink-50"
              href="/blog"
            >
              Read More <span aria-hidden="true" className="ml-1.5" role="img">🤔</span>
            </a>
            <a
              className="px-8 py-4 font-bold transition bg-blue-400 border-4 border-black rounded-xl focus:outline-none focus:ring shadow-[6px_6px_0_0_#000] hover:shadow-none active:bg-pink-50"
              href="/blog"
            >
              Contact Me <span aria-hidden="true" className="ml-1.5" role="img">🤔</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
