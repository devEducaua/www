let light = localStorage.getItem('light');
const btn = document.getElementById('theme-toggle');

function enable() {
    document.body.classList.add('light');
    btn.textContent = "dark";
    localStorage.setItem('light', 'true');
}

function disable() {
    document.body.classList.remove('light');
    btn.textContent = "light";
    localStorage.setItem('light', 'false');
}

if (light === 'true') enable();

btn.addEventListener("click", () => {
    light = localStorage.getItem('light');
    light != "true" ? enable() : disable();
})
