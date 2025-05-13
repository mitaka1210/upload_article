import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './read.scss';
import ScrollToTop from './ScrollToTop';
import SocialShare from './SocialShare';
import LikeDislike from './likeDislike';

const Read = () => {
 const navigate = useNavigate();
 const location = useLocation();
 const header = location.state.header;
 const todoId = location.state.todoId;
 const content = location.state.content;
 const url = 'www.google.com';
 const images = location.state.images;
 const articleId = location.state.todoId;

 const goBack = () => {
  navigate(-1); // Връщане назад с 1 стъпка в историята
 };
 return (
  <div className="read">
   <ScrollToTop />
   <div className="read-back-btn">
    <button className="btn btn-outline-secondary" onClick={goBack}>
     back
    </button>
   </div>
   <div>
    <article>
     <div className="article-image-container">
      <img src={images} alt="read" />
     </div>
     <div className="content-container">
      <h3 className="article-title">{header}</h3>
      <p className="article-content">{content}</p>
     </div>
    </article>
    <div>
     <SocialShare url={url} title={header} description={content} images={images} />
     <LikeDislike articleId={articleId} />
    </div>
   </div>
  </div>
 );
};

export default Read;
