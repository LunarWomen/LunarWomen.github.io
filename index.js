window.addEventListener('load', function() {
	// store tabs variable
    var myTabs = document.querySelectorAll('.navbar-nav > a');
  function myTabClicks(tabClickEvent) {
		for (let i = 0; i < myTabs.length; i++) {
            myTabs[i].classList.remove('active');
		}
        var clickedTab = tabClickEvent.currentTarget;
		clickedTab.classList.add('active');
		tabClickEvent.preventDefault();
		var myContentPanes = document.querySelectorAll('.tab-pane');
		for (let i = 0; i < myContentPanes.length; i++) {
			myContentPanes[i].classList.remove('active');
		}
		var anchorReference = tabClickEvent.target;
		var activePaneId = anchorReference.getAttribute('href');
		var activePane = document.querySelector(activePaneId);
        activePane.classList.add('active');
	}
	for (let i = 0; i < myTabs.length; i++) {
		myTabs[i].addEventListener('click', myTabClicks)
	}
});
const navBar = document.getElementById('navbarNavAltMarkup')
const toggle = document.getElementById('toggleButton')
let toggled = false;
toggle.addEventListener('click', function() {
	toggled = !toggled
})

let toggleClick = function() {
	if (toggled = true) {
		navBar.classList.remove("show")
		navBar.classList.add("hide")
	}
}
const navItems = Array.from(document.getElementsByClassName('nav-item nav-link'))
navItems.map((item) => {
	item.addEventListener('click', toggleClick)
})

const emailSubmit = document.getElementById('emailSubmit');
const clientNameForm = document.getElementById('clientName')
const clientEmailForm = document.getElementById('exampleInputEmail1')
const clientSubjectForm = document.getElementById('subject')

emailSubmit.addEventListener('click', function() {
	let clientName = clientNameForm.value;
	let clientEmail = clientEmailForm.value;
	let clientSubject = clientSubjectForm.value
	window.location.href = `mailto:mags21walker@gmail.com?subject=Email from ${clientName ? clientName : "Person"} at ${clientEmail ? clientEmail : "Email"}&body=${clientSubject ? clientSubject : "No message"}`

	clientNameForm.value = '';
	clientEmailForm.value = '';
	clientSubjectForm.value = '';
})
