import styled from 'styled-components';
import photo from '../../Img/photo.jpeg';
import { FaTelegramPlane, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Sidebar = styled.aside`
  background-color: lightgray;
`;

const IconsList = styled.ul`
  list-style-type: none;
  padding: 0;

  & > li {
    display: inline-block;
    width: 30px;
    height: 30px;
  }

  & > li:not(:last-child) {
    margin-right: 10px;
  }
`;

const LinkBlue = styled.a`
  color: blue;
`;

const SideBar = () => {
  return (
    <>
      <Sidebar>
        <img src={photo} alt="self-portrait" width={'450'} height={'450'} />
        <h3>Contact information</h3>
        <ul>
          <li>
            <a href="tel:+380688337238">(068)833-7238</a>
          </li>
          <li>
            <a href="mailto:doroshenkoandrey@ukr.net">
              doroshenkoandrey@ukr.net
            </a>
          </li>
          <li>
            <p>
              Zhytomyr, Ukraine <span>&#127482;&#127462;</span>
            </p>
          </li>
        </ul>

        <IconsList>
          <li>
            <LinkBlue href="https://t.me/Andrii_Doroshenko" target="blank">
              <FaTelegramPlane size={'auto'} />
            </LinkBlue>
          </li>
          <li>
            <LinkBlue
              href="https://www.linkedin.com/in/doroshenko-andrii/"
              target="blank"
            >
              <FaLinkedinIn size={'auto'} />
            </LinkBlue>
          </li>
          <li>
            <LinkBlue
              href="https://github.com/andrii-doroshenko"
              target="blank"
            >
              <FaGithub size={'auto'} />
            </LinkBlue>
          </li>
        </IconsList>

        <div>
          <h3>Tech skills</h3>
          <ul>
            <li>HTML5/CSS3/SASS</li>
            <li>Responsive/Adaptive design</li>
            <li>Git</li>
            <li>JsvaScript</li>
            <li>React</li>
            <li>Redux</li>
            <li>Rest API</li>
            <li>Handlebars</li>
            <li>Webpack</li>
            <li>Parcel</li>
            <li>Node.js</li>
            <li>MongoDB</li>
          </ul>
        </div>

        <div>
          <h3>Soft skills</h3>
          <ul>
            <li>Attention to details</li>
            <li>Teamwork</li>
            <li>Creativity</li>
            <li>Good communication</li>
          </ul>
        </div>

        <div>
          <h3>Languages</h3>
          <ul>
            <li>English (Upper-Intermediate)</li>
            <li>Ukrainian (Native)</li>
            <li>Russian (Second Native)</li>
          </ul>
        </div>
      </Sidebar>
    </>
  );
};

export default SideBar;
