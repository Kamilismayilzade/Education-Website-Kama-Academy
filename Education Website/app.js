let profile = document.querySelector('.header .flex-class .profile');
let userBtn = document.getElementById('user-btn');

userBtn.onclick = () => {
    profile.classList.toggle('active');
    searchForm.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');
let searchBtn = document.getElementById('search-btn');

searchBtn.onclick = () => {
    searchForm.classList.toggle('active');
    profile.classList.remove('active');
}

let sideBar = document.querySelector('.sidebar');
let menuBtn = document.getElementById('menu-btn');
let body = document.body;

menuBtn.onclick = () => {
    sideBar.classList.toggle('active');
    body.classList.toggle('active');
}

let closeSideBar = document.querySelector('.close-side-bar');

closeSideBar.onclick = () => {
    sideBar.classList.toggle('active');
    body.classList.toggle('active');
}

window.onscroll = () => {
    profile.classList.remove('active');
    searchForm.classList.remove('active');

    if (window.innerWidth < 1200) {
        sideBar.classList.remove('active');
        body.classList.remove('active');
    }
}

// Dark Mode

let toggleBtn = document.querySelector('#toggle-btn');
let darkMode = localStorage.getItem('dark-mode');

let enableDarkMode = () => {
    toggleBtn.classList.replace('fa-cloud-sun', 'fa-moon');
    body.classList.add('dark');
    localStorage.setItem('dark-mode', 'enabled');
}

let disableDarkMode = () => {
    toggleBtn.classList.replace('fa-moon', 'fa-cloud-sun');
    body.classList.remove('dark');
    localStorage.setItem('dark-mode', 'disabled');
}

if (darkMode === 'enabled') {
    enableDarkMode();
}

toggleBtn.onclick = (e) => {
    let darkMode = localStorage.getItem('dark-mode');
    if (darkMode === 'disabled') {
        enableDarkMode();
    }
    else {
        disableDarkMode();
    }
}


