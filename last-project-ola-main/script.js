const btn = document.getElementById('moveBtn');
const container = document.querySelector('.container');

// We use transform: translate for smooth hardware-accelerated movement
let currentX = 0;
let currentY = 0;

btn.addEventListener('mouseover', () => {
    // Generate random offsets, but keep within viewport roughly
    // The button starts at currentX=0, currentY=0 relative to its initial position.
    
    // Calculate max bounds based on window size
    const maxX = window.innerWidth / 2 - 100; // Half screen minus padding
    const maxY = window.innerHeight / 2 - 50; 
    
    // Pick a random direction and distance
    const randomX = (Math.random() - 0.5) * 2 * maxX;
    const randomY = (Math.random() - 0.5) * 2 * maxY;
    
    currentX = randomX;
    currentY = randomY;

    // Apply the hardware accelerated transform
    btn.style.transform = `translate(${currentX}px, ${currentY}px)`;
});

// Optional: If they manage to click it
btn.addEventListener('click', (e) => {
    e.preventDefault();
    btn.textContent = "Gotcha!";
    btn.style.background = "linear-gradient(45deg, #00ffcc, #00b33c)";
    setTimeout(() => {
        btn.textContent = "Click Here";
        btn.style.background = "";
    }, 2000);
});