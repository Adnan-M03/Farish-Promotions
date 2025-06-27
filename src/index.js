console.log("Plain JavaScript is loading...");

const rootElement = document.getElementById("root");
console.log("Root element:", rootElement);

if (rootElement) {
    rootElement.innerHTML = `
        <div style="padding: 20px; background-color: green; border: 2px solid blue;">
            <h1>Plain JavaScript is working!</h1>
            <p>This proves the script is loading and executing.</p>
        </div>
    `;
    console.log("JavaScript executed successfully!");
} else {
    console.error("Root element not found!");
} 