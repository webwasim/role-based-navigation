import React from 'react';
import {  isAllowed } from './auth';

import Header from './Layout/header';
import Footer from './Layout/footer';
import Headline from './Layout/headline';
import FeedbackForm from './Components/feedbackForm';

const Home = (props) => {
    return (  
        <div className="app">
        <Header user={props.user} theme={props.theme}></Header>
        <main>
          {isAllowed(props.user, ['can_view_headline']) && <Headline></Headline>}
          <FeedbackForm></FeedbackForm>
        </main>
        <Footer></Footer>
      </div>
    );
}
 
export default Home;