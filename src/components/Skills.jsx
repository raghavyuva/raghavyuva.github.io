import React, { useState } from "react";
import { RiArrowRightUpLine } from "react-icons/ri";
import { ProfileDescribe, skills, skillset } from "../static/Index";

import L from "lottie-react";
import coffee from "../static/coffee.json";

const Lottie= L.default ? L.default : L;

function RightHero() {
    const { role_description, skill_header, role_question, drinks } =
        ProfileDescribe;
    const [open, setopen] = useState(false);
    return (
        <div id="skills" class=" flex flex-col-reverse shadow-md shadow-secondary text-primary-text sm:flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
            <div class="w-full">
                <div class="lg:max-w-lg">
                    <span className="font-extrabold font-mono tracking-widest capitalize">
                        {role_question}
                    </span>
                    <h1 class="text-2xl font-medium tracking-wide text-gray-800 dark:text-white lg:text-4xl">{skill_header}
                        <div className="text-primary group">
                            <span>{drinks}</span>
                            <div className="  flex-col  hidden mt-2 group-hover:flex">
                                <span className="text-sm">
                                    i don't drink either of them hehe!
                                </span>
                            </div>
                        </div>
                    </h1>
                    <p class="mt-2 text-gray-600 dark:text-gray-300">{role_description}</p>
                    <div class="grid grid-cols-2 gap-6 mt-8 sm:grid-cols-3">
                        {
                            skills?.map((ele) => (
                                <SkillCard
                                    Logo={ele.icon}
                                    skillname={ele.name}
                                />
                            ))
                        }
                    </div>
                    <div className="flex flex-row items-center cursor-pointer mt-6">
                        <button className="flex" onClick={() => setopen(!open)}>
                            <span className="text-primary-text pr-2 capitalize">
                                see my full arsenal
                            </span>
                            <RiArrowRightUpLine size={25} className="text-primary-text" />
                        </button>
                        {open && <ModalSkill open={open} setopen={setopen} />}
                    </div>
                </div>
            </div >
            <div class="flex items-center justify-center w-full sm:h-96 ">
                <Lottie animationData={coffee} loop={true} />
            </div>
        </div >
    );
}

export default RightHero;


function SkillCard({
    skillname,
    Logo
}) {
    return (
        <div class="flex items-center text-gray-800 -px-3 dark:text-gray-200">
            {Logo &&
                <Logo size={25} className='text-primary-text' />
            }
            <span class="mx-3">{skillname}</span>
        </div>
    )
}

function ModalSkill({ setopen, open }) {
    return (
        <div
            class="fixed z-10 inset-0 overflow-y-auto "
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
        >
            <div class="flex items-end  justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div
                    class="fixed inset-0  bg-opacity-75 transition-opacity"
                    aria-hidden="true"
                ></div>

                <span
                    class="hidden sm:inline-block sm:align-middle sm:h-screen"
                    aria-hidden="true"
                >
                    &#8203;
                </span>

                <div class="inline-block align-bottom bg-primary-background text-primary-text rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    <div class="bg-black  pt-5 pb-4 sm:p-6 sm:pb-4">
                        <button
                            type="button"
                            class="text-red-500"
                            onClick={() => setopen(!open)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                        <div class="mt-3 md:grid-cols-3 grid gap-0 grid-cols-2 ">
                            {skillset.map((skill) => {
                                return (
                                    <div className=" flex-row    items-center flex gap-1 p-2">
                                        {skill.icon && <skill.icon className="text-primary-text" />}
                                        <span className="text-lg text-primary-text">{skill.name}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

