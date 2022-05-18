var normal = document.getElementById("nav-menu");
// var reverse = document.getElementById("nav-menu-left");

var icon = normal // !== null ? normal : reverse;
console.log(icon);
// Toggle the "menu-open" % "menu-opn-left" classes
function toggle() {
	  var navRight = document.getElementById("nav");
	//   var navLeft = document.getElementById("nav-left");
	  var nav = navRight // !== null ? navRight : navLeft;

	  var button = document.getElementById("menu");
	  var site = document.getElementById("wrap");
	  
	  if (nav.className == "menu-open" || nav.className == "menu-open-left") {
	  	  nav.className -= " menu-open";
	  	  button.className = "";
	  	  site.className = "";
	//   } else if (reverse !== null) {
	//   	  nav.className += "menu-open-left";
	//   	  button.className += "btn-close";
	//   	  site.className += "fixed";
	  } else {
	  	  nav.className += " menu-open";
	  	  button.className += "btn-close";
	  	  site.className += "fixed";
	    }
	}

// Ensures backward compatibility with IE old versions
function menuClick() {
	if (document.addEventListener && icon !== null) {
		icon.addEventListener('click', toggle);
	} else if (document.attachEvent && icon !== null) {
		icon.attachEvent('onclick', toggle);
	} else {
		return;
	}
}

menuClick();

function detectColorScheme() {
	var theme="light";    
	 //default to light
       
	//local storage is used to override OS theme settings
	if(localStorage.getItem("theme")){
	    if(localStorage.getItem("theme") == "dark"){
		var theme = "dark";
	    }
	} else if(!window.matchMedia) {
	    //matchMedia method not supported
	    return false;
	} else if(window.matchMedia("(prefers-color-scheme: dark)").matches) {
	    //OS theme setting detected as dark
	    var theme = "dark";
	}
       
	//dark theme preferred, set document with a `data-theme` attribute
	if (theme=="dark") {
	    document.documentElement.setAttribute("data-theme", "dark");
	}
	}
	detectColorScheme();
	 //identify the toggle switch HTML element
	     const themeSwitch = document.getElementById('hm-theme-switch-toggle');
       
	//function that changes the theme, and sets a localStorage variable to track the theme between page loads
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
       
	  //listener for changing themes
	//     themeSwitch.addEventListener('change', switchTheme, false);
       
       //pre-check the dark-theme checkbox if dark-theme is set
	//    if (document.documentElement.getAttribute("data-theme") == "dark"){
	//    themeSwitch.checked = true;
	// }
