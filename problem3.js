const employees = new Set([
  { name: "John", salary: 50000, department: "IT" },
  { name: "Jane", salary: 60000, department: "HR" },
  { name: "Bob", salary: 55000, department: "IT" },
  { name: "Sophie", salary: 75000, department: "HR" },
  { name: "Mike", salary: 65000, department: "IT" },
  { name: "Emily", salary: 80000, department: "HR" },
  { name: "David", salary: 70000, department: "IT" },
]);

function findAverage(set) {
  if (set.size === 0) return "Empty";

  let ITsum = 0,
    ITcount = 0,
    HRsum = 0,
    HRcount = 0;

  for (let { salary, department } of set) {
    if (department === "IT") {
      ITsum += salary;
      ITcount++;
    } else {
      HRsum += salary;
      HRcount++;
    }
  }

  let ITave = ITcount ? ITsum / ITcount : 0;
  let HRave = HRcount ? HRsum / HRcount : 0;

  return ITave > HRave
    ? { department: "IT", average: Math.round(ITave) }
    : { department: "HR", average: Math.round(HRave) };
}

console.log(findAverage(employees))