import React from 'react';
import logo from '../../../../src/assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div>
            <img className='mx-auto py-3' src={logo} alt="" />
            <p className='text-1xl text-center'>Journalism Without Fear or 
            Favour</p>
            <p className='text-2xl text-center'>{moment().format("dddd, MMMM D, YYYY, ")}</p>
        </div>
    );
};

export default Header;