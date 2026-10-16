import urllib.request
import re
import json

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

projects_to_fetch = [
    ("avivo-village", "https://www.awharchitects.com/all-project-information/avivo-village"),
    ("centro-highland", "https://www.awharchitects.com/all-project-information/centro-highland"),
    ("bowman-passive-house", "https://www.awharchitects.com/all-project-information/bowman-passive-house"),
    ("loring-corners", "https://www.awharchitects.com/all-project-information/loring-corners"),
    ("maytag", "https://www.awharchitects.com/maytag"),
    ("guardian-building", "https://www.awharchitects.com/guardianbuilding"),
    ("bold-orange", "https://www.awharchitects.com/all-project-information/bold-orange"),
    ("nokomis-solar-pavilion", "https://www.awharchitects.com/all-project-information/nokomis-solar-pavillion")
]

extracted_projects = []

for slug, url in projects_to_fetch:
    print(f"\nFetching {slug}...")
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req) as resp:
            html = resp.read().decode('utf-8', errors='ignore')
            
        title_match = re.search(r'<title>(.*?)</title>', html)
        title = title_match.group(1).replace("- AWH Architects", "").replace("| AWH Architects", "").strip() if title_match else slug
        
        # Look for images on wixstatic
        images = list(set(re.findall(r'https://static\.wixstatic\.com/media/[a-zA-Z0-9_~]+(?:\.jpg|\.png|\.webp)', html)))
        
        # Look for body text
        text_chunks = re.findall(r'>([^<]{40,})<', html)
        body_text = []
        for t in text_chunks:
            c = ' '.join(t.split())
            if not c.startswith('function') and not c.startswith('var ') and 'wix' not in c.lower() and len(c) > 60:
                body_text.append(c)
                
        print(f"Title: {title}")
        print(f"Images found: {len(images)}")
        print(f"Body text samples: {len(body_text)}")
        if body_text:
            print("Summary:", body_text[0][:150])
            
        extracted_projects.append({
            "slug": slug,
            "title": title,
            "images": images[:4],
            "body": "\n\n".join(body_text[:5])
        })
    except Exception as e:
        print(f"Error fetching {slug}:", e)

with open("scratch/extracted_real_projects.json", "w", encoding="utf-8") as f:
    json.dump(extracted_projects, f, indent=2)

print("\nSaved scratch/extracted_real_projects.json")
