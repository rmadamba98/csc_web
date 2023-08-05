import React from 'react'
import './footer.css'
import topr from '../../assets/toprated.png';

const FootLink = () => (
    <>
        <p><a href="cont">Contact Us</a></p>
        <p><a href="suped">SupportEd</a></p>
        <p><a href="cons">Consulting</a></p>
    </>
)

function donate() {
    alert('Donate Slay');
}

const Footer = () => {
    return (
        <div className='csc__footer'>
            <div className='csc__footer-container'>
                <div className='csc__footer-container-links'>
                    <FootLink />
                    <button onClick={donate}>Donate</button>
                </div>
                <div className='csc__footer-container-email'>
                    <h1>Get our newsletter to stay up to date</h1>
                    <div className='csc__footer-container-email-submit'>
                    </div>
                    <button onClick={donate}>Submit</button>
                </div>
                <div className='csc__footer-container-seal'>
                    <img src={topr} alt="toprated"></img>
                    
                </div>
            </div>
        </div>
    );
}
 
export default Footer;