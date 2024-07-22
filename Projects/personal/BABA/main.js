$(function () {
    console.log("keke is me");
    var colors = ['red', 'green', 'blue', 'orange', 'yellow'];
$("#texttobaba").change(function() {
    const text = $("#texttobaba").val();
    const output = $("#babatext");
    output.empty(); // Clear previous content
    const words = text.split(" ");
    words.forEach(word => {
        const randomElement = colors[Math.floor(Math.random() * colors.length)];
        let brick = document.createElement("div");
        brick.style.color = randomElement
        brick.textContent = word.toUpperCase();
        brick.className = "bababrick"; // Use class name as a string
        output.append(brick); // Append the brick to the output first
        adjustFontSize(brick, word); // Adjust font size after appending
    });
});

function adjustFontSize(element, word) {
    const maxSize = element.clientWidth; // The maximum width and height of the square
    let fontSize = 18; // Start with a default font size
    console.log(maxSize)
    element.style.fontSize = fontSize + "px";
    while ((element.scrollWidth > maxSize || element.scrollHeight > maxSize) && fontSize > 1) {
        fontSize -= 1;
        element.style.fontSize = fontSize + "px";
        
    }
    if (word.length > 3 && word.length < 5) {
    element.style.fontSize = (fontSize + 4) + "px";
    element.style.lineHeight = "10px";
}
if (word.length == 6 ) {
    element.style.fontSize = (fontSize + 2) + "px";
    element.style.lineHeight = "10px";}

}})

function adjustFontSizeold(element, word) {
    const maxSize = element.clientWidth; // The maximum width and height of the square
    let fontSize = 24; // Start with a default font size
    console.log(maxSize)
    if (word.length = 3) {
        element.style.fontSize = "13px";
        element.style.lineHeight = "10px";
    }
    if (word.length > 3) {
        element.style.fontSize = "15px";
        element.style.lineHeight = "10px";
    }}