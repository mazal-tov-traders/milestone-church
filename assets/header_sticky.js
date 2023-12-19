const main = document.querySelector( 'main' );
const header = document.querySelector( '.header-wrapper' );

window.addEventListener( 'scroll', () => {
	if ( main.getBoundingClientRect().top < 0 ) {
		header.classList.add( 'header-wrapper_sticky' );
	} else {
		header.classList.remove( 'header-wrapper_sticky' );
	}
})