#!/bin/bash

# Image Download Script for Global Bunkers
# This script downloads images from the current website

echo "Global Bunkers - Image Download Script"
echo "======================================"
echo ""

# Check if wget or curl is available
if command -v wget &> /dev/null; then
    DOWNLOADER="wget"
    echo "✓ Using wget for downloads"
elif command -v curl &> /dev/null; then
    DOWNLOADER="curl"
    echo "✓ Using curl for downloads"
else
    echo "❌ Error: Neither wget nor curl is available."
    echo "Please install wget: brew install wget"
    exit 1
fi

echo ""
echo "This script will download images from globalbunkers.us"
echo "Images will be saved to public/images/galleries/"
echo ""
read -p "Press Enter to continue or Ctrl+C to cancel..."

# Base directory
BASE_DIR="public/images/galleries"

# Gallery URLs
declare -A GALLERIES=(
    ["bank-liquidation"]="https://www.globalbunkers.us/bank-liquidation"
    ["panic-safe-rooms"]="https://www.globalbunkers.us/panic-and-safe-rooms"
    ["bunkers"]="https://www.globalbunkers.us/bunkers-and-bomb-shelters"
    ["bulletproof-glass"]="https://www.globalbunkers.us/bulletproof-glass"
    ["safes"]="https://www.globalbunkers.us/any-type-of-safes"
)

echo ""
echo "Step 1: Downloading HTML pages to extract image URLs..."
echo ""

mkdir -p tmp

for category in "${!GALLERIES[@]}"; do
    url="${GALLERIES[$category]}"
    echo "Fetching: $category"

    if [ "$DOWNLOADER" = "wget" ]; then
        wget -q -O "tmp/${category}.html" "$url" 2>/dev/null
    else
        curl -s -o "tmp/${category}.html" "$url" 2>/dev/null
    fi

    if [ $? -eq 0 ]; then
        echo "  ✓ Downloaded HTML for $category"
    else
        echo "  ❌ Failed to download $category"
    fi
done

echo ""
echo "Step 2: Extracting image URLs from HTML..."
echo ""

# Extract image URLs from HTML files
for category in "${!GALLERIES[@]}"; do
    html_file="tmp/${category}.html"

    if [ -f "$html_file" ]; then
        # Extract Format CDN URLs (these are the actual image URLs)
        grep -o 'https://images\.format-assets\.com[^"]*\.jpg' "$html_file" > "tmp/${category}-urls.txt" 2>/dev/null
        grep -o 'https://format\.creatorcdn\.com[^"]*\.jpg' "$html_file" >> "tmp/${category}-urls.txt" 2>/dev/null

        # Remove duplicates and get larger versions
        sort -u "tmp/${category}-urls.txt" | grep -v "40x40\|150x150" > "tmp/${category}-final.txt" 2>/dev/null

        count=$(wc -l < "tmp/${category}-final.txt" 2>/dev/null || echo 0)
        echo "  Found $count images for $category"
    fi
done

echo ""
echo "Step 3: Downloading images..."
echo ""

total_downloaded=0

for category in "${!GALLERIES[@]}"; do
    url_file="tmp/${category}-final.txt"
    target_dir="$BASE_DIR/$category"

    if [ ! -f "$url_file" ]; then
        echo "  ⚠️  No URLs found for $category"
        continue
    fi

    mkdir -p "$target_dir"

    echo "Downloading images for: $category"

    counter=1
    while IFS= read -r image_url; do
        if [ -n "$image_url" ]; then
            # Extract filename or create numbered filename
            filename="${category}-${counter}.jpg"
            output_path="$target_dir/$filename"

            if [ "$DOWNLOADER" = "wget" ]; then
                wget -q -O "$output_path" "$image_url" 2>/dev/null
            else
                curl -s -o "$output_path" "$image_url" 2>/dev/null
            fi

            if [ $? -eq 0 ] && [ -s "$output_path" ]; then
                echo "  ✓ Downloaded: $filename"
                ((total_downloaded++))
                ((counter++))
            else
                echo "  ❌ Failed: $filename"
                rm -f "$output_path"
            fi
        fi
    done < "$url_file"
done

echo ""
echo "Step 4: Downloading hero/cover images..."
echo ""

# Download homepage for hero images
if [ "$DOWNLOADER" = "wget" ]; then
    wget -q -O "tmp/homepage.html" "https://www.globalbunkers.us" 2>/dev/null
else
    curl -s -o "tmp/homepage.html" "https://www.globalbunkers.us" 2>/dev/null
fi

grep -o 'https://images\.format-assets\.com[^"]*\.jpg' "tmp/homepage.html" | grep -v "40x40\|150x150" | head -5 > "tmp/hero-urls.txt" 2>/dev/null

mkdir -p public/images/hero

counter=1
while IFS= read -r image_url; do
    if [ -n "$image_url" ]; then
        filename="hero-${counter}.jpg"

        if [ "$DOWNLOADER" = "wget" ]; then
            wget -q -O "public/images/hero/$filename" "$image_url" 2>/dev/null
        else
            curl -s -o "public/images/hero/$filename" "$image_url" 2>/dev/null
        fi

        if [ $? -eq 0 ]; then
            echo "  ✓ Downloaded: $filename"
            ((total_downloaded++))
            ((counter++))
        fi
    fi
done < "tmp/hero-urls.txt"

echo ""
echo "======================================"
echo "Download Complete!"
echo "======================================"
echo ""
echo "Total images downloaded: $total_downloaded"
echo ""
echo "Images are saved in:"
echo "  - public/images/galleries/bank-liquidation/"
echo "  - public/images/galleries/panic-safe-rooms/"
echo "  - public/images/galleries/bunkers/"
echo "  - public/images/galleries/bulletproof-glass/"
echo "  - public/images/galleries/safes/"
echo "  - public/images/hero/"
echo ""
echo "Next steps:"
echo "1. Review downloaded images in the folders above"
echo "2. Update src/lib/gallery-data.ts with actual filenames"
echo "3. Restart the dev server: npm run dev"
echo ""
echo "Cleaning up temporary files..."
rm -rf tmp
echo "✓ Done!"
