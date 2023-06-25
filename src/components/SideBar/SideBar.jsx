import styled from 'styled-components';
import photo from '../../Img/photo.jpeg';
import { FaTelegramPlane, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Sidebar = styled.aside`
  padding: 15px;
  background-color: #dbccc1;
  border-radius: 25px;

  & img {
    border: 1px solid #5f4b3e4f;
  }

  & h3 {
    text-align: center;
  }
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

const Socials = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
`;

const LinkBlue = styled.a`
  color: #5f4b3e;
`;

const SideBar = () => {
  return (
    <>
      <Sidebar>
        <img src={photo} alt="self-portrait" width={'100%'} />
        <h3>Contact information</h3>
        <ul>
          <li>
            <LinkBlue href="tel:+380688337238">(068)833-7238</LinkBlue>
          </li>
          <li>
            <LinkBlue href="mailto:doroshenkoandrey@ukr.net">
              doroshenkoandrey@ukr.net
            </LinkBlue>
          </li>
          <li>
            <p style={{ marginTop: 0 }}>
              Zhytomyr, Ukraine <span>&#127482;&#127462;</span>
            </p>
          </li>
        </ul>

        <IconsList>
          <Socials>
            <li>
              <LinkBlue
                href="https://t.me/Andrii_Doroshenko"
                target="blank"
                title="Telegram"
              >
                <FaTelegramPlane fontSize={'30'} />
              </LinkBlue>
            </li>
            <li>
              <LinkBlue
                href="https://www.linkedin.com/in/doroshenko-andrii/"
                target="blank"
                title="Linkeding"
              >
                <FaLinkedinIn fontSize={'30'} />
              </LinkBlue>
            </li>
            <li>
              <LinkBlue
                href="https://github.com/andrii-doroshenko"
                target="blank"
                title="GitHub"
              >
                <FaGithub fontSize={'30'} />
              </LinkBlue>
            </li>
          </Socials>
        </IconsList>

        <div>
          <h3>Tech skills</h3>
          <ul>
            <li>JsvaScript</li>
            <li>HTML5/CSS3/SASS</li>
            <li>React</li>
            <li>Responsive/Adaptive design</li>
            <li>Git</li>
            <li>Rest API</li>
            <li>Redux</li>
            <li>Webpack</li>
            <li>Node.js</li>
            <li>Handlebars</li>
            <li>MongoDB</li>
            <li>Parcel</li>
          </ul>
        </div>

        <div>
          <h3>Soft skills</h3>
          <ul>
            <li>Critical thinking</li>
            <li>Teamwork</li>
            <li>Creativity</li>
            <li>Perseverance and self-learning</li>
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
