document.getElementById("ttsForm").addEventListener("submit", function(event) {
    // Prevent default page reload
    setTimeout(() => {
        showMessage("✅ Your text is being spoken 🎤");
    }, 200); 
});

// Function to display message
function showMessage(msg) {
    let messageBox = document.getElementById("message");
    messageBox.innerText = msg;
    messageBox.style.display = "block";

    // Hide after 3 seconds
    setTimeout(() => {
        messageBox.style.display = "none";
    }, 3000);
}

const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");
const downloadBtn = document.getElementById("downloadBtn");
const textInput = document.getElementById("text");
const genderSelect = document.getElementById("gender");
const messageBox = document.getElementById("message");

let synth = window.speechSynthesis;
let utterance;

// Play button
playBtn.addEventListener("click", () => {
    if (!textInput.value) return alert("Please enter some text!");
    if (synth.speaking) synth.cancel();

    utterance = new SpeechSynthesisUtterance(textInput.value);

    

    // Select voice
    const voices = synth.getVoices();
    utterance.voice = voices.find(v => {
        if (genderSelect.value === "female") return v.name.toLowerCase().includes("female") || v.name.toLowerCase().includes("zira") || v.name.toLowerCase().includes("samantha");
        else return v.name.toLowerCase().includes("male") || v.name.toLowerCase().includes("david") || v.name.toLowerCase().includes("mark");
    }) || voices[0];

    synth.speak(utterance);
    showMessage("Speaking...");
});

// Pause/Resume button
pauseBtn.addEventListener("click", () => {
    if (!synth.speaking) return;
    if (synth.paused) {
        synth.resume();
        showMessage("Resumed");
    } else {
        synth.pause();
        showMessage("Paused");
    }
});

// Download button using a temporary link
downloadBtn.addEventListener("click", () => {
    if (!textInput.value) return alert("Please enter some text!");
    const utter = new SpeechSynthesisUtterance(textInput.value);
    const blob = new Blob([textInput.value], { type: "text/plain" }); // simple text download
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "speech.txt"; // can be converted to mp3 server-side
    a.click();
    URL.revokeObjectURL(url);
    showMessage("Text downloaded (for actual audio download, server-side conversion needed)");
});

// Message box helper
function showMessage(msg) {
    messageBox.style.display = "block";
    messageBox.textContent = msg;
    setTimeout(() => messageBox.style.display = "none", 2000);
}
