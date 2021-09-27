import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationPayangar = () => {
    return (
        <div className='navigation-payangar'>
            <NavLink to='/' exact className='hover'
            activeClassName='switch-active'>
                <span className='icon-chevron_left'></span>
            </NavLink>
        </div>
    );
};

export default NavigationPayangar;