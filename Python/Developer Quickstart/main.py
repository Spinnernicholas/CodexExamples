#This example is supposed to simulate the Codex JavaScript Sandbox provided by OpenAI
import os
import openai
import pprint

command = "Display a fancy hello world"

# Load your API key from an environment variable or secret management service
openai.api_key = os.getenv("OPENAI_API_KEY")

response = openai.Completion.create(
    engine="davinci-codex",
    max_tokens=1000,
    stop="/* Command:",
    temperature = 0,
    prompt="<|endoftext|>/* I start with a blank HTML page, and incrementally modify it via <script> injection. Written for Chrome. */\n/* Command: Add \"Hello World\", by adding an HTML DOM node */\nvar helloWorld = document.createElement('div');\nhelloWorld.innerHTML = 'Hello World';\ndocument.body.appendChild(helloWorld);\n/* Command: Clear the page. */\nwhile (document.body.firstChild) {\n  document.body.removeChild(document.body.firstChild);\n}\n\n/* Command: " + command + " */\n"
)

pprint.pprint(response)