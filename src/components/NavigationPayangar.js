import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationPayangar = () => {
    return (
        <div className='navigation-payangar'>
            <NavLink to='/' exact className='hover'
            activeClassName='switch-active'>
                <div id='leftside'>
                    <span className='icon-chevron_left'></span>
                </div>
            </NavLink>
        </div>
    );
};

export default NavigationPayangar;