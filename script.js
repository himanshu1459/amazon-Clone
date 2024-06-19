const image  = ["url('hero_image.jpg')",
"url('hero2.jpg')",
"url('hero3.jpg')",
"url('hero4.jpg')"
]

const heroImage = document.getElementById('hero-section')
const button1 = document.getElementById('button1')
const button2 = document.getElementById('button2')



// Current image index
let currentIndex = 0;

// Get the image element


// Function to change the image
function changeImage() {
    // Increment the index
    currentIndex++;
    
    // If index exceeds the number of images, reset it to 0
    if (currentIndex >= image.length) {
        currentIndex = 0;
    }
    
    // Change the image source
    heroImage.style.backgroundImage = image[currentIndex];
}

// Set an interval to change the image every 3 seconds (3000 milliseconds)
setInterval(() => {
    changeImage(currentIndex + 1);
}, 3500);

// Add event listeners for buttons
// button1.onclick = () => {
//     changeImage(currentIndex - 1);
// };

// button2.onclick = () => {
//     changeImage(currentIndex + 1);
// };

button1.addEventListener("click",()=>{
    changeImage(currentIndex - 1)
})

button2.addEventListener("click",()=>{
    changeImage(currentIndex + 1)
})


// bact to top logic
const back = document.getElementById('back')

back.addEventListener('click', function(){
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});
