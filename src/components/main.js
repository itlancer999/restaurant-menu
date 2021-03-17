import React from 'react';
import Header from '../components/header.js';
import Menu from '../components/menu.js';
import Tag from '../components/tag.js';
import '../styles/main.scss';
import '../styles/media-responsive.scss';

const Main = () => {
  return (
    <div className="container">
    <div className="card">
	    <div className="row">

	    	<div className="col-12">
		      <div className="card__content">
		   	  <Header />
		   	  <Menu />
		      </div>
		    </div>

		     
	      </div>
    </div>
    <Tag /> 
    </div>
  )
}

export default Main;