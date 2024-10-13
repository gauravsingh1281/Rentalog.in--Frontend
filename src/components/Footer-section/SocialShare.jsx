import React from 'react';
import './SocialShare.css';

const SocialShare = () => {
  return (
    <div className="Sharing">
      <div className="circle-share">
        <i className="fas fa-share-alt"></i>
      </div>
      <ul>
        <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a></li>
        <li><a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a></li>
        <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-x-twitter"></i></a></li>
        <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
      </ul>
    </div>
  );
};

export default SocialShare;