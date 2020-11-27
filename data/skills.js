essentials = [
  "Problem Solving",
  "Debugging",
  "Version control systems",
  "Documentation",
  "Testing & Unit-testing",
  "Shell scripting",
];
deeplearning = [
  "Tensorflow",
  "Keras",
  "PyTorch",
  "Numpy",
  "Scikit",
  "Pandas",
  "Matplotlib",
];
database = ["SQL & MySQL", "MongoDB", "PostgreSQL", "Blockchain"];
devops = ["GCP", "AWS", "Azure", "CleverCloud", "Docker"];
backend = ["Building REST APIs", "NodeJs", "ExpressJs", "Laravel", "Django"];
frontend = ["HTML", "CSS", "JavaScript", "React", "Angular"];

writeDom(essentials,"essentials")
writeDom(deeplearning,"deeplearning")
writeDom(database,"database")
writeDom(devops,"devops")
writeDom(backend,"backend")
writeDom(frontend,"frontend")

function writeDom(array, id) {
  dom = "";
  array.forEach((e) => {
    dom += `&mdash; ${e}<br>`;
  });
  document.getElementById(id).insertAdjacentHTML("beforeend", dom);
};
