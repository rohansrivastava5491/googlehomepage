import menu from "./assets/menu.png";
import leaf from "./assets/leaf.png";
import mic from "./assets/mic.png";
import profile from "./assets/profile.png";
import logo from "./assets/logo.png";
import search from "./assets/search.png";
import "./index.css";
const App = () => {
  return (
    <>
      <div>
        <header>
          <nav>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Store</a>
              </li>
            </ul>
            <ul>
              <li>
                <a className="small-text" href="#">
                  Gmail
                </a>
              </li>
              <li>
                <a className="small-text" href="#">
                  Images
                </a>
              </li>
              <li className="menu-bg">
                <img className="menu-button" src={menu} alt="menu button" />
              </li>
              <li>
                <img className="profile-pic" src={profile} alt="profile pic" />
              </li>
            </ul>
          </nav>
        </header>

        <section className="search-wrapper">
          <img className="logo" src={logo} alt="logo" />
          <form>
            <img className="search" src={search} />
            <img className="mic" src={mic} />
            <input type="text" />
            <div className="buttons">
              <button type="button">Google Search</button>
              <button type="button">I'm Feeling Lucky</button>
            </div>
          </form>
        </section>

        <footer>
          <div className="panel">
            <p>United Kingdom</p>
          </div>
          <div className="panel">
            <ul>
              <li>
                <a href="#">Advertising</a>
              </li>
              <li>
                <a href="#">Business</a>
              </li>
              <li>
                <a href="#">How Search Works</a>
              </li>
            </ul>
            <div className="carbon">
              <img className="leaf" src={leaf} alt="leaf" />
              <a href="#">Carbon neutral since 2007</a>
            </div>
            <ul className="right">
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Terms</a>
              </li>
              <li>
                <a href="#">Settings</a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  );
};
export default App;
