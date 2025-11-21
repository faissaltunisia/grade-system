import pandas as pd
import json

# قراءة ملف Excel
excel_file = 'data/grades.xlsx'
json_file = 'data/grades.json'

df = pd.read_excel(excel_file)

# تحويل البيانات إلى قائمة سجلات
data = df.to_dict(orient='records')

# حفظ الملف بصيغة JSON
with open(json_file, 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=4)

print(f"{json_file} has been created successfully!")

