const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const sadMessage = document.getElementById('sad-message');
const puppyImg = document.getElementById('puppy-img');
const floatingHearts = document.getElementById('floating-hearts');

// Function for "Yes" button click (puppy reacts with a happy face)
yesBtn.addEventListener('click', function() {
    puppyImg.src = "happy-puppy.jpg"; // Replace with a happy puppy image URL
    puppyImg.style.animation = "puppyBounce 1s infinite alternate";
    alert("Yay! You made me so happy! 💖");
    floatingHearts.innerHTML = ""; // Stop floating hearts on 'Yes'
    setTimeout(() => {
        window.location.reload();
    }, 1500); // Optional: Reload to refresh the page
});

// Function for "No" button click (puppy looks sad)
noBtn.addEventListener('click', function() {
    puppyImg.src = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fca.pinterest.com%2Fpin%2Fdino-rawr-sticker--771804454914654039%2F&psig=AOvVaw1ExMbTPMmtUE4T2yUZUsv1&ust=1739092984567000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKiR3bHgs4sDFQAAAAAdAAAAABAZ"; // Replace with a sad puppy image URL
    sadMessage.classList.remove('hidden');
    puppyImg.style.animation = "puppyBounce 1s infinite alternate";
    generateHearts(); // Keep hearts floating when "No" is clicked
    noBtn.disabled = true; // Disable "No" button after clicking
});

// Generate floating hearts
function generateHearts() {
    for (let i = 0; i < 10; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.animationDuration = Math.random() * 3 + 3 + "s"; // Randomize speed
        floatingHearts.appendChild(heart);
    }
}
