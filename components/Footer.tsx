import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-background  py-8 px-4 mt-10">
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
    <div>
      <h2 className="text-xl font-bold">Mohid Imtiyaz</h2>
      <p className="text-sm ">Crafting modern web solutions with passion and precision since 2016.</p>
    </div>


    <div>
      <h3 className="text-lg font-semibold">Quick Links</h3>
      <ul className="flex flex-col gap-2">
        <li><a href="#about" className="hover:underline">About Me</a></li>
        <li><a href="#projects" className="hover:underline">Projects</a></li>
        <li><a href="#experience" className="hover:underline">Experience</a></li>
        <li><a href="#contact" className="hover:underline">Contact</a></li>
      </ul>
    </div>

    <div>
      <h3 className="text-lg font-semibold">Get in Touch</h3>
      <ul className="space-y-2">
        <li>Email: <a href="mailto:mohidfauji@gmail.com" className="hover:underline">mohidfauji@gmail.com</a></li>
        <li>Location: Islamabad, Pakistan</li>
        <li>Phone: <a href="tel:+923355383369" className="hover:underline">+92 335 5383369</a></li>
      </ul>
    </div>

    <div>
      <h3 className="text-lg font-semibold">Follow Me</h3>
      <ul className="flex gap-4">
        <li><a href="https://github.com/mohidmeer" target="_blank" className="hover:underline">GitHub</a></li>
        <li><a href="https://pk.linkedin.com/in/mohid-imtiaz-a71855111" target="_blank" className="hover:underline">LinkedIn</a></li>
      </ul>
    </div>
  </div>

  <div className="mt-8 text-center">
    <p className="text-xs ">© 2024 Mohid Imtiyaz. All rights reserved.</p>
  </div>
</footer>
  )
}

export default Footer
