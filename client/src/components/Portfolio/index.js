import React from 'react';
import Project from '../Project'

/*import images*/
import emergencyApp from '../../assets/images/emc-pic.png'
import urlRegex from '../../assets/images/url-regex.png'
import holiday from '../../assets/images/holiday-screenshot.png'
import ticket from '../../assets/images/ticket-desk.png'
import backend from '../../assets/images/ecommerce-pexels-luis-gomes-546819.jpg'
import readme from '../../assets/images/readme-fast.png'




function Portfolio(props) {
    const myWork = [
        {title: "Emergency Center", description:"Local disaster or emergency reporting - to connect people with important disaster updates in their area.", image: emergencyApp, repo: "https://github.com/robyng/Emergency-Center", deployed: "https://polar-shelf-64274.herokuapp.com/"},
        {title: "URL Regex", description:"A URL Regex explained with examples to help understand how Regular Expressions work.", image: urlRegex, repo: "https://gist.github.com/robyng/e4ff8614395719e0a3547be58e5a9c43", deployed: "https://gist.github.com/robyng/e4ff8614395719e0a3547be58e5a9c43"},
        {title: "Holiday History Map", description:"Youtube API query with Holiday api query to learn about other countries public holidays.", image: holiday, repo: "https://github.com/robyng/Holiday-History-Map", deployed: "https://sterlingw56.github.io/Holiday-History-Map/"},
        {title: "The Help Desk For Property Managers", description:"A ticketing service for property managers and their tenants.", image: ticket, repo: "https://github.com/robyng/the-help-desk", deployed: "https://rg-the-help-desk.herokuapp.com/"},
        {title: "Online Store Template (Backend)", description:"Using express server and MySQL database to organize a typical online store with products, categories, and tags.", image: backend, repo: "https://github.com/robyng/efficient-branch-manager", deployed: "https://github.com/robyng/efficient-branch-manager"},
        {title: "Generate Readme Fast! (Node App)", description:"This node application helps you write README.md files FASTER. Uses inquirer and fs.writeFile to output your answers.", image: readme, repo: "https://github.com/robyng/generate-readme-fast", deployed: "https://github.com/robyng/generate-readme-fast"}
    ]


    return(
        <section className='container '>
           <div className='row justify-content-around'>
           {myWork.map((project, i) => (
<Project project={project}></Project>
           ))}
           </div>


        </section>
    )
}

export default Portfolio;