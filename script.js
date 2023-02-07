const said = document.getElementById("bla");

const left = document.getElementById("left");
const right = document.getElementById("right");
const slideLeft = () => {
    said.scrollLeft = said.scrollLeft -= 300;
}
left.addEventListener("click", slideLeft
)

const slideRight = () => { 
    said.scrollLeft = said.scrollLeft += 300;
}
right.addEventListener("click", slideRight 
)


const menu = document.getElementById("menu")
const open = document.getElementById("open")

menu.addEventListener("click", () => {
   open.classList.toggle("show-nav") 
})
