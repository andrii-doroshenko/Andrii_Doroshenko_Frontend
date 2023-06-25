import React from 'react';
import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';

const LinkBlue = styled.a`
  color: #5f4b3e;

  & > svg {
    margin-right: 15px;
  }
`;

const AboutList = styled.ul`
  list-style-type: none;
`;

const InnerList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const About = () => {
  return (
    <>
      <AboutList>
        <li>
          <div>
            <h2>Andrii Doroshenko</h2>
            <h1>Junior Frontend Developer</h1>
          </div>
        </li>
        <li>
          <h3>Summary</h3>
          <p>
            "I am a young and ambitious front-end developer with deep knowledge
            of HTML, CSS, and JavaScript. My main focus is on developing user
            interfaces using modern frameworks, including React.
          </p>
          <p>
            During my education and self-practice, I have acquired the necessary
            skills to create efficient and intuitive user interfaces. I am
            dedicated to using advanced development methodologies and best
            practices in my work. I also possess skills in using Git for version
            control and have experience collaborating with development teams,
            which has helped me adapt to working in Agile/Scrum environments.
          </p>
          <p>
            My passion for front-end development combines with my creative
            problem-solving skills. I enjoy finding elegant solutions to complex
            tasks and strive to create user interfaces that are not only
            visually appealing but also user-friendly. I am ready for new
            challenges and continuously develop my skills by staying updated on
            the latest trends in front-end development. I am confident that my
            energy, dedication, and willingness to learn will allow me to
            contribute to your team successfully and achieve common goals."
          </p>
        </li>

        <li>
          <h3>Project experience</h3>
          <InnerList>
            <li>
              <LinkBlue
                href="https://andrii-doroshenko.github.io/goit-react-hw-05-movies/"
                target="blank"
              >
                <FaGithub fontSize={'24'} />
                Search movies <span>[HTML, CSS, JS, Parcel, React]</span>
              </LinkBlue>
              <p>
                Libraries: [Axios, React-icons, Notiflix, Styled-сomponents]
              </p>
              <p>
                This is a web application for searching and viewing information
                about movies. It allows users to search for movies by title,
                view details of selected movies, including actors and reviews.
                It utilizes a movie API to fetch data. The application is
                developed using React and react-router-dom for routing.
              </p>
            </li>

            <li>
              <LinkBlue
                href="https://andrii-doroshenko.github.io/goit-react-hw-04-images/"
                target="blank"
              >
                <FaGithub fontSize={'24'} />
                Image Finder{' '}
                <span>[HTML, CSS, JS, Parcel, React, Pixabay API, Axios]</span>
              </LinkBlue>

              <p>
                The "Image Finder" application is designed for searching and
                viewing images. It allows users to search for images by keywords
                and retrieve results from various sources. Users can browse
                through thumbnails of the found images, open them in full size,
                and obtain additional information such as the size and format of
                the file. The application is built with React and utilizes the
                Pixabay API to fetch image data.
              </p>
            </li>

            <li>
              <LinkBlue
                href="https://andrii-doroshenko.github.io/goit-react-hw-04-phonebook/"
                target="blank"
              >
                <FaGithub fontSize={'24'} />
                Phonebook <span>[HTML, CSS, JS, Parcel, React, Axios]</span>
              </LinkBlue>
              <p>
                The "Phonebook" application is a simple web application that
                allows users to manage their contacts. Users can add new
                contacts with a name and phone number, view a list of contacts,
                delete contacts, and filter them by name. The application is
                built with React and does not require a server or database to
                store contacts. The GitHub repository link provides additional
                information about the project.
              </p>
            </li>
          </InnerList>
        </li>

        <li>
          <h3>Work Experience</h3>
          <InnerList>
            <li>
              <b>Architect planner</b>
              <p>August 2010 - May 2020</p>
              <p>
                In the role of an Architect-Designer, I was involved in
                generating conceptual ideas, developing architectural drawings,
                creating specifications, interacting with clients and project
                teams, overseeing construction quality, and staying abreast of
                new trends and technologies in architecture. Additionally, I had
                the pleasure of working closely with a talented group of
                professionals. Together, we have successfully created numerous
                impressive and inspiring projects. Collaboration, creative
                interaction, and mutual support within the team have allowed us
                to achieve exceptional results and implement magnificent
                architectural solutions.
              </p>
            </li>

            <li>
              <b>Private entrepreneur</b>
              <p>2020 - present day</p>
              <p>
                Since 2020, I have been the owner of a company specializing in
                the sale of stationery products. We strive to provide customers
                with high-quality products, a diverse selection, and convenient
                purchasing conditions. Our team is committed to delivering
                excellent service and assisting customers in making the right
                choices based on their needs and preferences.
              </p>
            </li>

            <li>
              <b>IT School GoIT</b>
              <p>September 2022 - present day </p>
              <span>Position: Fullstack Developer</span>
              <p>
                My experience gained at goIT as a Frontend developer has been
                extremely valuable and has allowed me to grow in this field. I
                have mastered the core languages and tools for web interface
                development, such as HTML, CSS, and JavaScript. I have studied
                modern frameworks and libraries like React and Vue.js, applying
                them to create interactive and responsive user interfaces.
                Additionally, I have gained experience in front-end development
                tools, version control systems, and performance optimization.
                This entire experience has made me a more confident and skilled
                Frontend developer, ready to tackle complex challenges in this
                field.
              </p>
            </li>
          </InnerList>
        </li>

        <li>
          <h3>Education</h3>
          <InnerList>
            <li>
              <b>IT School GoIT</b>
              <p>2022 - present day</p>
              <p>Fullstack Developer</p>
            </li>

            <li>
              <b>Polissya National University</b>
              <p>2022 - 2023</p>
              <p>Master's degree in cybersecurity</p>
            </li>

            <li>
              <b>Center for Postgraduate Education ("Zhytomyr Polytechnic")</b>
              <p>October 2022 - December 2022</p>
              <p>Web design</p>
            </li>
          </InnerList>
        </li>
      </AboutList>
    </>
  );
};

export default About;
