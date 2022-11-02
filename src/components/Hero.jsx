import React from 'react';
import L from "lottie-react";
import dev from "../static/devskills.json";

const Lottie= L.default ? L.default : L;

const Hero = () => {
    return <div id='about'>
        <aside
            class="relative  text-primary-text  rounded-xl flex shadow-md shadow-secondary flex-col-reverse sm:flex-row"
        >
            <div class="w-full p-12 text-center lg:w-1/2 sm:p-16 lg:p-24 lg:text-left">
                <div class="max-w-xl mx-auto lg:ml-0">
                    <p class="text-sm font-medium">Ohh you found me?. Howdy! I am</p>

                    <p class="mt-2 text-2xl font-bold text-primary-text sm:text-3xl mb-2">
                        Raghavendra Bhat
                    </p>
                    Or you could call me yuva. That works too . . .
                    <p class='text-primary-text font-mono font-extrabold'>
                        Emerging Software Engineer
                    </p>
                    <p class=" lg:mt-4 lg:block">
                        Hey! How nice of you to look at my personal site, Thank you!
                        I am software Developer that specializes at backend apis, front end integrations,recently found myself working in a startup too.
                    </p>
                    <a
                        href="https://drive.google.com/file/d/1wSLfKVHZx5lsLsSn8BEG5WJKz09bmqa4/view?usp=sharing"
                        class="inline-block px-5 m-2 py-3 mt-8 text-sm font-medium text-primary-text   bg-gradient-to-tl from-primary-background to-primary rounded-tl-2xl rounded-br-2xl  shadow-lg  hover:bg-primary"
                    >
                        Download Resume
                    </a>
                </div>
            </div>
            <div class="sm:flex relative w-full h-full self-center lg:w-1/2 lg:h-auto">
                <Lottie animationData={dev} loop={true} />
            </div>
        </aside>
    </div>
};

export default Hero;
