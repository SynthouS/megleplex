document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('number-container');
    const finale = document.getElementById('finale');
    const GOOGOLPLEX_ZEROS = 10100;
    const MEGLEPLEX_ITERATIONS = 1000;
    const CHUNK_SIZE = 670;
    let isGenerating = true;

    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key.toLowerCase() === 'v') {
            e.preventDefault();
            finale.scrollIntoView({behavior: 'smooth'});
        }
    });

    function addZeros(amount) {
        const zeros = '0'.repeat(amount);
        const currentContent = container.textContent;
        
        if ((currentContent.length - 1) % GOOGOLPLEX_ZEROS === 0 && currentContent.length > 1) {
            container.textContent += `\n✧ ${Math.pow(10, 100)} ZEROS ✧\n`;
        }
        
        container.textContent += zeros;
    }

    function checkCompletion() {
        const totalZeros = container.textContent.length - 1;
        const completedGoogleplexes = Math.floor(totalZeros / GOOGOLPLEX_ZEROS);
        
        if (completedGoogleplexes >= MEGLEPLEX_ITERATIONS) {
            finale.style.display = 'block';
            container.style.display = 'none';
            isGenerating = false;
            return true;
        }
        return false;
    }

    function generate() {
        if (!isGenerating) return;
        
        addZeros(CHUNK_SIZE);
        
        if (!checkCompletion()) {
            requestAnimationFrame(generate);
        }
    }

    setTimeout(() => {
        container.textContent = '1';
        requestAnimationFrame(generate);
    }, 1000);
});