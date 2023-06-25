import About from './About/About';
import SideBar from './SideBar/SideBar';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

export const App = () => {
  return (
    <div>
      <Container>
        <About />
        <SideBar />
      </Container>
    </div>
  );
};

// <!DOCTYPE html>
// <html lang="en">
//     <head>
//         <meta charset="UTF-8" />
//         <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <title>Resume</title>

//         <!-- style css -->
//         <link rel="stylesheet" href="css/style.css" />
//     </head>

//     <body>
//         <!-- Main -->
//         <main class="main">
//             <!-- Main content -->
//             <div class="main__content">
//                 <!-- about user -->
//                 <div class="about">
//                     <h2 class="about__work-type">Front-End Developer</h2>
//                     <h1 class="about__header">Andrii Doroshenko</h1>
//                     <p class="about__description description">
//                         Passionate junior front-end developer with a desire to learn and grow in a collaborative team environment. Skilled in HTML, CSS, and
//                         JavaScript. Excels at creating pixel-perfect designs and working with cross-browser compatibility issues.
//                     </p>
//                 </div>
//                 <!-- projects -->
//                 <div class="projects">
//                     <h3 class="title main__content-title">Projects</h3>
//                     <ol class="list__padding">
//                         <li class="projects__item">
//                             <span class="projects__item--content description">
//                                 <a class="projects__item--link" href="https://site-evclid.netlify.app"
//                                     >Evclid..........................................................................<b>[ </b>HTML5/CSS3/JS<b> ]</b></a
//                                 >
//                             </span>
//                         </li>
//                         <li class="projects__item">
//                             <span class="projects__item--content description">
//                                 <a class="projects__item--link" href="https://simple-site-bootstrap.netlify.app"
//                                     >Bootstrap.................................................................<b>[ </b>HTML5/CSS3/Bootstrap<b> ]</b></a
//                                 >
//                             </span>
//                         </li>
//                         <li class="projects__item">
//                             <span class="projects__item--content description">
//                                 <a class="projects__item--link" href="https://lagoona1.netlify.app"
//                                     >Lagoona....................................................................<b>[ </b>HTML5/CSS3<b> ]</b></a
//                                 >
//                             </span>
//                         </li>
//                         <li class="projects__item">
//                             <span class="projects__item--content description">
//                                 <a class="projects__item--link" href="https://lionic1.netlify.app"
//                                     >lionic............................................................................<b>[ </b>HTML5/CSS3<b> ]</b></a
//                                 >
//                             </span>
//                         </li>
//                     </ol>
//                 </div>
//                 <!-- work -->
//                 <div class="work">
//                     <h3 class="title main__content-title">Work Experience</h3>
//                     <!-- company 1 -->
//                     <div class="work__col">
//                         <h4 class="content__title">Architect <span class="content__title--color">"Arch-Studio"</span></h4>
//                         <p class="period">August 2015 - May 2020 <b class="brackets">|</b> Ukrain</p>
//                         <ul class="list__padding description">
//                             <li>Was responsible for the design of the object under construction from the outside and from the inside;</li>
//                             <li>Designed residential, public and industrial buildings;</li>
//                             <li>Working in team on new projects and solving problems in the course of one implementation period.</li>
//                             <li>Continuous improvement of my skills in the course of work.</li>
//                         </ul>
//                     </div>

//                     <!-- company 2 -->
//                     <!-- <div class="work__col">
//                         <h4 class="content__title">Manager <span class="content__title--color">Roga & Kopyta New</span></h4>
//                         <p class="period">March 2015 - October 2018 <b class="brackets">|</b> Country</p>
//                         <ul class="list__padding description">
//                             <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod labore et dolore magna aliqua.</li>
//                             <li>Quis ipsum suspendisse ultrices gravida.</li>
//                             <li>Risus commodo viverra maecenas.</li>
//                         </ul>
//                     </div> -->

//                     <!-- company 3 -->
//                     <!-- <div class="work__col">
//                         <h4 class="content__title">Manager <span class="content__title--color">Roga & Kopyta LLC</span></h4>
//                         <p class="period">June 2014 - February 2015 <b class="brackets">|</b> Country</p>
//                         <ul class="list__padding description">
//                             <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
//                             <li>Quis ipsum suspendisse ultrices gravida.</li>
//                             <li>Risus commodo viverra maecenas.</li>
//                         </ul>
//                     </div> -->
//                 </div>
//                 <!-- Education -->
//                 <div class="education">
//                     <h3 class="title main__content-title">Education</h3>
//                     <div class="education__places">
//                         <h4 class="content__title content__title--color">Zhytomyr City Lyceum at the Institute of Engineering and Technology</h4>
//                         <p class="education__description">Foreign philology</p>
//                         <p class="period">September 2000 - June 2003 <b class="brackets">|</b> Ukraine</p>
//                     </div>
//                     <div class="education__places">
//                         <h4 class="content__title content__title--color">ZHYTOMYR TECHNOLOGICAL COLLEGE</h4>
//                         <p class="education__description">Junior specialist - artist - designer</p>
//                         <p class="period">September 2003 - June 2008 <b class="brackets">|</b> Ukraine</p>
//                     </div>
//                     <div class="education__places">
//                         <h4 class="content__title content__title--color">Zhytomyr Institute of Culture and Arts of the National Academy Culture and Arts</h4>
//                         <p class="education__description">The interior design</p>
//                         <p class="period">September 2009 - June 2011 <b class="brackets">|</b> Ukraine</p>
//                     </div>
//                 </div>
//             </div>

//             <!-- Sidebar -->
//             <aside class="sidebar">
//                 <img src="img/Andrii.jpg" alt="User photo" class="sidebar__photo" />
//                 <!-- Contacts -->
//                 <div class="sidebar__col">
//                     <h3 class="title">Contacts</h3>
//                     <div class="contacts">
//                         <p class="contacts__row">
//                             <span class="contacts__phone-label">C:</span>
//                             <a href="tel:+380688337238" class="contacts__link"> +3 8 068 833 72 38 </a>
//                         </p>
//                         <p class="contacts__row">
//                             <span class="contacts__phone-label">E:</span>
//                             <a href="mailto:doroshenkoandrey@ukr.net" class="contacts__link">doroshenkoandrey@ukr.net</a>
//                         </p>
//                     </div>
//                 </div>
//                 <!-- Tech skills -->
//                 <div class="sidebar__col">
//                     <h3 class="title">Tech Skills</h3>
//                     <ul class="skills__list">
//                         <li class="skills__item dots__color">
//                             <span class="skills__content">HTML5</span>
//                         </li>
//                         <li class="skills__item dots__color">
//                             <span class="skills__content">CSS3</span>
//                         </li>
//                         <li class="skills__item dots__color">
//                             <span class="skills__content">GIT</span>
//                         </li>
//                         <!-- <li class="skills__item dots__color">
//                             <span class="skills__content">WebPack</span>
//                         </li> -->
//                         <li class="skills__item dots__color">
//                             <span class="skills__content">JavaScript</span>
//                         </li>
//                         <li class="skills__item dots__color">
//                             <span class="skills__content">Bootstrap</span>
//                         </li>
//                         <!-- <li class="skills__item dots__color">
//                             <span class="skills__content">React.js</span>
//                         </li>
//                         <li class="skills__item dots__color">
//                             <span class="skills__content">Node.js</span>
//                         </li> -->
//                     </ul>
//                 </div>
//                 <!-- Soft skills -->
//                 <div class="sidebar__col">
//                     <h3 class="title">Soft Skills</h3>
//                     <ul class="skills__list">
//                         <li class="skills__item dots__color">
//                             <span class="skills__content">Scrum</span>
//                         </li>
//                         <li class="skills__item dots__color">
//                             <span class="skills__content">Agile</span>
//                         </li>
//                         <li class="skills__item dots__color">
//                             <span class="skills__content">GTD</span>
//                         </li>
//                         <li class="skills__item dots__color">
//                             <span class="skills__content">Teamwork</span>
//                         </li>
//                     </ul>
//                 </div>
//             </aside>
//         </main>
//     </body>
// </html>
