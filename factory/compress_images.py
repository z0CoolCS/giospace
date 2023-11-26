from PIL import Image
import os
from glob import glob

list_png = os.listdir('../public/project/')
print(list_png)

# original_image = Image.open("path_to_your_image.jpg")
# original_image.save("compressed_image.jpg", "JPEG", optimize=True, quality=20)
