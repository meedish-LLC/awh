import json
import re

with open("scratch/studio.html", "r", encoding="utf-8") as f:
    text = f.read()

pos_gal = text.find('comp-k9yhiq5c_galleryData')
print("pos_gal:", pos_gal)

items_pos = text.find('"items":[', pos_gal)
print("items_pos:", items_pos)

start = items_pos + len('"items":')
depth = 0
end = -1
for i in range(start, len(text)):
    if text[i] == '[':
        depth += 1
    elif text[i] == ']':
        depth -= 1
        if depth == 0:
            end = i
            break

print(f"Array slice bounds: {start} to {end} (length: {end - start})")
array_json_str = text[start:end+1]

items = json.loads(array_json_str)
print(f"Successfully parsed {len(items)} team gallery items!")

clean_team = []
for idx, item in enumerate(items):
    meta = item.get("metaData", {})
    desc = meta.get("description", "")
    title = item.get("title", "")
    media_url = item.get("mediaUrl", "")
    direct_link = item.get("directLink", {}).get("url", "") if item.get("directLink") else ""
    
    # Process description
    lines = [l.strip() for l in desc.split("\n") if l.strip()]
    header = lines[0] if lines else title
    
    # Extract email
    email = ""
    email_match = re.search(r'([a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+)', desc)
    if email_match:
        email = email_match.group(1)
        
    # Name & credentials
    parts = header.split(",")
    name = parts[0].strip()
    credentials = ", ".join([p.strip() for p in parts[1:]]) if len(parts) > 1 else ""
    
    # Bio body
    body_lines = []
    for l in lines[1:]:
        if email and email in l:
            continue
        if "linkedin.com" in l:
            continue
        body_lines.append(l)
    bio = "\n\n".join(body_lines)
    
    # Determine appropriate role
    role = "Architectural Designer"
    if "Alex Haecker" in name:
        role = "Founder & Principal Architect"
    elif "Director of Operations" in header or "Director of Operations" in credentials:
        role = "Director of Operations"
        credentials = credentials.replace("Director of Operations", "").strip(", ")
    elif "Phius Alliance" in header or "Phius" in credentials:
        role = "Architect & Phius Certified Passive House Lead"
    elif "LEED AP" in credentials:
        role = "Senior Architect & Sustainability Lead"
    elif "Erika Spande" in name:
        role = "Residential & Landscape Design Specialist"
    elif "AIA Associate" in credentials:
        role = "Associate Architect"

    img = f"https://static.wixstatic.com/media/{media_url}" if media_url else ""

    print(f"\n[{idx+1}] {name} | {credentials} | Role: {role}")
    print("Email:", email)
    print("LinkedIn:", direct_link)
    print("Image:", img)
    print("Bio:", bio[:180] + "...")
    
    clean_team.append({
        "name": name,
        "credentials": credentials,
        "role": role,
        "email": email,
        "linkedin": direct_link,
        "image": img,
        "bio": bio
    })
    
with open("scratch/wix_live_team.json", "w", encoding="utf-8") as f:
    json.dump(clean_team, f, indent=2)
print("\nSaved scratch/wix_live_team.json successfully!")
