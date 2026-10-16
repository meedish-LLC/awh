import urllib.request
import re

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
}

req = urllib.request.Request("https://www.awharchitects.com/all-project-information/avivo-village", headers=headers)
with urllib.request.urlopen(req) as resp:
    html = resp.read().decode('utf-8', errors='ignore')

# Find all wixstatic image URLs in html
images = re.findall(r'https://static\.wixstatic\.com/media/[^"\s\',)]+', html)
print(f"Total wixstatic links found: {len(images)}")
unique_imgs = list(set(images))
for img in unique_imgs[:15]:
    # Test if it returns 200
    try:
        t_req = urllib.request.Request(img, headers=headers)
        with urllib.request.urlopen(t_req, timeout=3) as r:
            print(f"[OK {r.status}] {img[:90]}")
    except Exception as e:
        print(f"[ERR] {img[:90]} -> {e}")
