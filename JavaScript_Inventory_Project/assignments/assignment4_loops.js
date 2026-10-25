window.runAssignment4 = function () {
    console.log("--- Assignment 4: Loop Control Structures ---");
    console.log("-- Multiplication Table of 5 --");
    for (let n = 1; n <= 5; n++) console.log(`5 x ${n} = ${5 * n}`);
    console.log("-- First number > 10 divisible by 6 --");
    let candidate = 11;
    while (candidate <= 100) {
        if (candidate > 10 && candidate % 6 === 0) { console.log(`Found: ${candidate}`); break; }
        candidate++;
    }
    console.log("-- do...while with continue (skip even numbers) --");
    let count = 0;
    do {
        count++;
        if (count % 2 === 0) continue;
        console.log(`Processed odd number: ${count}`);
    } while (count < 5);
};
