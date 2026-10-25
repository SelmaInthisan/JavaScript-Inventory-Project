window.runAssignment3 = function () {
    console.log("--- Assignment 3: Conditional Logic Implementation ---");
    const input = prompt("Enter a test score from 0 to 100:", "85");
    if (input === null) return console.log("Assignment cancelled.");
    const score = Number(input);
    if (!Number.isFinite(score) || score < 0 || score > 100) return console.log("Invalid score. Enter a value from 0 to 100.");
    let grade;
    if (score >= 90) grade = "A";
    else if (score >= 80) grade = "B";
    else if (score >= 70) grade = "C";
    else if (score >= 60) grade = "D";
    else grade = "F";
    let description;
    switch (grade) {
        case "A": description = "Excellent"; break;
        case "B": description = "Very Good"; break;
        case "C": description = "Good"; break;
        case "D": description = "Needs Improvement"; break;
        default: description = "Failing Grade";
    }
    const status = score >= 40 ? "Passed" : "Failed";
    console.log(`Score: ${score}`);
    console.log(`Grade: ${grade}`);
    console.log(`Grade Description: ${description}`);
    console.log(`Status: ${status}`);
};
