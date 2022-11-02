import React from 'react';
import { referrals } from '../static/Index';
import ReviewCard from './ReviewCard';
import C from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
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

const Testimonial = () => {
    return (
        <section className="my-8  text-primary-text">
            <div className="container flex flex-col items-center mx-auto mb-12 md:p-10 md:px-12">
                <h1 className="p-4 text-4xl font-semibold leading-none text-center">Aww! These People have endorsed</h1>
                It's immense pleasure for me to be blessed and recommended by these fellow seniors
            </div>
            <Carousel responsive={responsive}>
                {
                    referrals?.map((refer, index) => (
                        <ReviewCard
                            name={refer.name}
                            quote={refer.quote}
                            worksat={refer.worksat}
                            key={index}
                            tagline={refer.tagline}
                        />
                    ))
                }
            </Carousel>
        </section>
    )
};

export default Testimonial;


