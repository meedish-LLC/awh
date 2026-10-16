import os
from PIL import Image

def get_dir_size(path):
    total = 0
    for root, dirs, files in os.walk(path):
        for f in files:
            total += os.path.getsize(os.path.join(root, f))
    return total

team_dir = "public/images/team"
proj_dir = "public/images/projects"

before_team = get_dir_size(team_dir)
before_proj = get_dir_size(proj_dir)
print(f"Total size before compression: {(before_team + before_proj) / (1024*1024):.2f} MB")
print(f" - Team images: {before_team / (1024*1024):.2f} MB")
print(f" - Project images: {before_proj / (1024*1024):.2f} MB\n")

# 1. Compress Team Images (max width 800px, quality 82)
print("=== Compressing Team Images ===")
for f in os.listdir(team_dir):
    f_path = os.path.join(team_dir, f)
    if not os.path.isfile(f_path):
        continue
    sz_before = os.path.getsize(f_path)
    
    with Image.open(f_path) as im:
        # Resize if width or height exceeds 800
        im.thumbnail((800, 800), Image.Resampling.LANCZOS)
        
        if f_path.lower().endswith(".jpg") or f_path.lower().endswith(".jpeg"):
            if im.mode in ("RGBA", "P"):
                im = im.convert("RGB")
            im.save(f_path, "JPEG", quality=82, optimize=True, progressive=True)
        elif f_path.lower().endswith(".png"):
            # If no transparency, convert to RGB or optimize PNG
            if im.mode == "RGBA":
                # Check if actually has transparent pixels
                extrema = im.getextrema()
                if extrema and len(extrema) == 4 and extrema[3][0] == 255:
                    # Fully opaque
                    im = im.convert("RGB")
                    # Save as optimized PNG
                    im.save(f_path, "PNG", optimize=True)
                else:
                    im.save(f_path, "PNG", optimize=True)
            else:
                im.save(f_path, "PNG", optimize=True)
                
    sz_after = os.path.getsize(f_path)
    ratio = (1 - sz_after / sz_before) * 100
    print(f"[OK] {f}: {sz_before / 1024:.1f} KB -> {sz_after / 1024:.1f} KB ({ratio:.1f}% reduction)")

# 2. Compress Project Images (max width 1920px, max height 1200px, quality 82)
print("\n=== Compressing Project Images ===")
for f in os.listdir(proj_dir):
    f_path = os.path.join(proj_dir, f)
    if not os.path.isfile(f_path):
        continue
    sz_before = os.path.getsize(f_path)
    
    try:
        with Image.open(f_path) as im:
            # Resize
            im.thumbnail((1920, 1200), Image.Resampling.LANCZOS)
            
            if f_path.lower().endswith(".jpg") or f_path.lower().endswith(".jpeg"):
                if im.mode in ("RGBA", "P"):
                    im = im.convert("RGB")
                im.save(f_path, "JPEG", quality=82, optimize=True, progressive=True)
            elif f_path.lower().endswith(".png"):
                if im.mode in ("RGBA", "P"):
                    im = im.convert("RGB")
                    # For photos accidentally saved as PNG (like img_2.png which was 2MB photo),
                    # convert to JPEG or save highly compressed
                    im.save(f_path, "JPEG", quality=82, optimize=True)
                else:
                    im.save(f_path, "PNG", optimize=True)
                    
        sz_after = os.path.getsize(f_path)
        ratio = (1 - sz_after / sz_before) * 100
        print(f"[OK] {f}: {sz_before / 1024:.1f} KB -> {sz_after / 1024:.1f} KB ({ratio:.1f}% reduction)")
    except Exception as e:
        print(f"[ERR] {f} -> {e}")

after_team = get_dir_size(team_dir)
after_proj = get_dir_size(proj_dir)
total_before = before_team + before_proj
total_after = after_team + after_proj
saved = (1 - total_after / total_before) * 100

print(f"\n==========================================")
print(f"Total size BEFORE: {total_before / (1024*1024):.2f} MB")
print(f"Total size AFTER:  {total_after / (1024*1024):.2f} MB")
print(f"Overall reduction: {saved:.1f}% (saved {(total_before - total_after) / (1024*1024):.2f} MB!)")
