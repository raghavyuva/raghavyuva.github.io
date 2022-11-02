import React from 'react';
import { Experiencedin } from '../static/Index';

const TimeLine = () => {
    return <div id='Experience'>
        <section className=" text-primary-text shadow-md shadow-secondary">
            <div className="container max-w-5xl px-4 py-12 mx-auto">
                <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-violet-600">
                    <h3 className="text-3xl font-semibold capitalize">Places I have worked for</h3>
                    <span className="text-sm font-bold  capitalize text-primary-text tracking-widest">Since 2019, it's been great journey for me doing my engineering, hustling myself to learn new technologies time again!.</span>

                </div>
                <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                    <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 ">
                        {
                            Experiencedin.variouscompanies.map((company) => (
                                <WorkedAt
                                    company={company.company}
                                    role={company.role}
                                    description={company.workdone}
                                    duration={company.worktime}
                                    logo={company.companylogo}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    </div>;
};

export default TimeLine;

function WorkedAt({
    company,
    duration,
    description,
    logo,
    role
}) {
    return (
        <div className="flex flex-col sm:relative sm:before:absolute  sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-600">
            <div className='flex items-center '>
                <img src={logo} alt=""
                    className='h-6 w-6  mr-2'
                />
                <h3 className="text-xl font-semibold tracking-wide">{company}</h3>
            </div>
            <p className='capitalize '>
                {role}
            </p>
            <time className="text-xs tracking-wide uppercase ">{duration}</time>
            {
                description?.map((ele) => (
                    <li>
                        {ele}
                    </li>
                ))
            }
        </div>
    )
}