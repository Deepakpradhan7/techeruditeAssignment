import React from 'react'
import { AiOutlineAudit } from "react-icons/ai";
import { TbMoneybag } from "react-icons/tb";
import { GrMoney } from "react-icons/gr";
import { FaComputer } from "react-icons/fa6";
import { TbReceiptTax } from "react-icons/tb";
import { VscGraph } from "react-icons/vsc";

const Services = () => {
    const services = [
        { id: 1, logo: AiOutlineAudit, item: 'Audit & Account', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam' },
        { id: 2, logo: TbMoneybag, item: 'Budget & Projections', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam' },
        { id: 3, logo: GrMoney, item: 'Payroll & Bookkeeping', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam' },
        { id: 4, logo: FaComputer, item: 'Software Training & IT', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam' },
        { id: 5, logo: TbReceiptTax, item: 'Tax planning & Returns', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam' },
        { id: 6, logo: VscGraph, item: 'Management Information', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam' },
    ];

    return (
        <div className='my-4 px-6'>
            <h1 className='text-primary font-bold text-[32px]'>Services</h1>
            <div className='my-8 mt-12'>
                <ul className='grid grid-cols-3 grid-flow-row gap-28 text-center'>
                    {services.map((item) => {
                        const IconComponent = item.logo;
                        return (
                            <li key={item.id} className='flex w-[320px] flex-col justify-center items-center gap-4'>
                                <div>
                                    <IconComponent className='text-orange font-normal' size={60} />
                                </div>
                                <h1 className='text-primary font-bold text-lg'>{item.item}</h1>
                                <p className='text-tertiary'>{item.desc}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
}

export default Services;
