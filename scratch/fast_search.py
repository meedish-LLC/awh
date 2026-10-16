with open("scratch/studio.html", "r", encoding="utf-8") as f:
    text = f.read()

print("Length of studio.html:", len(text))

# Let's check occurrences of names
keywords = ["Dommer", "Alan", "Jacob", "Vance", "Lindqvist", "Hendrickson", "Principal", "Architect", "Founder", "Partner"]
for kw in keywords:
    pos = 0
    found = []
    while True:
        pos = text.find(kw, pos)
        if pos == -1:
            break
        snippet = text[max(0, pos-100):min(len(text), pos+150)].replace('\n', ' ')
        found.append(snippet)
        pos += len(kw) + 1
        if len(found) >= 3:
            break
    print(f"\nKeyword: {kw} (found {len(found)} samples):")
    for s in found:
        print("  ...", s, "...")
