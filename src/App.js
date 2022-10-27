import './App.css';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <div class="share">
          <div class="shareIcon">
            <img src="./image/shareIcon.svg" alt=""></img>
          </div>
        </div>

        <div class="profile">
          <img src="./image/profile1.svg" class="image1" id="profile_img" alt=""></img>
          <div class="profileMiddle">
            <div class="profileIcon">
              <img src="./image/Icon (3).svg" class="image2" alt=""></img>
            </div>
          </div>
        </div>

        <h4>Annette Black</h4>

        <div class="social-handle">
          <button id="twitter"><a href="">Twitter link</a></button>
          <button id="btn_zuri"><a href="https://training.zuri.team/">Zuri Team</a></button>
          <button id="books"><a href=" http://books.zuri.team">Zuri Books</a></button>
          <button id="book_python"><a href="https://books.zuri.team/">Python Books</a></button>
          <button id="pitch"><a href=" https://background.zuri.team">Background Check for Coder</a></button>
          <button id="book_design"><a href="https://books.zuri.team/design-rules">Design Books</a></button>
        </div>

        <div class="slackIcon">
          <img src="./image/slack.svg" id="slack" alt=""></img>
          <img src="./image/Icon (1).svg" alt=""></img>
        </div>

      </div>
    </div>
  );
}

export default App;
