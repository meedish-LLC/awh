import urllib.request
import re
import os

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
}

os.makedirs("public/images/projects", exist_ok=True)

# List of projects and their real wix image IDs extracted from live pages
wix_project_images = {
    "avivo-village": "https://static.wixstatic.com/media/14cfd9_41884aab8f964db09b7381541af5d3c7~mv2.jpg",
    "centro-highland": "https://static.wixstatic.com/media/14cfd9_9edb6be8b68e4a17bbf129db0079f19e~mv2.jpg",
    "guardian-building": "https://static.wixstatic.com/media/e9e504_c408fbab45524bb68f7a711f339ef481~mv2.png",
    "maytag": "https://static.wixstatic.com/media/e9e504_e3839f8a656640328d3548793c5d7a3e~mv2.jpg",
    "bowman-passive": "https://static.wixstatic.com/media/e9e504_ae7709f909204fd0b47c2e8f1f113cb9~mv2.png",
    "bold-orange": "https://static.wixstatic.com/media/e9e504_323b553b98c34af5900b54d06ad8cec2~mv2.jpg",
    "nokomis-solar": "https://static.wixstatic.com/media/14cfd9_41884aab8f964db09b7381541af5d3c7~mv2.jpg",
    "loring-corners": "https://static.wixstatic.com/media/e9e504_6c27c818c85a41168e57631557ba6f0c~mv2.jpg",
    "community-market": "https://static.wixstatic.com/media/14cfd9_41884aab8f964db09b7381541af5d3c7~mv2.jpg",
    "passive-house-market": "https://static.wixstatic.com/media/e9e504_ae7709f909204fd0b47c2e8f1f113cb9~mv2.png",
    "historic-market": "https://static.wixstatic.com/media/e9e504_c408fbab45524bb68f7a711f339ef481~mv2.png"
}

# Let's also check specific project images from pages
project_pages = [
    ("avivovillages", "avivo-village"),
    ("guardianbuilding", "guardian-building"),
    ("maytag", "maytag"),
    ("bowman-passive-house", "bowman-passive"),
    ("nokomissolarpavilion", "nokomis-solar"),
    ("sanctuary-lofts", "sanctuary-lofts"),
    ("hewinghotel", "hewing-hotel"),
    ("bysauna", "backyard-sauna"),
    ("edisonhsgreencampus", "edison-high-school"),
    ("cannabis-facility-design-minnesota-us", "cannabis-facility")
]

print("=== Fetching Real Project Images from Live Site Pages ===")
for path, proj_id in project_pages:
    url = f"https://www.awharchitects.com/{path}"
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=5) as resp:
            html = resp.read().decode('utf-8', errors='ignore')
            
        # Extract wix static image filenames
        matches = re.findall(r'https://static\.wixstatic\.com/media/([a-zA-Z0-9_~]+(?:\.jpg|\.png))', html)
        # Filter out icons/logos (11062b... are wix generic icons)
        content_imgs = [m for m in matches if not m.startswith('11062b') and not m.startswith('265243')]
        if content_imgs:
            first_img = content_imgs[0]
            img_url = f"https://static.wixstatic.com/media/{first_img}"
            ext = os.path.splitext(first_img)[1]
            local_file = f"public/images/projects/{proj_id}{ext}"
            
            try:
                img_req = urllib.request.Request(img_url, headers=headers)
                with urllib.request.urlopen(img_req, timeout=8) as r, open(local_file, 'wb') as f_out:
                    f_out.write(r.read())
                sz = os.path.getsize(local_file)
                print(f"[OK] {proj_id} -> {local_file} ({sz} bytes)")
            except Exception as ie:
                print(f"[ERR] Failed downloading image for {proj_id}:", ie)
    except Exception as e:
        print(f"[ERR] Failed fetching {url}:", e)

print("\nDone downloading project images!")
