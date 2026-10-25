window.runCapstone = function () {
    console.log("--- Initializing Inventory System ---");
    const inventory = [
        { name: "Laptop", price: 800 },
        { name: "Mouse", price: 25 }
    ];
    const money = n => Number.isInteger(n) ? `$${n}` : `$${n.toFixed(2)}`;

    function getPriceCategory(price) {
        if (price < 50) return "Budget";
        else if (price < 200) return "Standard";
        else return "Premium";
    }
    function categoryBadge(category) {
        switch (category) {
            case "Budget": return "Budget";
            case "Standard": return "Standard";
            case "Premium": return "Premium";
            default: return "Unclassified";
        }
    }
    function priceAfterDiscountAndTax(price, taxRate = 0.08, discountRate = 0.10) {
        return price * (1 - discountRate) * (1 + taxRate);
    }
    const inventoryValue = items => items.reduce((total, item) => total + item.price, 0);

    let addedProduct = null;
    while (addedProduct === null) {
        const nameInput = prompt("Enter a new product name:", "Monitor");
        if (nameInput === null) {
            console.log("Product entry cancelled. Showing existing inventory.");
            break;
        }
        const name = nameInput.trim();
        if (name.length === 0) {
            console.log("Product name cannot be empty. Please try again.");
            continue;
        }
        const priceInput = prompt("Enter the product price:", "150");
        if (priceInput === null) {
            console.log("Product entry cancelled. Showing existing inventory.");
            break;
        }
        const price = Number(priceInput);
        if (!Number.isFinite(price) || price <= 0) {
            console.log("Invalid price. Enter a positive number and try again.");
            continue;
        }
        addedProduct = { name, price };
        inventory.push(addedProduct);
        console.log(`[Prompt executed: User adds "${addedProduct.name}" at "${money(addedProduct.price)}"]`);
    }

    console.log("-- Searching Inventory --");
    const searchName = addedProduct ? addedProduct.name.toLowerCase() : "";
    let found = null;
    for (const product of inventory) {
        if (!product.name || !Number.isFinite(product.price)) continue;
        if (searchName && product.name.toLowerCase() === searchName) {
            found = product;
            break;
        }
    }
    if (found) console.log(`Search result: Found ${found.name}.`);

    console.log("-- Processing Inventory Roster (forEach) --");
    inventory.forEach(product => {
        const badge = categoryBadge(getPriceCategory(product.price));
        console.log(`* Item: ${product.name} (${money(product.price)}) -> Category: ${badge}`);
    });
    console.log("-- Financial Analytics --");
    console.log(`Total Inventory Value: ${money(inventoryValue(inventory))}`);
    const affordable = inventory.filter(product => product.price < 200).map(product => product.name);
    console.log(`Filtered Affordable Items (Under $200): ${JSON.stringify(affordable)}`);
    const report = inventory.map(product => `${product.name.toUpperCase()}: ${money(product.price)}`);
    console.log(`Formatted Report List: ${JSON.stringify(report)}`);
    if (addedProduct) {
        console.log(`Example price after 10% discount and 8% tax: ${money(priceAfterDiscountAndTax(addedProduct.price, 0.08, 0.10))}`);
    }
};
