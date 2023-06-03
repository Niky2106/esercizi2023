window.onload = function () {
    const alertDiv = document.querySelector('.alert');
    alertDiv.style.display = 'block';

    const button1 = document.getElementById('button1');
    const closeButton = document.querySelector('.close');

    alertDiv.style.display = 'block';

    closeButton.addEventListener('click', () => {
        alertDiv.style.display = 'none';
    });

    button2.addEventListener('click', () => {
        alertDiv.style.display = 'none';
    });
};

// const loginButton = document.getElementById("loginButton");
// const loginModal = document.getElementById("loginModal");

// // Controlla se la modale è già stata visualizzata
// const isModalShown = localStorage.getItem("modalShown");

// if (!isModalShown) {
//     // Se la modale non è stata ancora visualizzata, mostra la modale e imposta lo stato nel localStorage
//     loginModal.classList.add("show");
//     localStorage.setItem("modalShown", true);
// }


// const username = document.querySelector(".profileButton");
// const customModal = document.getElementById("customModal");

// username.addEventListener("click", () => {
//     customModal.style.display = "block";
// });

// customModal.addEventListener("click", (event) => {
//     if (event.target === customModal) {
//         customModal.style.display = "none";
//     }
// });

// const imgProfile = document.getElementById('img_profile');
// const loginInput = document.getElementById('login_input');

// imgProfile.addEventListener('click', () => {
//     loginInput.style.display = 'block';
// });



// const imgProfile = document.getElementById('img_profile');
// const loginInput = document.getElementById('login_input');

// imgProfile.addEventListener('click', () => {
//     loginInput.style.display = 'block';
// });

// const loginButton = document.getElementById('login_button');
// loginButton.addEventListener('click', () => {
//     const username = loginInput.value;
//     if (username) {
//         alert(`Logged in as: ${username}`);
//     } else {
//         alert('Please enter a username');
//     }
// });