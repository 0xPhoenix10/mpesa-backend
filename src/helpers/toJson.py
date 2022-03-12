#PDF to JSON using Python 3+ 
 
# package to install  
# pip install Fitz  
# pip install pymupdf  
 
import fitz  
import json  
 
document  = fitz.open('/output/test.pdf') 
page  = document.loadPage(14)#enter page 
text = page.getText('dict')  
print(text) 
 
with open('data.json', 'w') as f: 
    text_data = json.dump(text, f)