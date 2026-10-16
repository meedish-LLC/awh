import urllib.request
import re
import json
import os

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}

def fetch(url):
    req = urllib.request.Request(url, headers=headers)
    with urllib.request.urlopen(req) as resp:
        return resp.read().decode('utf-8', errors='ignore')

def inspect_url(url, label):
    print(f"\n=== Inspecting {url} ({label}) ===")
    html = fetch(url)
    print(f"HTML size: {len(html)} bytes")
    
    # Save raw html for analysis
    with open(f"scratch/{label}.html", "w", encoding="utf-8") as f:
        f.write(html)
        
    # Check for wix-warmup-data
    warmup_matches = re.findall(r'<script id="wix-warmup-data"[^>]*>(.*?)</script>', html, re.DOTALL)
    if warmup_matches:
        print(f"Found wix-warmup-data in {label} ({len(warmup_matches[0])} bytes)")
        try:
            data = json.loads(warmup_matches[0])
            with open(f"scratch/{label}_warmup.json", "w", encoding="utf-8") as f:
                json.dump(data, f, indent=2)
            print(f"Saved scratch/{label}_warmup.json")
        except Exception as e:
            print("Warmup JSON decode error:", e)
    else:
        print("No wix-warmup-data script tag found")

os.makedirs("scratch", exist_ok=True)
inspect_url("https://www.awharchitects.com/studio", "studio")
inspect_url("https://www.awharchitects.com/services", "services")
inspect_url("https://www.awharchitects.com/press", "press")
inspect_url("https://www.awharchitects.com/values", "values")
