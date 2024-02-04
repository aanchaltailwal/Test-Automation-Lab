const rates = {
    USD: 1,
    EUR: 0.84,
    GBP: 0.76,
    INR: 83.14 // Example rate, you can replace it with the actual rate
};

function convert() {
    const amount = document.getElementById('amount').value;
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;

    if (from === to) {
        document.getElementById('result').textContent = 'Cannot convert to the same currency';
        return;
    }

    const result = amount * rates[to] / rates[from];
    document.getElementById('result').textContent = `Result: ${result.toFixed(2)} ${to}`;
}

document.getElementById('convertBtn').addEventListener('click', convert);
