import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationHome = () => {
    return (
        <div className='navigation-home'>
            <NavLink to='/payangar' exact className='hover' 
            activeClassName='switch-active'>
                <div className='rightside'>
                    <span className='icon-chevron_right'></span>
                </div>
            </NavLink>
        </div>
    );
};

export default NavigationHome;