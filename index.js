
if (process.browser) {
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
}
