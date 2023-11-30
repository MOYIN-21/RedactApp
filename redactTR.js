function redactContent() {
    const content = document.getElementById("content").value;
    const redactWords = document.getElementById("redactWords").value.split(" ");
    const redactedOutput = document.getElementById("redactedOutput");

    if (content.trim() === "") {
        alert("Please enter some content to redact.");
        return;
    }

    const redactedText = redactWords.reduce((result, word) => {
        const regex = new RegExp('\\b${word}\\b', "gi");
        return result.replace(regex, 'Semicolon');
    }, content);

    redactedOutput.innerText = redactedText;
}