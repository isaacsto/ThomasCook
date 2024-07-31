class Navbar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        #nav-container {    
          display: flex; 
          flex-direction: column;
          width: 100vw; 
          position: fixed;
          top: 0;
          z-index: 1000;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
        .logoWrap {
          display: flex; 
          justify-content: center; 
        }
        .logoWrap img {
          width: 300px; 
        }
        .logo-wrap-small img {
          width: 200px; 
        }
        .homepage-wrap {
          height: 100%; 
        }
        .header {
          position: relative; 
          background-color: #ffffff;
          padding: 10px 5%;
        }
        .header-link{
          display: flex; 
          justify-content: space-between; 
        }
        .header a.main {
          text-decoration: none; 
          font-size: 25px; 
          font-weight: 600; 
          color: #000000; 
          font-family: sans-serif;  
          background-color: #ffffff ;
          display: flex; 
          align-items: flex-end; 
          padding-left: 10px; 
          cursor: pointer;
        }
        .header a.main:hover {
          color: rgb(170, 50, 255); 
        }
        ul {
          list-style-type: none; 
          padding: 5px; 
          background-color: white; 
        }
        .nav {
          display: flex; 
          justify-content: flex-end; 
          box-shadow: inset 0 0.2px 0 black;
          justify-content: flex-end;
          align-items: center;
          background-color: #ffffff;
        }
        ul.nav.nav-tabs {
          margin: 0; 
        }
        .nav-item {
          padding-right: 50px; 
        }
        .nav-item a {
          color: #000000; 
          text-decoration: none;
          padding: 0px 20px; 
          font-size: 20px; 
          border-radius: 2px; 
          background-color: #ffffff; 
          z-index: 2000; 
          cursor: pointer; 
          font-family: "Roboto Mono", monospace;
        }
        .nav-item.login button {
          border: none; 
          color: #ffffff;
          background-color: #000000;
          padding: 5px 10px; 
          border-radius: 2px; 
          cursor: pointer;
          font-size: 19px; 
          font-family: "Roboto Mono", monospace;
        }
        .nav-item.login button:hover, .nav-item.book button:hover, .nav-item a:hover {
          color: rgb(170, 50, 255); 
          font-weight: 600; 
        }
        .nav-item.book a {
          border: none; 
          font: sans-serif; 
          font-size: 20px; 
          cursor: pointer;
          font-family: "Roboto Mono", monospace;
        }
        .modal {
          display: none; 
          position: fixed; 
          z-index: 1001; 
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          overflow: auto;
          background-color: rgba(0,0,0,0.4); 
        }
        .modal-content {
          background-color: #fefefe;
          margin: 15% auto; 
          padding: 20px;
          border: 1px solid #888;
          width: 80%; 
          max-width: 500px;
          border-radius: 5px;
          position: relative;
        }
        .close {
          color: #aaa;
          float: right;
          font-size: 28px;
          font-weight: bold;
          cursor: pointer;
        }
        .close:hover,
        .close:focus {
          color: black;
          text-decoration: none;
          cursor: pointer;
        }
      </style>
      <script src="https://apis.google.com/js/platform.js" async defer></script>
      <script src="https://accounts.google.com/gsi/client" async></script>
      <div id="nav-container">
        <div class="header">
          <div class="header-link">
            <a href="/" class="main">Thomas Cook Hair</a>
            <div class="logo-container header"></div>
            <div class="logo-wrap-small">
              <a href="/"><img src="/assets/pictures/thincleartwo.png" alt="thomas cook hair logo" /></a> 
            </div>
          </div>
        </div>
        <nav id="nav"> 
          <ul class="nav nav-tabs">
            <li class="nav-item">
              <a href="/about.html">About</a>
            </li>
            <li class="nav-item">
              <a href="/work.html">Work</a> 
            </li>
            <li class="nav-item login">
              <button class="login">Sign in</button>
            </li> 
            <li class="nav-item book">
              <a href="/book.html">Book</a>
            </li>  
          </ul> 
        </nav>
      </div>
      <!--Popup Modal -->
      <div id="loginModal" class="modal">
        <div class="modal-content">
          <div class="modal-header">
            <span class="close">&times;</span>
            <h2>Sign in</h2>
          </div>
          <div id="g_id_onload"
               data-client_id="378842120365-n7r25rll2sqjhc582776d4ebdjp4al5o.apps.googleusercontent.com"
               data-context="signin"
               data-ux_mode="popup"
               data-login_uri="http://localhost:5500"
               data-auto_prompt="false">
          </div>
          <div class="g_id_signin"
               data-type="standard"
               data-shape="rectangular"
               data-theme="outline"
               data-text="signin_with"
               data-size="large"
               data-logo_alignment="left">
          </div>
        </div>
      </div>
    `;

       // Initialize Google Sign-In
       window.addEventListener('load', () => {
        if (window.google && google.accounts && google.accounts.id) {
          google.accounts.id.initialize({
            client_id: "378842120365-n7r25rll2sqjhc582776d4ebdjp4al5o.apps.googleusercontent.com",
            callback: this.handleCredentialResponse
          });
          google.accounts.id.renderButton(
            this.shadowRoot.querySelector('.g_id_signin'),
            { theme: "outline", size: "large" }
          );
        }
      });
  
      // Event listener for sign-in button
      this.shadowRoot.querySelector(".login button").addEventListener("click", () => {
        const loginModal = this.shadowRoot.getElementById("loginModal");
        if (loginModal) {
          loginModal.style.display = "block";
        }
      });
  
      // Event listener for close button 
      this.shadowRoot.querySelector(".modal .close").addEventListener("click", () => {
        const loginModal = this.shadowRoot.getElementById("loginModal");
        if (loginModal) {
          loginModal.style.display = "none";
        }
      });
  
      // Close modal when clicking outside 
      window.addEventListener("click", (event) => {
        const loginModal = this.shadowRoot.getElementById("loginModal");
        if (event.target === loginModal) {
          loginModal.style.display = "none";
        }
      });
    }
  
    handleCredentialResponse(response) {
      // Handle the response here. For example, you might store the token or send it to your backend for verification
      console.log('Credential Response:', response);
    }
  }
  
  customElements.define("custom-navbar", Navbar);