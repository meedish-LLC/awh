import json
import re

print("=== Extracting Values from scratch/values.html ===")
with open("scratch/values.html", "r", encoding="utf-8") as f:
    val_text = f.read()

# Look for values text
vals_matches = re.findall(r'>([^<]{30,600})<', val_text)
clean_vals = []
for v in vals_matches:
    c = ' '.join(v.split())
    if any(k in c.lower() for k in ['pragmatism', 'energy', 'water', 'reuse', 'social equity', 'justice', 'community']):
        clean_vals.append(c)

print(f"Found {len(clean_vals)} value snippets:")
for v in clean_vals[:10]:
    print(" -", v[:150])

print("\n=== Extracting Press from scratch/press.html ===")
with open("scratch/press.html", "r", encoding="utf-8") as f:
    press_text = f.read()

press_matches = re.findall(r'>([^<]{20,300})<', press_text)
clean_press = []
for p in press_matches:
    c = ' '.join(p.split())
    if any(k in c.lower() for k in ['award', 'honor', 'featured', 'published', 'tribune', 'journal', 'historic', 'passive', 'architecture', 'news']):
        if not c.startswith('function') and not c.startswith('var '):
            clean_press.append(c)

print(f"Found {len(clean_press)} press snippets:")
for p in clean_press[:15]:
    print(" -", p)
