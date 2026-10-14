
const galleryImage = document.getElementById("gallery-image");
const imageDescription = document.getElementById("image-description");
const changeImageButton = document.getElementById("change-image");

const images = [
    {
        src: "assets/IMG_8052.jpeg",
        alt: "First displayed image"
    },
    {
        src: "assets/IMG_4743.jpeg",
        alt: "Second displayed image"
    }
];

let currentImageIndex = 0;

changeImageButton.addEventListener("click", function () {
    galleryImage.style.opacity = "0";

    setTimeout(function () {
        currentImageIndex = (currentImageIndex + 1) % images.length;

        galleryImage.src = images[currentImageIndex].src;
        galleryImage.alt = images[currentImageIndex].alt;

        imageDescription.textContent =
            `Image ${currentImageIndex + 1} of ${images.length}`;

        galleryImage.style.opacity = "1";
    }, 400);
});
