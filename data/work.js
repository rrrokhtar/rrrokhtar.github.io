work = [
  {
    company: "Red Hen Lab with GSoC 2021",
    title: "Software Engineer |  May 2021 - Aug. 2021 ",
    details:
      "I have worked on RapidAnnotator at Red Hen Lab with Google Summer of Code 2021\
      Rapid Annotator tries  to enable researchers worldwide to annotate large chunks\
      of data in a very short period of time with the least effort possible and try to\
      get started with minimal training. My role was adding new features and\
      fixing bugs on the existing code base",
  },
  {
    company: "Seen Tech",
    title: "Software Engineer |  Aug. 2021 - Present ",
    details:
      "Building web applications and services using Golang with fiber and building user interface pages using React and solving\
      subproblems and modules using another languages.",
  },
  {
    company: "Seen Tech",
    title: "Software Engineer |  Sept. 2020 - Nov. 2020 ",
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
