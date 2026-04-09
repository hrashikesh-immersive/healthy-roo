import zipfile
import xml.etree.ElementTree as ET
import os

def extract_text_from_pptx(path):
    if not os.path.exists(path):
        print(f"File not found: {path}")
        return

    try:
        with zipfile.ZipFile(path, 'r') as zip_ref:
            # List all files in the zip to find slides
            xml_files = [f for f in zip_ref.namelist() if f.startswith('ppt/slides/slide') and f.endswith('.xml')]
            xml_files.sort() # Sort by slide number

            all_text = []
            for xml_file in xml_files:
                all_text.append(f"--- {xml_file} ---")
                with zip_ref.open(xml_file) as f:
                    tree = ET.parse(f)
                    root = tree.getroot()
                    
                    # PPTX XML uses namespaces
                    # {http://schemas.openxmlformats.org/drawingml/2006/main}t is for text
                    for t in root.iter('{http://schemas.openxmlformats.org/drawingml/2006/main}t'):
                        if t.text:
                            all_text.append(t.text)
                all_text.append("\n")
            
            return "\n".join(all_text)
    except Exception as e:
        return f"Error: {e}"

pptx_path = r"c:\Users\hrash\OneDrive\projects\traditional\healthy-roo\src\assets\healthyroo.ai.pptx"
text_content = extract_text_from_pptx(pptx_path)

output_path = r"c:\Users\hrash\OneDrive\projects\traditional\healthy-roo\tmp\pptx_text.txt"
with open(output_path, 'w', encoding='utf-8') as f:
    f.write(text_content)
print(f"Extracted text to {output_path}")
