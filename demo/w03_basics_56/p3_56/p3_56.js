// 此處為匯入P3_56的兩筆資料
// JS匯出務必加上檔名.js其他不用
import { sdata, students } from './data_56.js';

console.log('sdata', sdata);
console.log('students', students);

sdata.sort();
console.log('sdata after sorting alphabetically', sdata);

sdata.sort(function (a, b) {
  return b - a;
});
console.log('sdata after sorting descending', sdata);
console.log(`the highest score: ${sdata[0]}`);
console.log(`the lowest score: ${sdata[sdata.length - 1]}`);

console.log('students', students);
const students2 = students.map((student) => {
  return { ...student, role: 'student' };
});

students2.sort(function (a, b) {
  return b.score - a.score;
});
console.log('students2 sorted descending', students2);
console.log(`the highest score: ${students2[0].score}`);
console.log(`the lowest score:${students2[students2.length - 1].score}`);
