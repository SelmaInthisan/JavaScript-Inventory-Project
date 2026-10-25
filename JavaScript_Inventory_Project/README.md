# JavaScript Student Assignments & Inventory Capstone

**Project type:** JavaScript practical assignments and mini capstone  
**Capstone:** Interactive Product Inventory & Analytics Dashboard  
**Runtime:** Web browser (`prompt()` and browser console)

## 1. Project overview

This project contains six independent JavaScript exercises and a capstone mini project. It demonstrates variables and data types, type conversion, operators, conditional logic, loops, functions, scope, arrays, objects, array methods, input validation, and product analytics.

## 2. Folder structure

```text
JavaScript_Inventory_Project/
├── index.html
├── README.md
├── assignments/
│   ├── assignment1_variables.js
│   ├── assignment2_operators_input.js
│   ├── assignment3_conditionals.js
│   ├── assignment4_loops.js
│   ├── assignment5_functions_scope.js
│   └── assignment6_arrays_objects.js
└── capstone/
    └── inventory.js
```

## 3. How to run

1. Extract the project ZIP.
2. Open `index.html` in Chrome or Edge.
3. Press `F12` and select the **Console** tab.
4. Click an assignment button on the page.
5. Enter values in any prompts that appear.

No package installation or server is required.

## 4. Assignment overview

| File | Concepts |
|---|---|
| `assignment1_variables.js` | `var`, `let`, `const`, types, `typeof`, arrays, console output |
| `assignment2_operators_input.js` | `prompt()`, `Number()`, arithmetic, assignment operator, validation |
| `assignment3_conditionals.js` | `if...else`, `switch`, ternary operator, score validation |
| `assignment4_loops.js` | `for`, `while`, `do...while`, `break`, `continue` |
| `assignment5_functions_scope.js` | Standard and arrow functions, parameters, defaults, block scope |
| `assignment6_arrays_objects.js` | Array of objects, `forEach()`, `filter()`, `map()` |
| `capstone/inventory.js` | Input validation, price categories, loops, functions, tax/discount, inventory analytics |

## 5. Capstone behavior

The capstone starts with Laptop ($800) and Mouse ($25). It prompts for one new product. Enter `Monitor` and `150` to reproduce the example. Categories are assigned by price:

- **Budget:** below $50.
- **Standard:** $50 to below $200.
- **Premium:** $200 or more.

The program uses `forEach()` for the inventory roster, `filter()` to select products under $200, and `map()` to create formatted product strings. It uses a regular function to calculate a price after tax and discount, and an arrow function to calculate the total inventory value. The tax/discount example is separate and does not change the inventory total.

### Example output (key lines)

```text
--- Initializing Inventory System ---
[Prompt executed: User adds "Monitor" at "$150"]
-- Searching Inventory --
Search result: Found Monitor.
-- Processing Inventory Roster (forEach) --
* Item: Laptop ($800) -> Category: Premium
* Item: Mouse ($25) -> Category: Budget
* Item: Monitor ($150) -> Category: Standard
-- Financial Analytics --
Total Inventory Value: $975
Filtered Affordable Items (Under $200): ["Mouse","Monitor"]
Formatted Report List: ["LAPTOP: $800","MOUSE: $25","MONITOR: $150"]
Example price after 10% discount and 8% tax: $145.80
```

## 6. Viva / project explanation

**Why choose this project?**  
I wanted a practical mini project that combines core JavaScript concepts. A small inventory lets me validate, categorize, search, and summarize data.

**What does the capstone do?**  
It begins with sample products, prompts for one new product, assigns a category based on price, calculates total inventory value, filters affordable items, and creates a formatted report.

**Why an array of objects?**  
Each object represents a product with related information such as a name and price. The array stores multiple products together.

**What do `filter()` and `map()` do?**  
`filter()` returns items matching a condition. `map()` transforms each item into a new value, such as a formatted report string.

**Why use `Number()`?**  
`prompt()` returns text. `Number()` converts the text into a numeric value so it can be validated and used in calculations.

**What is the difference between `break` and `continue`?**  
`break` exits a loop. `continue` skips the remainder of the current iteration and moves to the next iteration.

## 7. Notes

- This is a browser-based learning project, not a production inventory system.
- Outputs depend on the values entered by the user.
- Assignment 5 intentionally attempts to access a `let` variable outside its block to demonstrate block scope. The error is caught and printed rather than stopping the program.
