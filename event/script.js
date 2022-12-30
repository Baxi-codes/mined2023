const observer=new IntersectionObserver((entries)=>{
	entries.forEach((entry)=>{
		if (entry.isIntersecting) {
			entry.target.classList.add("show")
		} /*else {
			entry.target.classList.remove("show")
		} */
	})
})

function setHeightForNavBg(){
	nav_height=document.querySelectorAll('.menu-container')[0].getBoundingClientRect().height
	document.getElementById('nav-background')
		.setAttribute("style","height:"+nav_height+"px");
}

window.onload=()=>{
	hiddenElements=document.querySelectorAll(".animated-hidden")
	hiddenElements.forEach((el)=>observer.observe(el))
	setHeightForNavBg()
}

window.addEventListener("resize",setHeightForNavBg)
console.log("Hi")