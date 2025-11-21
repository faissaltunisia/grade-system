const XLSX = require('xlsx');
const fs = require('fs-extra');

// قراءة Excel
const workbook = XLSX.readFile('data/grades.xlsx');
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];

// تحويل الورقة الأولى إلى JSON
const data = XLSX.utils.sheet_to_json(sheet, { defval: "" });

// حفظ JSON
fs.writeFileSync('grades.json', JSON.stringify(data, null, 2));
console.log('grades.json updated from Excel!');
