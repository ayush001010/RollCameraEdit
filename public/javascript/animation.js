let body = document.querySelector("body");
let cursor = document.querySelector(".cursor");

body.addEventListener('mousemove', (par)=>{
    gsap.to(cursor, {
        x: par.x,
        y: par.y, 
        duration: 1.5,
        ease: "back.out",
    })
})