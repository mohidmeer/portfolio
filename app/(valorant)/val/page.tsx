import { Settings } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <main className='h-screen relative'>
      <BackGroundVideo />
      <Topbar />
      <MainContent />
    </main>
  )
}

export default page

function MainContent() {
  const menus = ['PLAY', 'PROJECTS', 'Carrer', 'Battlepass', 'Collection', 'Store']
  return (
    <div className='relative 0 h-full flex z-30 '>
      <div className='flex flex-col ml-12  justify-center gap-4'>
        {
          menus.map((menu, index) =>
            <div className='flex items-center gap-8 group' key={index} >
              <span className='size-3 bg-white rotate-45 group-hover:rotate-180 transition-all group-hover:scale-125 group-hover:bg-[#71f3e2] ' />
              <h1 key={index} className='menu_items group-hover:ml-6 transition-all'>
                {menu}
              </h1>
            </div>
          )
        }
      </div>
      <Sidebar />
    </div>

  )
}
function Sidebar() {
  return (
    <aside className='bg-slate-800/80 w-[50px] h-full ml-auto flex flex-col items-center'>
      <ProfileItem />


    </aside>
  )
}

function ProfileItem() {
  return (
    <div className=" flex border-t-2 border-white/50 cursor-pointer relative group">
      <Image src="/assets/profile.jpg" alt="profile" width={40} height={40} />
      <span className='size-2 rounded-full bg-val-primary bottom-1 right-1 absolute' />
      <div className='bg-white/60 w-[300px] absolute  group-hover:right-12 right-[-350px] top-1/2 -translate-y-1/2 rounded-md backdrop-blur-md transition-all'>
      
        <div className='p-3 flex justify-between items-center'>
          <div>
            <div className='flex items-center text-lg font-semibold'>
              <p className='text-black font-bold  text-base'>dady</p>
              <p className='text-black/50 font-bold text-lg'>#3588</p>
            </div>
            <p className='text-black/50'>SERPENT</p>
          </div>
          <div className='size-14 border-val-primary border-2 bg-white  -translate-y-5' >
          </div>
        </div>
        <div className="w-full bg-val-primary px-4 text-sm">
          Available
        </div>
      </div>
    </div>
  )
}



function Topbar() {
  return (
    <div className='p-4 flex relative'>
      <div className='flex ml-auto cursor-pointer hover:opacity-80 transition-opacity z-10'>
        <Settings />
      </div>
    </div>
  )
}

function BackGroundVideo() {
  return (<>
    <div className='absolute inset-0 bg-black/30 z-10' />
    <video
      autoPlay
      muted
      loop
      playsInline
      className="absolute w-full h-full object-cover -z-5  "
    >
      <source src="/val/homepage.webm" type="video/mp4" />
    </video>
  </>
  )
}