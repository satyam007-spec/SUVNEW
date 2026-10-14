import subprocess
import os

images_to_fetch = [
    {
        "name": "mahindra-scorpio-n.webp",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b4/2024_Mahindra_Scorpio_Z8L_front.jpg/1280px-2024_Mahindra_Scorpio_Z8L_front.jpg"
    },
    {
        "name": "hyundai-creta.webp",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/21/2024_Hyundai_Creta_1.5_MPi_SX%28O%29_%28India%29_front_view.png/1280px-2024_Hyundai_Creta_1.5_MPi_SX%28O%29_%28India%29_front_view.png"
    },
    {
        "name": "kia-seltos.webp",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6c/Kia_Seltos_SP2_PE_Snow_White_Pearl_%2817%29_%28cropped%29.jpg/1280px-Kia_Seltos_SP2_PE_Snow_White_Pearl_%2817%29_%28cropped%29.jpg"
    },
    {
        "name": "tata-harrier.webp",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c3/Tata_Buzzard_Sport%2C_GIMS_2019%2C_Le_Grand-Saconnex_%28GIMS0651%29.jpg/1280px-Tata_Buzzard_Sport%2C_GIMS_2019%2C_Le_Grand-Saconnex_%28GIMS0651%29.jpg"
    },
    {
        "name": "mahindra-thar-lifestyle.webp",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/51/Mahindra_Thar_SUV_in_%22Red_Rage%22_color_at_Ashiana_Brahmanda%2C_East_Singbhum_India_%28Ank_Kumar%2C_Infosys_limited%29_02_%28cropped%29.jpg/1280px-Mahindra_Thar_SUV_in_%22Red_Rage%22_color_at_Ashiana_Brahmanda%2C_East_Singbhum_India_%28Ank_Kumar%2C_Infosys_limited%29_02_%28cropped%29.jpg"
    },
    {
        "name": "family-suv-safari.webp",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/95/Tata_Safari_4x4_front.jpg/1280px-Tata_Safari_4x4_front.jpg"
    }
]

os.makedirs("public/images", exist_ok=True)

for item in images_to_fetch:
    dest_path = os.path.join("public/images", item["name"])
    temp_path = os.path.join("public/images", "temp_" + item["name"] + ".tmp")
    print(f"Downloading {item['name']}...")
    try:
        subprocess.run(
            ["curl", "-s", "-L", "-A", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) SUVHub/1.0", "-o", temp_path, item["url"]],
            check=True
        )
        print(f"Converting {temp_path} to {dest_path}...")
        subprocess.run(
            ["convert", temp_path, "-resize", "1200x", "-quality", "82", "-strip", dest_path],
            check=True
        )
        if os.path.exists(temp_path):
            os.remove(temp_path)
        size_kb = os.path.getsize(dest_path) / 1024
        print(f"Success: {item['name']} created ({size_kb:.1f} KB)")
    except Exception as e:
        print(f"Error processing {item['name']}: {e}")
