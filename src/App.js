import React, { Component } from 'react';
import './App.css';

var lastInfoOpen = "";
class App extends Component {
  componentDidMount() {
    window.scrollTo(0, 1);
  }

  ClickButton(prop) {
    if(lastInfoOpen === prop) {
      document.getElementById(prop).style="animation: height-close 0.3s both;";
      lastInfoOpen = "";
    }else{
      if(lastInfoOpen !== "") {
        document.getElementById(lastInfoOpen).style="animation: height-close 0.3s both;";
      }
      document.getElementById(prop).style = "animation: height-open 0.3s both;";
      lastInfoOpen = prop;
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p className="NameSite">Hi, I'm Riccardo!</p>
          <div className="ButtonList">
            <button className="ButtonHome" onClick={() => this.ClickButton("ABOUT_ME")}>
              ABOUT ME
            </button>
            <div id="ABOUT_ME" className="InfoBox">
              <ul>
                <li>
                  Riccardo Zanotelli (22 years old) 
                </li>
                <li>
                  ⛰️ I live in Trento (Italy)
                </li>
                <li>
                  🖥️ University of Verona
                </li>
                <li>
                  🚒 Volounteer Firefighter in Trentino
                </li>
              </ul>
            </div>
            <button className="ButtonHome" onClick={() => this.ClickButton("SOCIAL")}>
              SOCIAL
            </button>
            <div id="SOCIAL" className="InfoBox">
              <ul>
                <li>
                  <a href="https://www.facebook.com/riccardo.zanotelli"><img className="IconSocial" src="https://raw.githubusercontent.com/github/explore/main/topics/facebook/facebook.png" alt="Facebook" /></a>
                  <a href="https://www.instagram.com/riccardo_zanotelli/"><img className="IconSocial" src="https://raw.githubusercontent.com/github/explore/main/topics/instagram/instagram.png" alt="Instagram" /></a>
                  <a href="mailto:riccardo.zanotelli@gmail.com?subject=Hi%20Riccardo"><img className="IconSocial" src="https://raw.githubusercontent.com/github/explore/main/topics/gmail/gmail.png" alt="Gmail" /></a>
                  <a href="https://t.me/Riccardo_Zanotelli"><img className="IconSocial" src="https://raw.githubusercontent.com/github/explore/main/topics/telegram/telegram.png" alt="Telegram" /></a>
                </li>
                <li>
                  <a href="https://discordapp.com/users/Zano_TN#7569"><img className="IconSocial" src="https://raw.githubusercontent.com/github/explore/main/topics/discord/discord.png" alt="Discord" /></a>
                  <a href="https://github.com/ZanoTN"><img className="IconSocial" src="https://raw.githubusercontent.com/github/explore/main/topics/github/github.png" alt="GitHub" /></a>
                </li>
              </ul>
            </div>
            <button className="ButtonHome" onClick={() => this.ClickButton("OTHER")}>
              OTHER
            </button>
            <div id="OTHER" className="InfoBox">
              <ul>
                <li>
                  The site was created by me! 🙃
                </li>
              </ul>
            </div>
          </div>
        </header>
      </div>
    )
  };

}

export default App;
