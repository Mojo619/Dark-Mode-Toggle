

const toggle = document.querySelector(".toggle-theme");

const body = document.body;

function toggleTheme(){
    if(body.classList.contains("dark-mode")){
        body.classList.remove("dark-mode");
        toggle.textContent="Dark Mode";
    }else {
        body.classList.add("dark-mode");
        toggle.textContent = "Light Mode";

    }
}


toggle.addEventListener("click", toggleTheme)

