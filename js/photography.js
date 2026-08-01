// ==========================
// Scroll Reveal
// ==========================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");
            observer.unobserve(entry.target);

        }

    });

}, {
    threshold:0.2
});

document.querySelectorAll(".hidden").forEach(element=>{
    observer.observe(element);
});


// ==========================
// Lightbox
// ==========================

const images = document.querySelectorAll(".gallery-img");

const lightbox = document.getElementById("lightbox");

const lightboxImg = document.getElementById("lightbox-img");

const closeBtn = document.querySelector(".close");

images.forEach(img=>{

    img.addEventListener("click",()=>{

        lightbox.classList.add("active");

        lightboxImg.src = img.src;

        lightboxImg.alt = img.alt;

        document.body.style.overflow = "hidden";

    });

});

function closeLightbox(){

    lightbox.classList.remove("active");

    document.body.style.overflow = "";

}

closeBtn.addEventListener("click",closeLightbox);

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        closeLightbox();

    }

});

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        closeLightbox();

    }

});