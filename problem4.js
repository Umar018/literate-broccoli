let countries = new Set([
  { Russian: 9 },
  { English: 91 },
  { French: 45 },
  { Spanish: 24 },
  { Portuguese: 9 },
  { Dutch: 8 },
  { German: 7 },
  { Arabic: 25 },
  { Chinese: 5 },
  { Swahili: 4 },
  { Serbian: 4 },
]);

function getTop3(set) {
  return [...set]
    .map((obj) => {
      let key = Object.keys(obj).find((k) => typeof obj[k] === "number");
      return { ...obj, value: obj[key] };
    })
    .sort((a, b) => b.value - a.value)
    .slice(0, 3);
}

console.log(getTop3(countries, 3));
