import './App.css';
import React, { useState } from 'react';
import Header from './components/Header'
import Nav from './components/Nav'
import Footer from './components/Footer'
import About from './components/About'
import Portfolio from './components/Portfolio'
// import Practice from './components/Practice'
import Contact from './components/Contact'
import Resume from './components/Resume'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from '@apollo/client';

const client = new ApolloClient({
  cache: new InMemoryCache(),
});

function App() {

  const pages = [
    "About Me",
    "Portfolio",
    "Contact",
    "Resume"]

  const [currentPage, setCurrentPage] = useState(pages[0]);
  function displayPage() {
    if (currentPage === "About Me") {
      return < About />

    } else if (currentPage === "Portfolio") {
      return <Portfolio />

    } else if (currentPage === "Contact") {
      return <Contact />

    } else if (currentPage === "Resume") {
      return <Resume />
    }
  }
  return (
    <ApolloProvider client={client}>
    <div>



      <Header>
        <Nav
          pages={pages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        ></Nav>
      </Header>
      <div className='jelly'>
      {/* <div className='hello'> */}

          {displayPage()}
          {/* <Practice></Practice> */}

      {/* </div> */}
      </div>
          <Footer></Footer>

    </div>
    </ApolloProvider>
  );
}

export default App;
