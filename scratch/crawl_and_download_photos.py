import urllib.request
import re
import os

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Referer': 'https://www.awharchitects.com/'
}

os.makedirs("public/images/projects", exist_ok=True)
os.makedirs("public/images/markets", exist_ok=True)

# Pages to crawl for images
pages = [
    "https://www.awharchitects.com/",
    "https://www.awharchitects.com/services",
    "https://www.awharchitects.com/work",
    "https://www.awharchitects.com/zenithdchs",
    "https://www.awharchitects.com/avivovillages",
    "https://www.awharchitects.com/hewinghotel",
    "https://www.awharchitects.com/sanctuary-lofts",
    "https://www.awharchitects.com/field-store-house",
    "https://www.awharchitects.com/bysauna",
    "https://www.awharchitects.com/services-phius-certification",
    "https://www.awharchitects.com/historic-consulting",
    "https://www.awharchitects.com/cannabis-facility-design-minnesota-us"
]

all_img_candidates = set()

for p in pages:
    try:
        req = urllib.request.Request(p, headers=headers)
        with urllib.request.urlopen(req, timeout=5) as resp:
            html = resp.read().decode('utf-8', errors='ignore')
            found = re.findall(r'https://static\.wixstatic\.com/media/([a-zA-Z0-9_~]+(?:\.jpg|\.png|\.webp))', html)
            for f in found:
                if not f.startswith('11062b') and not f.startswith('405734') and not f.startswith('aa0402') and not f.startswith('e1aa08'):
                    all_img_candidates.add(f)
    except Exception as e:
        print(f"Error on {p}: {e}")

print(f"Total unique architectural image candidates: {len(all_img_candidates)}")

# Download each candidate and check size
downloaded_images = []
for idx, f in enumerate(sorted(all_img_candidates)):
    url = f"https://static.wixstatic.com/media/{f}"
    target = f"public/images/projects/img_{idx+1}{os.path.splitext(f)[1]}"
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=6) as r, open(target, 'wb') as out:
            out.write(r.read())
        sz = os.path.getsize(target)
        if sz > 20000: # larger than 20KB is a real photo, not a badge/icon
            print(f"[OK] Downloaded {f} -> {target} ({sz} bytes)")
            downloaded_images.append({
                "filename": target.replace("public", ""),
                "wix_id": f,
                "size": sz
            })
        else:
            os.remove(target)
    except Exception as ie:
        pass

print(f"\nSuccessfully downloaded {len(downloaded_images)} real high-res architectural photos!")
with open("scratch/downloaded_photos.json", "w", encoding="utf-8") as f:
    import json
    json.dump(downloaded_images, f, indent=2)
