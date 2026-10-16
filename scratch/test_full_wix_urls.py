import urllib.request
import re

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Referer': 'https://www.awharchitects.com/'
}

with open("scratch/studio.html", "r", encoding="utf-8") as f:
    html = f.read()

# Match complete img src or srcSet
img_urls = re.findall(r'srcSet="([^"]+)"', html)
all_links = []
for s in img_urls:
    parts = s.split(",")
    for p in parts:
        u = p.strip().split(" ")[0]
        if 'wixstatic.com' in u:
            all_links.append(u)

srcs = re.findall(r'src="(https://static\.wixstatic\.com/media/[^"]+)"', html)
all_links.extend(srcs)

print(f"Total links collected: {len(all_links)}")

success = 0
for u in list(set(all_links))[:10]:
    try:
        req = urllib.request.Request(u, headers=headers)
        with urllib.request.urlopen(req, timeout=5) as r:
            print(f"[OK {r.status}] {u[:80]}")
            success += 1
    except Exception as e:
        print(f"[ERR] {u[:80]} -> {e}")

print(f"Success: {success}/10")
