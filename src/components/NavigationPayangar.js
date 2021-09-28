import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationPayangar = () => {
    return (
        <div className='navigation-payangar'>
            <NavLink to='/' exact className='hover'
            activeClassName='switch-active'>
                <div className='leftside'>
                    <span className='icon-chevron_left'></span>
                </div>
                <div className='leftside'>
                    <span className='circle'></span>
                </div>
            </NavLink>
        </div>
    );
};

export default NavigationPayangar;