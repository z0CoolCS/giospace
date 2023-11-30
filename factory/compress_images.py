from PIL import Image
import os
from glob import glob

base_path = os.path.join(os.path.dirname(__file__), '..','public', 'project')
list_png = os.listdir(base_path)
list_png = [img_png for img_png in list_png if img_png.endswith('.png')]
print(list_png)

for img_png in list_png:
    original_image = Image.open(os.path.join(base_path, img_png))
    img_png_small = img_png.split('.png')[0] + '_small.png'
    original_image.save(os.path.join(base_path, img_png_small), "PNG", optimize=True, quality=20)
