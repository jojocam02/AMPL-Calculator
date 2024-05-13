function calculate() {
    const amount = parseFloat(document.getElementById('amount').value);
    const rebase = parseFloat(document.getElementById('rebase').value) / 100;
    const days = parseInt(document.getElementById('days').value);

    if (isNaN(amount) || isNaN(rebase) || isNaN(days)) {
        alert('Please enter valid numbers.');
        return;
    }

    let compoundedAmount = amount;
    for (let i = 0; i < days; i++) {
        compoundedAmount *= (1 + rebase);
    }

    document.getElementById('result').innerText = `After ${days} days, your AMPL amount will be ${compoundedAmount.toFixed(2)}.`;
}
