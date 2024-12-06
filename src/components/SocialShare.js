import React, { useEffect } from 'react';
import './socialShare.scss';
import fb from '../assets/facebook.svg';
import X from '../assets/twitter.svg';

const SocialShare = ({ url, title, description, images }) => {
  useEffect(() => {
    // Инициализиране на Facebook SDK
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: '1181098826301746', // Заменете с вашия Facebook App ID
        xfbml: true,
        version: 'v12.0',
      });
    };

    // Зареждане на Facebook SDK
    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');
  }, []);

  const shareOnFacebook = () => {
    window.FB.ui(
      {
        method: 'share',
        href: url,
        quote: `${images}-${title} - ${description}`,
      },
      function (response) {
        if (response && !response.error_message) {
          alert('Posting completed.');
        } else {
          alert('Error while posting.');
        }
      }
    );
  };

  const shareOnTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
    window.open(twitterUrl, '_blank');
  };

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(`${url}?title=${title}`)
      .then(() => {
        setTimeout(() => {
          alert('Link copied to clipboard.');
        }, 2000);
      })
      .catch((err) => {
        alert('Failed to copy the link.');
        console.error('Could not copy text: ', err);
      });
  };

  return (
    <div>
      Сподели в:
      <div className="social-icons">
        <div onClick={shareOnFacebook}>
          <img className="facebook" src={fb} alt="facebook" />
        </div>
        <div onClick={shareOnTwitter}>
          <img className="facebook" src={X} alt="X" />
        </div>

        <a href="#" title="twitter" onClick={shareOnTwitter}>
          <i className="fa fa-twitter-square" aria-hidden="true"></i>
        </a>
        <a href="#" title="instagram">
          <i className="fa fa-instagram" aria-hidden="true"></i>
        </a>
        <a href="#" title="youtube">
          <i className="fa fa-youtube-square" aria-hidden="true"></i>
        </a>
        <a href="#" title="linkedin">
          <i className="fa fa-linkedin-square" aria-hidden="true"></i>
        </a>
        <a href="#" title="pinterest">
          <i className="fa fa-pinterest-p" aria-hidden="true"></i>
        </a>
        <a href="#" title="camera">
          <i className="fa fa-camera-retro" aria-hidden="true"></i>
        </a>
      </div>
      <div className="copy-link">
        <button onClick={copyToClipboard}>Copy Link</button>
      </div>
    </div>
  );
};

export default SocialShare;
