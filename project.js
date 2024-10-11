// Prompt the user to enter both values
var num1 = parseFloat(prompt("Enter your value 1"));
var num2 = parseFloat(prompt("Enter your value 2"));
var add = num1 + num2;
var num1 = parseFloat(prompt("Enter your value 1"));
var num2 = parseFloat(prompt("Enter your value 2"));
var sub = num1 - num2;
var num1 = parseFloat(prompt("Enter your value 1"));
var num2 = parseFloat(prompt("Enter your value 2"));
var mul = num1 * num2;
var num1 = parseFloat(prompt("Enter your value 1"));
var num2 = parseFloat(prompt("Enter your value 2"));
var div = num1 / num2;

// Create the table using string concatenation
document.write(
    "<table border='1px'>" +
        "<tr>" +
            "<th>Operation</th>" +
            "<th>Result</th>" +
        "</tr>" +
        "<tr>" +
            "<td>Addition</td>" +
            "<td>" + add + "</td>" +
        "</tr>" +
        "<tr>" +
            "<td>Subtraction</td>" +
            "<td>" + sub + "</td>" +
        "</tr>" +
        "<tr>" +
            "<td>Multiplication</td>" +
            "<td>" + mul + "</td>" +
        "</tr>" +
        "<tr>" +
            "<td>Division</td>" +
            "<td>" + div + "</td>" +
        "</tr>" +
    "</table>"
);
