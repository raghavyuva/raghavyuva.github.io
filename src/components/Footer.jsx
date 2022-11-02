import React from 'react';
import { socialnames } from '../static/Index';

const Footer = () => {
    return <div>
        <footer className="px-4 divide-y ">
            <div className="container flex flex-col justify-between ">
            </div>
            <div className="flex items-center justify-around text-sm text-center text-primary-text">© 2022 Raghavyuva. All rights reserved.
                <div className="flex justify-end">
                    {
                        socialnames?.map((social) => (
                            <FootCard Icon={social.icon}
                                goto={social.linkto}
                            />
                        ))
                    }
                </div>
            </div>
        </footer>
    </div>;
};

export default Footer;

function FootCard({
    Icon,
    goto
}) {
    return (
        <a  href={goto} className="flex items-center p-1">
            <Icon size={25} className='text-primary-text ' />
        </a>
    )
}