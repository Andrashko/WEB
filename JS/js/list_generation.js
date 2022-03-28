let count = parseInt(prompt("введіть кілкість пунктів", "3"));
document.write("<ul>");
for (let i = 1; i <= count; i++)
    document.write(`<li> ${i} </li>`);
document.write("</ul>");