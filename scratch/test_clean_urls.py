import urllib.request

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
}

test_urls = [
    # Team members
    "https://static.wixstatic.com/media/14cfd9_9edb6be8b68e4a17bbf129db0079f19e~mv2.jpg",
    "https://static.wixstatic.com/media/14cfd9_1ad6fe719e8643a3b4ac79989e4c5727~mv2.jpg",
    "https://static.wixstatic.com/media/e9e504_e3839f8a656640328d3548793c5d7a3e~mv2.jpg",
    "https://static.wixstatic.com/media/e9e504_6c27c818c85a41168e57631557ba6f0c~mv2.jpg",
    "https://static.wixstatic.com/media/e9e504_323b553b98c34af5900b54d06ad8cec2~mv2.jpg",
    "https://static.wixstatic.com/media/e9e504_84ca10bc668044528cdfb8244ca20750~mv2.jpg",
    "https://static.wixstatic.com/media/e9e504_454d2391018b400eb57583955eb941d2~mv2.png",
    "https://static.wixstatic.com/media/e9e504_fc362c63766d4a908ee7a3237d95d8fd~mv2.jpg",
    "https://static.wixstatic.com/media/14cfd9_ef9b645a2b91401da88f49855274bdfb~mv2.png",
    # Live project images
    "https://static.wixstatic.com/media/14cfd9_41884aab8f964db09b7381541af5d3c7~mv2.jpg",
    "https://static.wixstatic.com/media/e9e504_ae7709f909204fd0b47c2e8f1f113cb9~mv2.png",
    "https://static.wixstatic.com/media/e9e504_c408fbab45524bb68f7a711f339ef481~mv2.png"
]

print("Testing exact full URLs:")
for u in test_urls:
    try:
        req = urllib.request.Request(u, headers=headers)
        with urllib.request.urlopen(req, timeout=5) as r:
            print(f"[OK 200] {u.split('/')[-1]} ({r.headers.get('Content-Length')} bytes)")
    except Exception as e:
        print(f"[FAIL] {u.split('/')[-1]} -> {e}")
