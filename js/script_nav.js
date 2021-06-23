menu.onclick = function myFunction() {
	var a = document.getElementById('topnav');

	if (a.className === "nav__list") {
		a.className += " nav__list-responsive";
	} else {
		a.className = "nav__list";
	}
}