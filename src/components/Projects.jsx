import React from 'react';
import { WorkShow } from '../static/Index';
import C from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Carousel= C.default ? C.default : C;


const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Projects = () => {
    return <div id='project' className='text-primary-text flex justify-center flex-col'>
        <div className="flex flex-col pl-3">
            <span className="text-2xl font-semibold   capitalize">
                Some of my works.
            </span>
            <span className="   pt-3 ">
                Check out some of the works I made at freelancing, company projects and even case studies.
            </span>
        </div>
        <Carousel responsive={responsive}>
            {
                WorkShow?.works?.map((work) => {
                    return (
                        <ProjectCard
                            description={work.project_description}
                            goto={work.linkto}
                            title={work.name}
                            img={work.image}
                        />
                    )
                })
            }
        </Carousel>
    </div >
};

export default Projects;
function ProjectCard({
    img,
    title,
    description,
    goto
}) {
    return (
        <a
            class="block text-primary-text overflow-hidden  shadow-secondary rounded-lg  max-w-sm m-2 shadow-md"
            href={goto}
        >
            <img
                class="object-contain w-full h-56"
                src={img ? img : "https://imgur.com/mZG8KLh.jpeg"}
                alt=""
            />
            <div class="p-6">
                <h5 class="text-xl font-bold">
                    {title}
                </h5>
                <p class="mt-2 text-sm text-gray-500">
                    {description}
                </p>
                <a
                    class="inline-block pb-1 mt-4 font-medium text-blue-600 border-b border-blue-500 "
                    href={goto}
                >
                    Learn More !
                </a>
            </div>
        </a>
    )
}