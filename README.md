# 🎙️ AI Powered Text-to-Speech

A simple and interactive **Text-to-Speech (TTS) web application** built using **Python Flask, JavaScript, HTML, and CSS**.

The application allows users to enter text, select a preferred voice gender, listen to the text being spoken, pause/resume speech, and download the entered text as a `.txt` file.

---

## 🚀 Features

* 🎤 Convert text into speech
* 👩 Female voice selection
* 👨 Male voice selection
* ▶️ Play speech
* ⏸️ Pause and resume speech
* 📥 Download entered text as a `.txt` file
* 💬 User-friendly status messages
* 📱 Responsive web interface
* ✨ Glassmorphism UI design
* 🐍 Flask backend
* 🌐 Browser-based speech synthesis

---

## 🛠️ Technologies Used

### Backend

* Python
* Flask
* pyttsx3

### Frontend

* HTML5
* CSS3
* JavaScript
* Web Speech API

---

## 📂 Project Structure

```text
Text-to-Speech/
│
├── app.py
├── requirements.txt
│
├── static/
│   ├── script.js
│   └── styles.css
│
├── templates/
│   └── index.html
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/Text-to-Speech.git
```

### 2. Navigate to the Project Directory

```bash
cd Text-to-Speech
```

### 3. Create a Virtual Environment

```bash
python -m venv venv
```

### 4. Activate the Virtual Environment

**Windows:**

```bash
venv\Scripts\activate
```

**macOS/Linux:**

```bash
source venv/bin/activate
```

### 5. Install Dependencies

```bash
pip install -r requirements.txt
```

---

## ▶️ Run the Application

Start the Flask application:

```bash
python app.py
```

The application will run locally at:

```text
http://127.0.0.1:5000/
```

Open the URL in your browser to use the application.

---

## 🖥️ How to Use

1. Open the application in your browser.
2. Select **Male** or **Female** voice.
3. Enter the text you want to convert into speech.
4. Click **▶ Play** to start speaking.
5. Click **⏸ Pause** to pause the speech.
6. Click the pause button again to resume.
7. Click **Download Text File** to download the entered text.

---

## 🔊 Voice Selection

The application supports voice selection based on the available voices on the user's system/browser.

The JavaScript implementation searches available browser voices for names associated with:

* Female voices: `female`, `zira`, `samantha`
* Male voices: `male`, `david`, `mark`

If a matching voice is not available, the application uses the first available browser voice.

---

## 🏗️ Application Architecture

```text
             ┌──────────────────────┐
             │      User Input      │
             │   Text + Voice Type  │
             └──────────┬───────────┘
                        │
                        ▼
             ┌──────────────────────┐
             │     HTML / CSS       │
             │    User Interface    │
             └──────────┬───────────┘
                        │
                        ▼
             ┌──────────────────────┐
             │     JavaScript       │
             │ Web Speech API       │
             │ Play / Pause / Voice │
             └──────────┬───────────┘
                        │
                        ▼
             ┌──────────────────────┐
             │      Flask App       │
             │      Python          │
             │      pyttsx3         │
             └──────────────────────┘
```

---

## 📦 Dependencies

The project uses the following Python packages:

```text
Flask==2.3.3
pyttsx3==2.90
```

Install them using:

```bash
pip install -r requirements.txt
```

---

## 📸 Interface

The application provides a modern **glassmorphism-style interface** with:

* Text input area
* Voice gender selector
* Play button
* Pause/Resume button
* Text download button
* Speech status messages

You can add screenshots of your application here:

```markdown
![Application Screenshot](screenshots/home.png)
```

---

## 🔮 Future Improvements

The project can be enhanced with:

* 🎧 Download speech as MP3/WAV
* 🎚️ Speech speed control
* 🔊 Volume control
* 🌍 Multiple language support
* 🗣️ More voice options
* 📄 Upload text files
* 📋 Copy text functionality
* 🌐 Deploy the application online
* 🎨 Improved accessibility and UI
* 🤖 Integration with advanced AI voice models

---

## ⚠️ Current Limitation

The **Download** button currently downloads the entered text as a `.txt` file.

It does **not** generate an audio file such as MP3 or WAV.

Actual audio downloading would require server-side audio generation or another text-to-speech service/library.

---

## 🎯 Learning Outcomes

Through this project, the following concepts can be practiced:

* Flask web application development
* Python backend development
* HTML and CSS UI design
* JavaScript DOM manipulation
* Browser Web Speech API
* Python text-to-speech using `pyttsx3`
* Frontend-backend integration
* Handling user input
* Creating interactive web applications

---

## 👩‍💻 Author

**Anupama**

GitHub: `https://github.com/SuchitraAnupama25`

---

## 📄 License

This project is open-source and available for educational and personal use.
