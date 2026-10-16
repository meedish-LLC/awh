import re
import json

with open("scratch/studio.html", "r", encoding="utf-8") as f:
    html = f.read()

# Look for script tags with JSON
scripts = re.findall(r'<script[^>]*>(.*?)</script>', html, re.DOTALL)
print(f"Total script tags: {len(scripts)}")

# Search for Jacob Dommer, Alan, and other team members
print("\n--- Searching for team member text snippets ---")
matches = re.findall(r'([^<]{10,200}(?:architect|principal|designer|associate|intern|director|Dommer|Alan|AIA|founder|team)[^<]{10,200})', html, re.IGNORECASE)
unique_matches = set()
for m in matches:
    clean = ' '.join(m.split())
    if len(clean) > 20 and not clean.startswith('function') and not clean.startswith('var '):
        unique_matches.add(clean)

for m in sorted(unique_matches)[:30]:
    print("MATCH:", m)

# Search for JSON blocks in scripts
for i, s in enumerate(scripts):
    s_clean = s.strip()
    if 'Dommer' in s_clean or 'Alan' in s_clean or 'people' in s_clean:
        print(f"\nScript #{i} contains keywords (length: {len(s_clean)})")
        # Try to find JSON objects
        json_objs = re.findall(r'(\{[\s\S]*?\})', s_clean)
        for obj in json_objs:
            if 'Dommer' in obj:
                print("Found Dommer in JSON block! (sample):", obj[:300])

