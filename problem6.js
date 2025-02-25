function afterNYears(people, n) {
    let years = Math.abs(n);
    return Object.fromEntries(
      Object.entries(people).map(([name, age]) => [name, age + years])
    );
  }

  console.log(afterNYears({
    "Joel" : 32,
    "Fred" : 44,
    "Reginald" : 65,
    "Susan" : 33,
    "Julian" : 13
  }, 1));
  