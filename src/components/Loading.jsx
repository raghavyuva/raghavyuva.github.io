import React from 'react'
import "../static/load.css"
function Loading() {
    return (
        <div className='flex justify-center items-center h-screen bg-primary-background'>
            <div className='h-32 w-32 orbit-spinner'>
                <div class="orbit"></div>
                <div class="orbit"></div>
                <div class="orbit"></div>
            </div>
        </div>
    )
}

export default Loading