import urllib.request
import re
import json

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

# Let's inspect dynamic sitemap:
req = urllib.request.Request("https://www.awharchitects.com/dynamic-all-project-information_p_7b934463_1160_4b4d_805a_9b247c743ecc_0_5000-sitemap.xml", headers=headers)
with urllib.request.urlopen(req) as resp:
    sitemap_xml = resp.read().decode('utf-8', errors='ignore')

# Check if image:loc exists
img_locs = re.findall(r'<image:loc>(.*?)</image:loc>', sitemap_xml)
print(f"Found {len(img_locs)} images in dynamic project sitemap!")
for img in img_locs[:10]:
    print(" -", img)

# Also check pages-sitemap.xml
req2 = urllib.request.Request("https://www.awharchitects.com/pages-sitemap.xml", headers=headers)
with urllib.request.urlopen(req2) as resp:
    pages_xml = resp.read().decode('utf-8', errors='ignore')

img_locs2 = re.findall(r'<image:loc>(.*?)</image:loc>', pages_xml)
print(f"\nFound {len(img_locs2)} images in pages sitemap!")
for img in img_locs2[:10]:
    print(" -", img)

# Also inspect home page for all images
req3 = urllib.request.Request("https://www.awharchitects.com/", headers=headers)
with urllib.request.urlopen(req3) as resp:
    home_html = resp.read().decode('utf-8', errors='ignore')

home_imgs = re.findall(r'https://static\.wixstatic\.com/media/([a-zA-Z0-9_~]+(?:\.jpg|\.png|\.webp))', home_html)
print(f"\nFound {len(home_imgs)} images on Home Page:")
for img in list(dict.fromkeys(home_imgs))[:10]:
    print(" - https://static.wixstatic.com/media/" + img)
