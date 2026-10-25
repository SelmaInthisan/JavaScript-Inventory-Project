window.runAssignment2 = function () {
    console.log("--- Assignment 2: Operators, Expressions, and Input Handling ---");
    const billInput = prompt("Enter bill amount:", "100");
    if (billInput === null) return console.log("Assignment cancelled.");
    const tipInput = prompt("Enter tip percentage:", "15");
    if (tipInput === null) return console.log("Assignment cancelled.");
    const billAmount = Number(billInput);
    const tipPercentage = Number(tipInput);
    if (!Number.isFinite(billAmount) || billAmount < 0) return console.log("Invalid bill amount.");
    if (!Number.isFinite(tipPercentage) || tipPercentage < 0) return console.log("Invalid tip percentage.");
    const tipAmount = billAmount * tipPercentage / 100;
    let totalAmount = billAmount;
    totalAmount += tipAmount;
    const money = n => Number.isInteger(n) ? `$${n}` : `$${n.toFixed(2)}`;
    console.log(`Subtotal: ${money(billAmount)}`);
    console.log(`Tip Percentage: ${tipPercentage}%`);
    console.log(`Calculated Tip: ${money(tipAmount)}`);
    console.log(`Total Amount to Pay: ${money(totalAmount)}`);
};
