// animations.js

function animateTableCells() {
    const cells = document.querySelectorAll('.pixel-cell');
    if (!cells.length) {
        return;
    }

    // Check if dark mode is active, only run animation in dark mode
    if (!document.body.classList.contains('dark-mode')) {
        // Remove any animation styles if not in dark mode, so they don't stick
        // if the user toggles themes while cells are still animating.
        cells.forEach(cell => {
            cell.style.animation = '';
            cell.style.opacity = ''; // Reset opacity if it was set by JS or CSS animation
        });
        return;
    }

    let delay = 0;
    cells.forEach((cell, index) => {
        // Reset any previous animation state
        cell.style.animation = '';
        cell.style.opacity = '0'; // Start transparent

        // Apply animation with a staggered delay
        // The animation 'fadeInPixel' should be defined in matrix-style.css
        cell.style.animationName = 'fadeInPixel';
        cell.style.animationDuration = '0.5s';
        cell.style.animationTimingFunction = 'ease-out';
        cell.style.animationFillMode = 'forwards';
        cell.style.animationDelay = `${delay}s`;
        
        delay += 0.01; // Adjust this value for faster/slower sequential animation
                      // 0.01s = 10ms. For a 50x50 table (2500 cells), this means 25s total.
                      // Maybe a smaller value or a cap on delay is needed for large tables.
                      // Or, animate row by row. For now, a simple sequential delay.
        
        // Cap the delay to avoid excessively long animations for very large tables
        if (delay > 2.5) { // Max 2.5 seconds stagger for the start of animation
            delay = 0.05; // Reset delay slightly for next batch, or keep it maxed
        }
    });
}

// We will need to call animateTableCells() after the table is generated in index.html
