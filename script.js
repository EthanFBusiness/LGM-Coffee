let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

// Show the initial slide
showSlides();

// Function to show the slides
function showSlides() {
    // Fade out the current slide
    slides[slideIndex].classList.remove('active');

    // Update the slide index to show the next slide
    slideIndex = (slideIndex + 1) % slides.length;

    // Use a slight timeout to allow for the fade-out transition
    setTimeout(() => {
        slides[slideIndex].classList.add('active'); // Show the next slide
    }, 500); // This should match the CSS fade duration

    // Change slide every 5 seconds
    setTimeout(showSlides, 5000);
}

// Optional: You could add manual controls for users to navigate slides
const leftArrow = document.createElement('button');
leftArrow.id = 'left-arrow';
leftArrow.innerText = '<'; // or use an icon
leftArrow.onclick = () => {
    slides[slideIndex].classList.remove('active'); // Hide current slide
    slideIndex = (slideIndex - 1 + slides.length) % slides.length; // Move to previous slide
    slides[slideIndex].classList.add('active'); // Show new slide
};
document.querySelector('.slideshow-container').appendChild(leftArrow);

const rightArrow = document.createElement('button');
rightArrow.id = 'right-arrow';
rightArrow.innerText = '>'; // or use an icon
rightArrow.onclick = () => {
    slides[slideIndex].classList.remove('active'); // Hide current slide
    slideIndex = (slideIndex + 1) % slides.length; // Move to next slide
    slides[slideIndex].classList.add('active'); // Show new slide
};
document.querySelector('.slideshow-container').appendChild(rightArrow);

document.querySelector('.burger').addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active'); // Toggle the visibility of nav links
});