work = [
  {
    company: "Senslr Software House",
    title: "Software Engineer Intern",
    details:
      "Building web applications using MERN stack and building applications and solving\
      subproblems and modules using C++ and Python.",
  },
];
dom = "";
work.forEach((w) => {
  dom += `<div>
      <h3>${w.company} | <small> ${w.title} </small> </h3>
      ${w.details}  </div> <br> <hr>
      `;
});
document.getElementById("work").insertAdjacentHTML("beforeend", dom);
