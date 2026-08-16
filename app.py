from flask import Flask, request, render_template
import pyttsx3

app = Flask(__name__)

def set_voice(engine, gender="female"):
    voices = engine.getProperty("voices")
    gender = gender.lower()
    for voice in voices:
        name = voice.name.lower()
        if gender == "male" and ("male" in name or "david" in name or "mark" in name or "alex" in name):
            engine.setProperty("voice", voice.id)
            return True
        elif gender == "female" and ("female" in name or "zira" in name or "susan" in name or "samantha" in name or "victoria" in name):
            engine.setProperty("voice", voice.id)
            return True
    return False

@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        gender = request.form.get("gender")
        text = request.form.get("text")

        engine = pyttsx3.init()
        engine.setProperty("rate", 150)
        engine.setProperty("volume", 1.0)

        if not set_voice(engine, gender):
            print("⚠️ No matching voice found, using default.")

        engine.say(text)
        engine.runAndWait()

    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True)
