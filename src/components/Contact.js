import React from 'react';
import './Contact.css'

function Contact() {
    return (
        <div className='Contact'>
            <img className='avatar' src='https://randomuser.me/api/portraits/women/61.jpg' />
            <div>
                <h4 class='name'>Naomi Knight</h4>
                <div class='status'>
                    <elemnt className='status-online'></elemnt>
                    <p className='status-text'>Online</p>
                </div>
            </div>
        </div>
    );
}

export default Contact;