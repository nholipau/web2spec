import sys
from google import genai
import os
from datetime import datetime

client = genai.Client(api_key=os.environ.get("GEMINI_API_KEY"))

model = "gemini-2.0-flash"

html = sys.stdin.read()
url = sys.argv[1]

prompt = f"""
You are a test engineer. Based on the HTML below, generate a WebdriverIo spec file that includes:


1. Useful selectors (by ID, class, or attributes)

2. Possible interactions that a user can perform

Send me a ready to use file with the test scripts, describes and its. Not comments of examples.

Just create tests for elements you consider important, like titles, texts, forms and etc. Leave aside menu items and not necessary items. This sould be an mvp 

The navigation should be to url: ${url}.

Before every test, it should navigate to the given url.

Encapsulate common functions like returning home, for future reuse.

HTML:
{html}
"""

response = client.models.generate_content(
    model=model,
    contents=prompt
)
spec_text = response.text.strip()

if spec_text.startswith("```"):
    lines = spec_text.splitlines()
    # Remove primeira e última linha (delimitadores Markdown)
    if len(lines) >= 3:
        spec_text = "\n".join(lines[1:-1])

output_dir = "ai_files"
os.makedirs(output_dir, exist_ok=True)

# Define nome do arquivo com timestamp
timestamp = datetime.now().strftime("%Y%m%d-%H%M%S")
output_file = os.path.join(output_dir, f"spec-{timestamp}.js")

# Salva a resposta no arquivo
with open(output_file, "w", encoding="utf-8") as f:
    f.write(spec_text)

# (Opcional) Imprime só o caminho do arquivo
print(f"✅ Arquivo gerado: {output_file}")
