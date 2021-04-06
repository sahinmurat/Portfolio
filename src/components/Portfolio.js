import React from "react";
import boutuque from "../images/boutuque.png";
import reactshare from "../images/reactshare.png";
import jobsearch from "../images/jobsearch.png";
import sahinblog from "../images/sahinblog.png";
import facebook from "../images/facebook.png";
import linkedin from "../images/linkedin.png";
import todo from "../images/todo.png";
import recipe from "../images/recipe.png";
// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";



const Pofrfolio = () => {

  // Sahin Clothing
  const openPopupboxBoutuque = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={boutuque} alt="Sahin Boutuque Project..." />
        <p></p>
        <div className='links'>
          <b className='demo'>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://class-ecommerce.herokuapp.com/", "_blank")}>https://class-ecommerce.herokuapp.com/</a>
          <br />
          <b className='demo'>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/sahinmurat/e_commerce_with_react")}>https://github.com/sahinmurat/e_commerce_with_react</a>
        </div>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigBoutuque = {
    titleBar: {
      enable: true,
      text: "Sahin Boutuque Project..."
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  // React share 
  const openPopupboxReactShare = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={reactshare} alt="React share " />
        <p></p>
        <div className='links'>
          <b className='demo'>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://react-share.vercel.app/", "_blank")}>https://react-share.vercel.app/</a>
          <br />
          <b className='demo'>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/sahinmurat/React_Share", "_blank")}>https://github.com/sahinmurat/React_Share</a>
        </div>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigReactShare = {
    titleBar: {
      enable: true,
      text: "React share "
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  // Job Search
  const openPopupboxJobSearch = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={jobsearch} alt="Job Search" />
        <p></p>
        <div className='links'>
          <b className='demo'>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://job-search-six.vercel.app/", "_blank")}>https://job-search-six.vercel.app/</a>
          <br />
          <b className='demo'>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/sahinmurat/job-search", "_blank")}>https://github.com/sahinmurat/job-search</a>
        </div>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigJobSearch = {
    titleBar: {
      enable: true,
      text: "Job Search"
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  // Sahin Blog 
  const openPopupboxSahinBlog = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={sahinblog} alt="Sahin Blog " />
        <p></p>
        <div className='links'>
          <b className='demo'>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://sahin-blog.herokuapp.com/", "_blank")}>https://sahin-blog.herokuapp.com/</a>
          <br />
          <b className='demo'>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/sahinmurat/blog_react", "_blank")}>https://github.com/sahinmurat/blog_react</a>
        </div>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigSahinBlog = {
    titleBar: {
      enable: true,
      text: "Sahin Blog "
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  // Facebook  
  const openPopupboxFacebook = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={facebook} alt="Facebook  " />
        <p></p>
        <div className='links'>
          <b className='demo'>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://facebook-two.vercel.app/", "_blank")}>https://facebook-two.vercel.app/</a>
          <br />
          <b className='demo'>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/sahinmurat/Facebook_with_react", "_blank")}>https://github.com/sahinmurat/Facebook_with_react</a>
        </div>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigFacebook = {
    titleBar: {
      enable: true,
      text: "Facebook"
    },
    fadeIn: true,
    fadeInSpeed: 500
  }
  // Linkedin  
  const openPopupboxLinkedin = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={linkedin} alt="Linkedin  " />
        <p></p>
        <div className='links'>
          <b className='demo'>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://linkedin-redux.herokuapp.com/", "_blank")}>https://linkedin-redux.herokuapp.com//</a>
          <br />
          <b className='demo'>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/sahinmurat/Linkedin_with_React", "_blank")}>https://github.com/sahinmurat/Linkedin_with_React</a>
        </div>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigLinkedin = {
    titleBar: {
      enable: true,
      text: "Linkedin"
    },
    fadeIn: true,
    fadeInSpeed: 500
  }
  // Todo  
  const openPopupboxTodo = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={todo} alt="Todo    " />
        <p></p>
        <div className='links'>
          <b className='demo'>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://mytodoplan.herokuapp.com/", "_blank")}>https://mytodoplan.herokuapp.com/</a>
          <br />
          <b className='demo'>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/sahinmurat/React-Todo", "_blank")}>https://github.com/sahinmurat/React-Todo</a>
        </div>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigTodo = {
    titleBar: {
      enable: true,
      text: "Todo  "
    },
    fadeIn: true,
    fadeInSpeed: 500
  }
  // Todo  
  const openPopupboxRecipe = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={recipe} alt="Recipe" />
        <p></p>
        <div className='links'>
          <b className='demo'>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://recipeneed.herokuapp.com/", "_blank")}>https://recipeneed.herokuapp.com/</a>
          <br />
          <b className='demo'>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/sahinmurat/Recipe_App_React/tree/master/recipe_app", "_blank")}>https://github.com/sahinmurat/Recipe_App_React/tree/master/recipe_app</a>
        </div>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigRecipe = {
    titleBar: {
      enable: true,
      text: "Recipe  "
    },
    fadeIn: true,
    fadeInSpeed: 500
  }


  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">portfolio</h1>
        <div className="image-box-wrapper row justify-content-center">
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxBoutuque}>
            <img className="portfolio-image" src={boutuque} alt="Sahin Boutuque Project..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxReactShare}>
            <img className="portfolio-image" src={reactshare} alt="React share " />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxJobSearch}>
            <img className="portfolio-image" src={jobsearch} alt="Job Search" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxSahinBlog}>
            <img className="portfolio-image" src={sahinblog} alt="Sahin Blog" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxFacebook}>
            <img className="portfolio-image" src={facebook} alt="Facebook" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxLinkedin}>
            <img className="portfolio-image" src={linkedin} alt="Linkedin" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxTodo}>
            <img className="portfolio-image" src={todo} alt="Todo" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxRecipe}>
            <img className="portfolio-image" src={recipe} alt="Recipe" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigBoutuque} />
      <PopupboxContainer {...popupboxConfigReactShare} />
      <PopupboxContainer {...popupboxConfigJobSearch} />
      <PopupboxContainer {...popupboxConfigSahinBlog} />
      <PopupboxContainer {...popupboxConfigFacebook} />
      <PopupboxContainer {...popupboxConfigLinkedin} />
      <PopupboxContainer {...popupboxConfigTodo} />
      <PopupboxContainer {...popupboxConfigRecipe} />
    </div>
  )
}

export default Pofrfolio;
