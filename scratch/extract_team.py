import json
import re

with open("scratch/studio.html", "r", encoding="utf-8") as f:
    text = f.read()

# Look for all occurrences of "metaData":{"description": or similar JSON objects
# In Wix Pro Gallery, items have title, description, mediaUrl, etc.
pattern = r'\{\s*"[^{}]*?"title"\s*:\s*"([^"]+)"[^{}]*?"metaData"\s*:\s*\{"description"\s*:\s*"([^"]+)"[^{}]*?\}'

# Alternatively, find all "metaData":{ ... }
meta_matches = re.findall(r'"metaData":\s*(\{[^{}]*?"description"[^{}]*?\})', text)
print(f"Found {len(meta_matches)} metaData matches")

people = []
# Also find all image alts that have "Profile"
profiles = re.findall(r'alt="([^"]*?Profile[^"]*?)"', text)
print("Profile alts found:", profiles)

# Let's search for "Jacob Dommer" block and inspect surrounding JSON
pos = text.find("Jacob Dommer")
if pos != -1:
    # Find enclosing array or object
    start = text.rfind('[', 0, pos)
    end = text.find(']', pos)
    print(f"Array bounds: start={start}, end={end}, len={end-start}")
    array_text = text[start:end+1]
    with open("scratch/team_raw.json", "w", encoding="utf-8") as f:
        f.write(array_text)
    
    # Try parsing
    try:
        items = json.loads(array_text)
        print(f"Successfully parsed {len(items)} items from Wix Gallery array!")
        for i, item in enumerate(items):
            title = item.get("title", "")
            meta = item.get("metaData", {})
            desc = meta.get("description", "")
            media = item.get("mediaUrl", "")
            print(f"\n--- Person {i+1} ---")
            print("Title:", title)
            print("Media:", media)
            print("Description:\n", desc[:300])
    except Exception as e:
        print("JSON parse error:", e)
        # Regex search inside array_text
        titles = re.findall(r'"title"\s*:\s*"([^"]+)"', array_text)
        print("Found titles:", titles)
