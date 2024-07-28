class Navbar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <style>
                /* Nav Styles  */
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
                    font-size: 14px; 
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
                    font-size: 12px; 
                    font-family: "Roboto Mono", monospace;
                }
                .nav-item.login button:hover, .nav-item.book button:hover, .nav-item a:hover {
                    color: rgb(139, 2, 243);
                    font-weight: 600; 
                }
                .nav-item.book button {
                    border: none; 
                    font: sans-serif; 
                    background: #ffffff; 
                    font-size: 14px; 
                    cursor: pointer;
                    font-family: "Roboto Mono", monospace;
                }
            </style>
         
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
        `;

        // Add event listener for the sign-in button
        this.shadowRoot.querySelector('.login button').addEventListener('click', () => {
            // Custom logic for the sign-in button
            console.log('Sign-in button clicked');
            // Example: Open the login modal
            const loginModal = document.getElementById('loginModal');
            if (loginModal) {
                loginModal.style.display = 'block';
            }
        });
    }
}

customElements.define('custom-navbar', Navbar);
