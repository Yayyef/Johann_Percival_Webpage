const pictures = [
    // "HipstamaticPhoto-498744696.735542.jgp",
    // "LaMelodieDuPasse.jgp",
    // "HipstamaticPhoto-536749753.114594.jgp",
    // "HipstamaticPhoto-499625556.832512.jgp",
    // "HipstamaticPhoto-662220166.069688.jgp",
    // "HipstamaticPhoto-649883140.272769.jgp",
    // "HipstamaticPhoto-638457640.634731.jgp",
    // "HipstamaticPhoto-637506426.719583.jgp",
    "HipstamaticPhoto-637506426.719583.jpg",
    "HipstamaticPhoto-546104394.612510.jpg",
    "HipstamaticPhoto-546104438.863722.jpg",
    "HipstamaticPhoto-545994889.179368.jpg",
    "OriginalPhoto-545851797.238595.jpg",
    "HipstamaticPhoto-664548408.395406.jpg",
    "HipstamaticPhoto-662220166.069688.JPG",
    "HipstamaticPhoto-649883140.272769.JPG",
    "HipstamaticPhoto-637506461.826357.JPG",
    "HipstamaticPhoto-499625568.308113.jpg"
    // "BeatTape#1.jpg",
    // "BeatTape#1.jpg"
]
const galleryContainer = document.querySelector(".gallery-container");
const display = () => {
    for (i = 0; i < pictures.length; i++) {
        galleryContainer.innerHTML += `
        <div class="gallery-image-wrapper">
            <div class="gallery-image" style="background-image: url('../img/Photos/${pictures[i]}');"></div>
        </div>`;
    }
}
display();