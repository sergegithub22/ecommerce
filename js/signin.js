function showSigninForm() {
    signin.classList.add("modal_window_show");
}
function hideSigninForm() {
    signin.classList.remove("modal_window_show");
}
var link = document.querySelectorAll(".log_link");
var signin = document.querySelector(".modal_window");
var closeBtn = document.querySelector(".modal_close");

for (var i = link.length - 1; i >= 0; i--) {
	link[i].addEventListener("click", showSigninForm);
}
closeBtn.addEventListener("click", hideSigninForm);
	
