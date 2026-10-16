import urllib.request
import os
import re
import json

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
}

os.makedirs("public/images/team", exist_ok=True)
os.makedirs("public/images/projects", exist_ok=True)

# 1. Download Team Images
team_members = [
    ("alex-haecker", "https://static.wixstatic.com/media/14cfd9_9edb6be8b68e4a17bbf129db0079f19e~mv2.jpg"),
    ("nardos-shitta", "https://static.wixstatic.com/media/14cfd9_1ad6fe719e8643a3b4ac79989e4c5727~mv2.jpg"),
    ("john-greene", "https://static.wixstatic.com/media/e9e504_e3839f8a656640328d3548793c5d7a3e~mv2.jpg"),
    ("wes-pfeifer", "https://static.wixstatic.com/media/e9e504_6c27c818c85a41168e57631557ba6f0c~mv2.jpg"),
    ("namdi-alexander", "https://static.wixstatic.com/media/e9e504_323b553b98c34af5900b54d06ad8cec2~mv2.jpg"),
    ("jacob-dommer", "https://static.wixstatic.com/media/e9e504_84ca10bc668044528cdfb8244ca20750~mv2.jpg"),
    ("lawrence-black", "https://static.wixstatic.com/media/e9e504_454d2391018b400eb57583955eb941d2~mv2.png"),
    ("erika-spande", "https://static.wixstatic.com/media/e9e504_fc362c63766d4a908ee7a3237d95d8fd~mv2.jpg"),
    ("jillian-humphreys", "https://static.wixstatic.com/media/14cfd9_ef9b645a2b91401da88f49855274bdfb~mv2.png")
]

print("=== Downloading Team Images ===")
for slug, url in team_members:
    ext = ".png" if url.endswith(".png") else ".jpg"
    target = f"public/images/team/{slug}{ext}"
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req) as resp, open(target, 'wb') as out:
            out.write(resp.read())
        print(f"[OK] Downloaded {slug} -> {target} ({os.path.getsize(target)} bytes)")
    except Exception as e:
        print(f"[FAIL] {slug} -> {e}")

# 2. Extract and download real project images from live project pages
project_pages = {
    "avivo-village": "https://www.awharchitects.com/avivovillages",
    "centro-highland": "https://www.awharchitects.com/all-project-information/centro-highland",
    "guardian-building": "https://www.awharchitects.com/guardianbuilding",
    "maytag": "https://www.awharchitects.com/maytag",
    "bowman-passive": "https://www.awharchitects.com/bowman-passive-house",
    "bold-orange": "https://www.awharchitects.com/all-project-information/bold-orange",
    "nokomis-solar": "https://www.awharchitects.com/nokomissolarpavilion",
    "loring-corners": "https://www.awharchitects.com/all-project-information/loring-corners",
    "sanctuary-lofts": "https://www.awharchitects.com/sanctuary-lofts",
    "field-store": "https://www.awharchitects.com/field-store-house",
    "sauna": "https://www.awharchitects.com/bysauna"
}

print("\n=== Extracting and Downloading Project Images ===")
project_images_map = {}

for proj_id, page_url in project_pages.items():
    print(f"\nProcessing {proj_id} ({page_url})...")
    try:
        req = urllib.request.Request(page_url, headers=headers)
        with urllib.request.urlopen(req) as resp:
            html = resp.read().decode('utf-8', errors='ignore')
            
        # Find all Wix image URLs
        # In Wix, images are in <img src="..." or data-image-info or static.wixstatic.com
        raw_imgs = re.findall(r'https://static\.wixstatic\.com/media/([a-zA-Z0-9_~]+(?:\.jpg|\.png|\.webp))', html)
        valid_imgs = list(dict.fromkeys(raw_imgs))
        
        saved_imgs = []
        for i, img_filename in enumerate(valid_imgs[:4]):
            img_url = f"https://static.wixstatic.com/media/{img_filename}"
            ext = os.path.splitext(img_filename)[1]
            local_name = f"{proj_id}-{i+1}{ext}"
            target_path = f"public/images/projects/{local_name}"
            
            try:
                img_req = urllib.request.Request(img_url, headers=headers)
                with urllib.request.urlopen(img_req, timeout=8) as r, open(target_path, 'wb') as f_out:
                    f_out.write(r.read())
                sz = os.path.getsize(target_path)
                if sz > 1000: # not an empty or tiny tracking pixel
                    print(f"  [OK] Saved {local_name} ({sz} bytes)")
                    saved_imgs.append(f"/images/projects/{local_name}")
                else:
                    os.remove(target_path)
            except Exception as ie:
                print(f"  [FAIL] {img_filename} -> {ie}")
                
        project_images_map[proj_id] = saved_imgs
    except Exception as pe:
        print(f"Error fetching page {proj_id}:", pe)

with open("scratch/project_images_map.json", "w", encoding="utf-8") as f:
    json.dump(project_images_map, f, indent=2)

print("\nSummary of project images downloaded:")
for k, v in project_images_map.items():
    print(f" - {k}: {len(v)} images")
