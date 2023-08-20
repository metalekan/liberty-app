import React from 'react'

import { hello, hello2, hello3 } from '../constant/data'

import admin from '../assets/pixelart.mag-20230616-0001.jpg'

import DoughnutChart from './DoughnutChart'

import { RiArrowDownSLine } from 'react-icons/ri'
import { GoDotFill } from 'react-icons/go'
import { FaBell } from 'react-icons/fa'
import { MdKeyboardDoubleArrowRight, MdOutlineArrowDropDown } from 'react-icons/md'
import { AiOutlineEye } from 'react-icons/ai'


const Dashboard = () => {
    return (
        <main className='w-screen pb-[12rem] md:pb-0 bg-[#F8F9FB] md:w-[1314px] md:h-[941px] rounded-[0px] md:rounded-[14px] flex flex-col justify-between'>
            <section className="flex justify-between items-center p-4 md:p-0 md:px-[2.75rem] md:h-[111px] md:w-full font-nunito md:rounded-[30px] bg-[#032282] md:bg-[#ffff]">
                <h1 className='text-[#FFFFFF] md:text-[#242424] text-[18px] md:text-[24px] font-[500] md:font-[600]'>Analytics dashboard</h1>
                <button className='text-[#FFFFFF] text-[14px] font-[500] rounded-md bg-[#2D4696] h-[40px] w-[100px] md:hidden'>Menu</button>
                <div className="hidden md:flex items-center gap-4">
                    <div className="relative rounded-full p-2 bg-[#F6FAFF]">
                        <GoDotFill className='absolute text-[red] right-[2px] text-[15px] top-[2px]' />
                        <FaBell className='text-[24px] text-[#032282]' />
                    </div>
                    <div div className="flex items-center gap-2 md:h-[41px] md:w-[182px]">
                        <img src={admin} alt="" className='rounded-full w-[40px] h-[40px]' />
                        <div className="flex flex-col">
                            <span className='text-[14px] text-[#000000] font-[700] leading-5'>John Adesiyan</span>
                            <span className='text-[10px] text-[#818181] font-[400]leading-4'>metadelekan@gmail.com</span>
                        </div>
                        <RiArrowDownSLine className='text-[14px] text-[#032282] self-end' />
                    </div>
                </div>
            </section>
            <section className="flex flex-col gap-3 md:grid md:grid-cols-4 md:gap-4 p-4 md:p-[2.5rem]">
                <div className="h-[151px] md:w-[289px] rounded-[10px] bg-[#032282] p-3">
                    <div className="flex flex-col justify-around h-full w-full">
                        <div className="flex gap-4 md:justify-between">
                            <div className="flex flex-col gap-1">
                                <span className='text-[14px] text-[#CDCDCD] font-[400] font-nunito leading-4'>Wallet balance</span>
                                <span className='text-[20px] text-[#FFFFFF] font-[600] font-sora leading-6'>₦50,000.00</span>
                            </div>
                            <AiOutlineEye className='self-end text-[#FFFFFF] text-[24px] cursor-pointer' />
                        </div>
                        <div className="flex gap-4 md:justify-between text-[#FFFFFF] text-[14px] font-nunito">
                            <button className='h-[40px] w-[112px] rounded-md bg-[#2D4696]'>Add fund</button>
                            <button className='h-[40px] w-[112px] rounded-md bg-[#2D4696]'>Withdraw</button>
                        </div>

                    </div>
                </div>
                {
                    hello.map((item) => (
                        <div className="h-[154px] md:w-[289px] rounded-[10px] bg-[#FFFFFF] p-3" key={item.id}>
                            <div className="h-[80%] flex flex-col justify-between rounded-[10px] bg-[#F6FAFF] p-3">
                                <span className='text-[14px] text-[#4F64A7] font-[400] font-nunito leading-3'>{item.title}</span>
                                <span className='text-[20px] text-[#032282] font-[600] font-sora leading-8'>{item.balance > 0 ? (`₦${item.balance.toLocaleString()}`) : 0}</span>
                            </div>
                            <div className="flex items-center gap-2 pt-1 cursor-pointer">
                                <span className='ps-2 text-[#032282] text-[12px] font-nunito'>View details</span>
                                <MdKeyboardDoubleArrowRight className='text-[24px] text-[#032282]' />
                            </div>
                        </div>
                    ))
                }
                {
                    hello2.map((item) => (
                        <div className="h-[203px] md:w-[289px] rounded-[10px] bg-[#FFFFFF] p-3" key={item.id}>
                            <div className="h-full flex flex-col justify-between rounded-[10px] bg-[#F6FAFF] p-3">
                                <div className="flex items-center justify-between">
                                    <span className='text-[14px] text-[#4F64A7] font-[600] font-nunito leading-4'>{item.title}</span>
                                    <div className="md:h-[30px] md:w-[82px] flex justify-around items-center p-2 bg-[#EAF4FF] rounded-md cursor-pointer">
                                        <span className='text-[12px] text-[#032282] font-[500] font-nunito leading-4'>More</span>
                                        <MdOutlineArrowDropDown className='text-[16px] text-[#032282]' />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 justify-evenly">
                                    <div className="flex flex-col gap-1">
                                        <span className='text-[12px] text-[#4F64A7] font-[400] font-nunito leading-4'>Today</span>
                                        <span className='text-[14px] text-[#032282] font-[600] leading-8 font-sora'>₦{item.today.toLocaleString()}</span>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <span className='text-[12px] text-[#4F64A7] font-[400] font-nunito leading-4'>Yesterday</span>
                                        <span className='text-[14px] text-[#032282] font-[600] font-sora leading-8'>₦{item.yesterday.toLocaleString()}</span>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <span className='text-[12px] text-[#4F64A7] font-[400] font-nunito leading-4'>This week</span>
                                        <span className='text-[14px] text-[#032282] font-[600] font-sora leading-8'>₦{item.thisWeek.toLocaleString()}</span>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <span className='text-[12px] text-[#4F64A7] font-[400] font-nunito leading-4'>Last week</span>
                                        <span className='text-[14px] text-[#032282] font-[600] font-sora leading-8'>₦{item.lastWeek.toLocaleString()}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))
                }
                {
                    hello3.map((item) => (
                        <div className="bxn h-[156px] md:w-[289px] rounded-[10px] bg-[#ffff] p-3" key={item.id}>
                            <div className="h-full flex flex-col justify-between rounded-[10px] bg-[#F6FAFF] p-3">
                                <div className="flex items-center justify-between">
                                    <span className='text-[14px] text-[#4F64A7] font-[600] font-nunito leading-4 flex basis-[60%] flex-wrap'>{item.title}</span>
                                    <div className="md:h-[30px] md:w-[82px] flex justify-around items-center p-2 bg-[#EAF4FF] rounded-md  cursor-pointer">
                                        <span className='text-[12px] text-[#032282] font-[500] font-nunito leading-4'>Today</span>
                                        <MdOutlineArrowDropDown className='text-[16px] text-[#032282]' />
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    {
                                        item.subTitle == 'Successful' ? <div className="flex flex-col">
                                            <div className="flex">
                                                <GoDotFill className='text-[green] text-[15px] self-end' />
                                                <span className='text-[12px] text-[#37474F] font-[400] font-nunito leading-4'>{item.subTitle}</span>
                                            </div>
                                            <span className='text-[14px] text-[#032282] font-[600] font-sora leading-8 self-center'>{item.valueSubTitle}</span>
                                        </div> : <div className="flex flex-col">
                                            <span className='text-[12px] text-[#37474F] font-[400] font-nunito leading-4'>{item.subTitle}</span>
                                            <span className='text-[14px] text-[#032282] font-[600] font-sora leading-8'>₦{item.valueSubTitle.toLocaleString()}</span>
                                        </div>
                                    }
                                    {
                                        item.subTitle2 == 'Failed' ? <div className="flex flex-col">
                                            <div className="flex">
                                                <GoDotFill className='text-[red] text-[15px] self-end' />
                                                <span className='text-[12px] text-[#37474F] font-[400] font-nunito leading-4'>{item.subTitle2}</span>
                                            </div>
                                            <span className='text-[14px] text-[#032282] font-[600] font-sora leading-8 self-center'>{item.valueSubTitle2}</span>
                                        </div> : <div className="flex flex-col">
                                            <span className='text-[12px] text-[#37474F] font-[400] font-nunito leading-4'>{item.subTitle2}</span>
                                            <span className='text-[14px] text-[#032282] font-[600] font-sora leading-8'>₦{item.valueSubTitle2.toLocaleString()}</span>
                                        </div>
                                    }

                                </div>
                            </div>
                        </div>
                    ))
                }
                <div className="col-span-2 p-3 rounded-[10px] md:h-[203px] bg-[#FFFFFF]">
                    <div className="h-full w-full flex flex-col md:flex-row items-center justify-between">
                        <div className="md:basis-[50%] w-full h-full flex flex-col justify-evenly">
                            <span className='text-[16px] text-[#37474F] font-[500] font-nunito leading-4'>Transaction Comparative</span>
                            <div className="flex flex-col divide-y-2 divide-dashed">
                                <div className="flex flex-col">
                                    <div className="flex items-end">
                                        <GoDotFill className='text-[#032282] text-[15px]' />
                                        <span className='text-[12px] text-[#37474F] font-[400] font-nunito leading-4'>Send money</span>
                                    </div>
                                    <span className='text-[14px] text-[#263238] font-[600] font-sora leading-8'>₦105,000,000</span>
                                </div>
                                <div className="flex justify-between pt-2">
                                    <div className="flex flex-col justify-center">
                                        <div className="flex items-end">
                                            <GoDotFill className='text-[#F4BE38] text-[15px]' />
                                            <span className='text-[12px] text-[#37474F] font-[400] font-nunito leading-4'>Cashout</span>
                                        </div>
                                        <span className='text-[14px] text-[#263238] font-[600] font-sora leading-8'>₦12,000,000</span>
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <div className="flex items-end justify-start">
                                            <GoDotFill className='text-[#EDE1FF] text-[15px]' />
                                            <span className='text-[12px] text-[#37474F] font-[400] font-nunito leading-4'>Utility and Bills</span>
                                        </div>
                                        <span className='text-[14px] text-[#263238] font-[600] font-sora leading-8'>₦4,200,000</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="md:basis-[50%] h-full w-full flex md:justify-center ">
                            <DoughnutChart />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Dashboard