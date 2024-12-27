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
        
        }
          .header-link {
             display: flex; 
        justify-content: space-between; 
          }
      .header-link img{
         max-width:600px;
     
        }
        .logoWrap {
          display: flex; 
          justify-content: center; 
        }
        .logoWrap img {
          width: 300px; 
        }
        .logo-wrap-small img {
          width: 50px; 
        }
        .homepage-wrap {
          height: 100%; 
        }
        .header {
          position: relative; 
          background-color: #ffffff;
          padding: 10px 5%;
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
      

        .header a.main:hover{
          color: transparent; /* Make text transparent to apply the gradient */
          background:linear-gradient(90deg, #e0e0e0, #a0a0a0, #606060); 
          background-clip: text;
          -webkit-background-clip: text;
          text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3); /* Subtle shadow for depth */
          border: none;
          transition:  0.3s ease-in-out; /* Smooth transition for hover effect */
        }
        
  


        ul {
          list-style-type: none; 
          padding: 5px; 
          background-color: white; 
        }
        .nav {
          display: flex; 
          justify-content: flex-end; 
          justify-content: flex-end;
          align-items: center;
          background-color: #ffffff;
        }
        ul.nav.nav-tabs {
          margin: 0; 
          box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.3);
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
            font-family: "Lato", sans-serif;
        }
        .nav-item.login button {
          border: none; 
          color: #000; 
          background-color: #fff; 
          padding: 5px 10px; 
          border-radius: 2px; 
          cursor: pointer;
          font-size: 19px; 
              font-family: sans-serif;
        }
        .nav-item.login button:hover, .nav-item.book button:hover, .nav-item a:hover {
          color: #333; 
          font-weight: 600; 
        }
        .nav-item.book a {
          border: none; 
          font: sans-serif; 
          font-size: 20px; 
          cursor: pointer;
              font-family: sans-serif;
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
          @media screen and (max-width:641px){
        
            .nav-item {
              padding-right: 10px
              }
            .header-link {
              display: flex;
              flex-direction: column;
              align-items: center;
              }
              .header-link img {
              max-width: 100%;
              }
              .header {
              padding:0;
              }
              .logo-wrap-small img {
    max-width: 20px;
    padding-bottom: 10px;
}
    .header a.main  {
    padding:0; 
    }
          }
      </style>


      <div id="nav-container">
        <div class="header">
          <div class="header-link">
            <a href="/" class="main"><img src="/assets/pictures/Thomas_Logo.png"></a>
            <div class="logo-container header"></div>
            <div class="logo-wrap-small">
              <a href="/"><img src="/assets/pictures/logo.jpeg" alt="thomas cook hair logo" /></a> 
            </div>
          </div>
        </div>
        <nav id="nav"> 
          <ul class="nav nav-tabs">
         
            <li class="nav-item">
              <a href="/work.html">Work</a> 
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
            <h2   style="font-family: Custom; margin:10px; ">Sign in</h2>
          </div>
          <div id="g_id_onload"
               data-client_id="378842120365-n7r25rll2sqjhc582776d4ebdjp4al5o.apps.googleusercontent.com"
               data-context="signin"
               data-ux_mode="popup"
               data-login_uri="https://thomascook.onrender.com"
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
          <fb:login-button 
  scope="public_profile,email"
  onlogin="checkLoginState();">
</fb:login-button>

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
   
      console.log('Credential Response:', response);
    }
  }

  window.fbAsyncInit = function() {
    FB.init({
      appId      : '1708312423304830',
      cookie     : true,
      xfbml      : true,
      version    : 'v11.0'
    });
    
    FB.AppEvents.logPageView();   
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));


  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }

  function statusChangeCallback(response) {
    if (response.status === 'connected') {
  
      console.log('Logged in and authenticated');

      FB.api('/me', {fields: 'name,email'}, function(response) {
        console.log(response);
      });
    } else {
     
      console.log('Not authenticated');
    }
  }


  
  customElements.define("custom-navbar", Navbar);