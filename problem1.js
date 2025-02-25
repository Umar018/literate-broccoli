function putLength2(str) {
  return str
    .split(" ")
    .map((el) =>
      el.length > 3 ? `${el[0]}${el.length - 2}${el[el.length - 1]}` : el
    ).join(" ");
}

console.log(
  putLength2("Every developer likes to mix kubernetes and javascript")
);
