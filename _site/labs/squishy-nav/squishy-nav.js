const squishyNav = (nav) => {
	// get the svg and animations
	const squish = nav.querySelector('.squish');
	const squishAnimation = squish.querySelector('#squish');
	const unsquishAnimation = squish.querySelector('#unsquish');

	// get the links
	const navLinks = nav.querySelectorAll('.nav-link button');

	// get the animation duration
	const animationDuration = parseInt(getComputedStyle(nav).getPropertyValue('--animation-duration'));

	// set some placeholders
	let noneSelected = true;
	let activeIndex = null;

	// listen for clicks on the nav-link;
	navLinks.forEach((navLink) => {
		navLink.addEventListener('click', (e) => {
			nav.dataset.activeIndex = 'none';
			let playTransition = true;

			navLinks.forEach((link, i) => {
				if (link !== e.target) {
					// this IS NOT the thing we clicked on
					if (link.dataset.state == 'active') {
						link.dataset.state = 'inactive';
					}
				} else {
					// this IS the thing we clicked on
					// change the activeIndex to match
					// this link's index
					activeIndex = i;
					if (link.dataset.state == 'active') {
						// if this is a click on an already
						// active link, dont squish
						playTransition = false;
					} else {
						link.dataset.state = 'active';
					}
				}
			});
			if (playTransition) {
				// this is the grid col the squish is going to move to
				const gridColumn = `${activeIndex + 1} / ${activeIndex + 2}`;

				// this is delayed unless there are none selected
				setTimeout(
					() => {
						squish.style.gridColumn = gridColumn;
					},
					noneSelected ? 0 : animationDuration
				);

				// these are always delayed
				setTimeout(() => {
					nav.dataset.activeIndex = activeIndex + 1; // same
					squishAnimation.beginElement(); // same
				}, animationDuration);

				// put this at the end because we want to reference the value
				// of noneSelected in the other logic blocks
				if (noneSelected) {
					noneSelected = false;
				} else {
					unsquishAnimation.beginElement();
				}
			}
		});
	});
};

// find the nav
const nav = document.querySelector('.squishy-nav');

if (nav) {
	//init the squishyNav
	squishyNav(nav);

	// click home
	document.getElementById('home').click();
}
