import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='header-div'>
            <div className='sub-header-div'>
                <img 
                    src={require('../../assets/imgs/PhoneIcon.png')} 
                    className='icon-image'
                />
                <label className='description-label'>Call us: (402 733-5200</label>
            </div>
            <div className='sub-header-div'>
                <img
                    src={require('../../assets/imgs/EmailIcon.png')}
                    className='icon-image'
                />
                <label className='description-label'>Email us: info@vrana.com</label>
            </div>
        </div>
    );
};

export default Header;