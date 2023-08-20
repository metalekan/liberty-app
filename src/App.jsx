import React from 'react'

import { MdKeyboardArrowRight } from 'react-icons/md'
import { AiOutlineShop } from 'react-icons/ai'
import { BiHome, BiEdit } from 'react-icons/bi'
import { GiPodiumWinner } from 'react-icons/gi'
import { RiAppsLine, RiSignalTowerFill } from 'react-icons/ri'
import { PiSuitcaseSimple, PiStackLight, PiUserSquareLight } from 'react-icons/pi'
import { BsCreditCard } from 'react-icons/bs'

import Dashboard from './components/Dashboard'


const App = () => {
  return (
    <div className="md:w-[1620px] md:h-[985px] bg-[#07112D]">
      <div className='w-full h-full flex items-center justify-around md:rounded-[20px]'>
        <header className='md:px-2 md:py-8 md:w-[245px] h-full hidden md:block'>
          <div className="flex flex-col my-2">
            <h1 className='text-[32px] text-[#ffff] font-clash font-[700]'>Paybox</h1>
            <p className='text-[12px] text-[#ffff] font-sora font-[400]'>byLibertyPay</p>
          </div>
          <nav className="flex flex-col gap-8 my-[2rem] font-nunito">
            <ul className='grid'>
              <li className='flex items-center gap-2'>
                <BiHome />
                <a href='/'>Home</a>
              </li>
              <li className='flex items-center gap-2 bg-[#192749] rounded-[10px]'>
                <RiAppsLine className='text-[#4870cf]' />
                <a href='/'>Analytics Dashboard</a>
              </li>
            </ul>
            <ul className='grid border-t-2'>
              <li className="flex justify-between items-end">
                <div className='flex items-center gap-2'>
                  <PiSuitcaseSimple />
                  <a href='/'>Personal</a>
                </div>
                <MdKeyboardArrowRight />
              </li>
              <li className="flex justify-between items-end">
                <div className='flex items-center gap-2'>
                  <AiOutlineShop />
                  <a href='/'>Sale Hub</a>
                </div>
                <MdKeyboardArrowRight />
              </li>

              <li className='flex justify-between items-end'>
                <div className="flex items-center gap-2">
                  <PiStackLight />
                  <a href='/'>Talent management</a>
                </div>

                <MdKeyboardArrowRight />
              </li>
              <li className='flex justify-between items-end'>
                <div className="flex items-center gap-2">
                  <BiEdit />
                  <a href='/'>Spend management</a>
                </div>

                <MdKeyboardArrowRight />
              </li>
              <li className='flex items-center gap-2'>
                <BsCreditCard />
                <a href='/'>Cards</a>
              </li>
            </ul>
            <ul className='grid'>
              <li className='flex items-center gap-2'>
                <GiPodiumWinner />
                <a href='/'>Leaderboard</a>
              </li>
              <li className='flex items-center gap-2'>
                <PiUserSquareLight />
                <a href='/'>Profile & Settings</a>
              </li>
              <li className='flex justify-between items-end'>
                <div className="flex items-center gap-2">
                  <RiSignalTowerFill />
                  <a href='/'>Bank performance</a>
                </div>

                <MdKeyboardArrowRight />
              </li>
            </ul>
          </nav>
        </header>
        <Dashboard />
      </div>

    </div>
  )
}

export default App