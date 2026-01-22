const icon = document.getElementById("nav-menu");

function toggle() {
	const nav = document.getElementById("nav");
	const button = document.getElementById("menu");
	const site = document.getElementById("wrap");

	if (nav.classList.contains("menu-open") || nav.classList.contains("menu-open-left")) {
		nav.classList.remove("menu-open", "menu-open-left");
		button.className = "";
		site.className = "";
	} else {
		nav.classList.add("menu-open");
		button.classList.add("btn-close");
		site.classList.add("fixed");
	}
}

function menuClick() {
	if (icon !== null) {
		icon.addEventListener('click', toggle);
	}
}

menuClick();

function detectColorScheme() {
	let theme = "light";

	if (localStorage.getItem("theme")) {
		if (localStorage.getItem("theme") === "dark") {
			theme = "dark";
		}
	} else if (!window.matchMedia) {
		return false;
	} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
		theme = "dark";
	}

	if (theme === "dark") {
		document.documentElement.setAttribute("data-theme", "dark");
	}
}

detectColorScheme();

const themeSwitch = document.getElementById('hm-theme-switch-toggle');

function switchTheme(e) {
	if (e.target.checked) {
		localStorage.setItem('theme', 'dark');
		document.documentElement.setAttribute('data-theme', 'dark');
		themeSwitch.checked = true;
	} else {
		localStorage.setItem('theme', 'light');
		document.documentElement.setAttribute('data-theme', 'light');
		themeSwitch.checked = false;
	}
}
