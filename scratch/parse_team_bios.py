import re
import json

with open("scratch/studio.html", "r", encoding="utf-8") as f:
    text = f.read()

names = [
    'Alex Haecker',
    'Nardos Shitta',
    'John Greene',
    'Wes Pfeifer',
    'Namdi Alexander',
    'Jacob Dommer',
    'Lawrence Black',
    'Erika Spande'
]

team_data = []

for name in names:
    print(f"\n==================== {name} ====================")
    pos = 0
    snippets = []
    while True:
        pos = text.find(name, pos)
        if pos == -1:
            break
        # Take a wider window around the occurrence
        snippet = text[max(0, pos-100):min(len(text), pos+1500)]
        snippets.append(snippet)
        pos += len(name) + 1
    
    # Find the snippet containing description or bio
    bio = ""
    credentials = ""
    role = ""
    image_url = ""

    # Look for image with alt="...Name Profile..."
    img_match = re.search(r'src="([^"]+)"[^>]*alt="' + re.escape(name) + r' Profile"', text)
    if not img_match:
        img_match = re.search(r'alt="' + re.escape(name) + r' Profile"[^>]*src="([^"]+)"', text)
    if not img_match:
        # Check wix image url format with mv2
        img_match = re.search(r'(https://static\.wixstatic\.com/media/[^"\s]+~mv2\.(?:jpg|png|webp))[^"]*alt="' + re.escape(name), text)
    if not img_match:
        # Check nearby snippet
        img_match = re.search(r'(https://static\.wixstatic\.com/media/[a-zA-Z0-9_~.]+)', snippets[0] if snippets else "")

    if img_match:
        image_url = img_match.group(1)
        print("Image URL:", image_url)

    # Search for description in snippets
    for snip in snippets:
        # Look for "description":"..."
        desc_match = re.search(r'"description"\s*:\s*"((?:\\.|[^"\\])*)"', snip)
        if desc_match:
            raw_desc = desc_match.group(1).encode().decode('unicode-escape')
            print("Raw Desc:", raw_desc[:200])
            bio = raw_desc
            break
        # Or look for HTML text
        text_chunks = re.findall(r'>([^<]{20,})<', snip)
        for chunk in text_chunks:
            if name in chunk or len(chunk) > 100:
                print("Text Chunk:", chunk[:200])
                if not bio or len(chunk) > len(bio):
                    bio = chunk

    team_data.append({
        "name": name,
        "image": image_url,
        "bio_raw": bio
    })

with open("scratch/extracted_team.json", "w", encoding="utf-8") as f:
    json.dump(team_data, f, indent=2)

print("\nSaved scratch/extracted_team.json")
