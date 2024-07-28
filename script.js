document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a[data-link]');
    const content = document.getElementById('content');
    const loginModal = document.getElementById('loginModal');
    const loginButton = document.querySelector('button.login');
    const closeButton = document.querySelector('.close');

    async function loadContent(page) {
        try {
            const response = await fetch(`${page}.html`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const html = await response.text();
            content.innerHTML = html;
        } catch (error) {
            console.error('Fetch error:', error);
            content.innerHTML = '<p>Sorry, there was an error loading the page.</p>';
        }
    }

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const page = event.target.getAttribute('data-link');
            history.pushState({ page }, "", `#${page}`);
            loadContent(page);
        });
    });

    window.addEventListener('popstate', (event) => {
        if (event.state && event.state.page) {
            loadContent(event.state.page);
        }
    });

    // Load initial content based on URL hash or default to 'home'
    const initialPage = location.hash.replace('#', '') || 'home';
    loadContent(initialPage);

    // Event listener for login button to show modal
    loginButton.addEventListener('click', () => {
        loginModal.style.display = "block";
        google.accounts.id.initialize({
            client_id: "378842120365-n7r25rll2sqjhc582776d4ebdjp4al5o.apps.googleusercontent.com",
            callback: handleCredentialResponse
        });
        google.accounts.id.renderButton(
            document.querySelector('.g_id_signin'),
            { theme: "outline", size: "large" }
        );
    });

    // Event listener for close button to hide modal
    closeButton.addEventListener('click', () => {
        loginModal.style.display = "none";
    });

    // Close the modal when clicking outside of it
    window.addEventListener('click', (event) => {
        if (event.target === loginModal) {
            loginModal.style.display = "none";
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    // Get the modal
    const modal = document.getElementById('loginModal');
    
    // Get the button that opens the modal
    const loginButton = document.querySelector('.login button');
    
    // Get the <span> element that closes the modal
    const span = document.getElementsByClassName('close')[0];
    
    // When the user clicks on the button, open the modal
    if (loginButton) {
        loginButton.onclick = () => {
            modal.style.display = 'block';
        };
    }
    
    // When the user clicks on <span> (x), close the modal
    if (span) {
        span.onclick = () => {
            modal.style.display = 'none';
        };
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };
});


function handleCredentialResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
}
