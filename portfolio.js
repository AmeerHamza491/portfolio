const modeBtn = document.getElementById('mode');
modeBtn.onchange = (e) => {
    if (modeBtn.checked === true) {
        document.documentElement.classList.remove("light")
        document.documentElement.classList.add("dark")
        window.localStorage.setItem('mode', 'dark');
    } else {
        document.documentElement.classList.remove("dark")
        document.documentElement.classList.add("light")
        window.localStorage.setItem('mode', 'light');
    }
}

// const modeBtn = document.getElementById('mode');
modeBtn.onchange = (e) => {
    if (modeBtn.checked === true) {
        document.documentElement.classList.remove("light")
        document.documentElement.classList.add("dark")
        window.localStorage.setItem('mode', 'dark');
    } else {
        document.documentElement.classList.remove("dark")
        document.documentElement.classList.add("light")
        window.localStorage.setItem('mode', 'light');
    }
}

const mode = window.localStorage.getItem('mode');
if (mode == 'dark') {
    modeBtn.checked = true;
    document.documentElement.classList.remove("light")
    document.documentElement.classList.add("dark")
}

if (mode == 'light') {
    modeBtn.checked = false;
    document.documentElement.classList.remove("dark")
    document.documentElement.classList.add("light")
}
 
function myfunction() {
    var element = document.body;
    element.dataset.bsTheme = element.dataset.bsTheme == "light" ? "dark" : "light";
}

var typed = new Typed(".auto-input", {
    strings: ["Ameer Hamza Gujjar", "Web Developer", "Software Engineer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
}) 
