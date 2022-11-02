import React from 'react'
import C from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Blogs } from '../static/Index'
const Carousel = C.default ? C.default : C;

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

function Articles() {
    return (
        <div id='articles' className='text-primary-text flex justify-center flex-col'>
            <div className="flex flex-col pl-3">
                <span className="text-2xl font-semibold   capitalize">
                    Some Interesting Blogs.
                </span>
                <span className="   pt-3 ">
                    Check out some of the blogs published in different sites that is related to my projects, and some of my own articles too!
                </span>

            </div>
            <Carousel responsive={responsive}>
                {
                    Blogs?.map((blog) => {
                        return (
                            <Articlecard
                                content={blog.content}
                                link={blog.linkto}
                                title={blog.name}
                                image={blog.image}
                            />
                        )
                    })
                }
            </Carousel>
        </div >
    )
}

function Articlecard({ link, image, content, title }) {
    return (
        <a
            class="block text-primary-text overflow-hidden  shadow-secondary rounded-lg  max-w-sm m-2 shadow-md"
            href={link}
        >
            <img
                class="object-contain w-full h-56"
                src={image ? image : "https://imgur.com/mZG8KLh.jpeg"}
                alt=""
            />
            <div class="p-6">
                <h5 class="text-xl font-bold">
                    {title}
                </h5>
                <p class="mt-2 text-sm text-gray-500">
                    {content}
                </p>
                <a
                    class="inline-block pb-1 mt-4 font-medium text-blue-600 border-b border-blue-500 "
                    href={link}
                >
                    Learn More !
                </a>
            </div>
        </a>
    )
}

export default Articles