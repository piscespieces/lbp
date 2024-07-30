const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show")
    } else {
      entry.target.classList.remove("show")
    }
  })
})
const hiddenElements = document.querySelectorAll(".custom-hidden");
console.log(hiddenElements)
hiddenElements.forEach((el) => observer.observe(el));