const inputs = document.querySelectorAll(".controls input")
console.log(inputs)

function update(){
const suffix = this.dataset.sizing || ""
document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
//documet.Element.style is used to acces the style of the root element
//.setPropery is a CSS variable used to sutle other elements on the page
}

inputs.forEach(input=>input.addEventListener("mousemove", update))
inputs.forEach(input=>input.addEventListener("change", update))