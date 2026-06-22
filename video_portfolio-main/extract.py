import fitz
import io
import sys

pdf_path = r"C:\Users\GRACY SAHAYAM\Desktop\guna resume  2134456738.pdf"
output_path = r"c:\Users\GRACY SAHAYAM\Downloads\video_portfolio-main\video_portfolio-main\src\assets\about\guna_face.jpg"

doc = fitz.open(pdf_path)
for page_index in range(len(doc)):
    page = doc[page_index]
    image_list = page.get_images()
    for image_index, img in enumerate(image_list, start=1):
        xref = img[0]
        base_image = doc.extract_image(xref)
        image_bytes = base_image["image"]
        
        with open(output_path, "wb") as f:
            f.write(image_bytes)
        print(f"Extracted image to {output_path}")
        sys.exit(0)
print("No images found.")
