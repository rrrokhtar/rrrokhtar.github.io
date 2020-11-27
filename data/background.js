c1 = [
  "Object oriented programming",
  "Data structures",
  "Software Engineering",
  "Operating Systems",
  "Distributed Systems",
  "Image processing",
];
c2 = [
  "Computer Architecture",
  "Design and Analysis of Algorithms",
  "Database Management Systems",
  "Microprocessor Systems",
  "Linear Algebra and multivariable Integrals",
  "Probability and Statistics",
];
function writeDom(array, id) {
  dom = "";
  array.forEach((e) => {
    dom += `&mdash; ${e}<br>`;
  });
  document.getElementById(id).insertAdjacentHTML("beforeend", dom);
};

writeDom(c1, "c1");
writeDom(c2, "c2");
