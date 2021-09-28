import React, {useState,useEffect} from 'react';
import { HeaderContent } from '../data/data';

const Header = (props) => {
    const [headersContent,t] = useState(HeaderContent);
    const header=headersContent[props.headerNumber];

    useEffect(() => {
        const subtitle=document.getElementById(header.subtitle);
        console.log(subtitle);
        setTimeout(() => {
            subtitle.style.opacity=1;
        }, 3400);
    }, [])

    return (
        <div className='header'>
            <h1>{header.title}</h1>
            <hr id='headerline'/>
            <h2 id={header.subtitle}>{header.subtitle}</h2>
        </div>
    );
};

export default Header;