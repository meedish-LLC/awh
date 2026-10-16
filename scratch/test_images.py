import urllib.request
import re
import json

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

with open("src/data/siteData.js", "r", encoding="utf-8") as f:
    text = f.read()

urls = list(set(re.findall(r'https?://[^\s"\',]+', text)))
print(f"Total image/asset URLs in siteData.js: {len(urls)}")

failing = []
working = []

for u in sorted(urls):
    if not any(ext in u.lower() for ext in ['.jpg', '.png', '.webp', '.jpeg', 'unsplash']):
        continue
    try:
        req = urllib.request.Request(u, headers=headers)
        with urllib.request.urlopen(req, timeout=5) as resp:
            status = resp.status
            content_type = resp.headers.get('Content-Type', '')
            print(f"[OK {status}] {u[:80]} ({content_type})")
            working.append(u)
    except Exception as e:
        print(f"[FAIL] {u} -> {e}")
        failing.append(u)

print(f"\nWorking: {len(working)}, Failing: {len(failing)}")
