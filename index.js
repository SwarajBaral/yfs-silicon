const header = document.querySelector("#header");

window.onscroll = () => {
	if(this.scrollY <= 10)
		header.className = '';
	else
		header.className = 'scroll';
}