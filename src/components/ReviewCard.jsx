import React from 'react';

function ReviewCard({
    quote,
    name,
    worksat,
    img,
    tagline
}) {
    return <>
        <figure class="flex flex-col m-2 justify-center  p-4 text-center  shadow-md shadow-secondary rounded-md md:p-4 dark:bg-gray-800 dark:border-gray-700">
            <blockquote class="mx-auto text-gray-500 dark:text-gray-400">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{tagline}</h3>
                <p class="my-4 text-sm leading-loose text-left ">{quote}</p>
            </blockquote>
            <div class=" font-medium dark:text-white text-left">
                <div>{name}</div>
                <div class="text-sm font-light text-gray-500 dark:text-gray-400">{worksat}</div>
            </div>
        </figure>
    </>
}

export default ReviewCard;
