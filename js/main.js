// Add simple animations using JavaScript (if needed) for interactivity
document.querySelector('.explore-btn').addEventListener('click', function() {
    window.scrollTo({
        top: document.querySelector('.crypto-market').offsetTop,
        behavior: 'smooth'
    });
});

document.getElementById('convert-btn').addEventListener('click', function() {
    let amount = document.getElementById('amount').value;
    let conversionRate = 0.000083;  // Assume some value
    document.getElementById('conversion-result').innerHTML = `You Get: <span>${(amount * conversionRate).toFixed(2)} BTC</span>`;
});
