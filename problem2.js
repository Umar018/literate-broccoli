const students = new Set([
  { name: "Alice", scores: [90, 85, 92] },
  { name: "Bob", scores: [75, 80, 85] },
  { name: "Charlie", scores: [90, 95, 85] },
  { name: "Jack", scores: [100, 100, 100] },
]);

function findAverage(set) {
    let topStudents = [];
    let max = 0;
  
    for (let obj of set) {
      let average = obj.scores.reduce((a, b) => a + b, 0) / obj.scores.length;
  
      if (average > max) {
        max = average;
        topStudents = [{ name: obj.name, average }];
      } else if (average === max) {
        topStudents.push({ name: obj.name, average });
      }
    }
  
    return topStudents;
  }
  

console.log(findAverage(students))