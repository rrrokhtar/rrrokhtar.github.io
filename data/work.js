work = [
  {
    company: "Oanda Coinpass Limited",
    title: "Software Engineer |  Oct. 2023 - Present ",
    details: "Part of the backend development team, building services for the platform using serverless and microservices architecture"
  },
  {
    company: "Eseed",
    title: "Software Engineer |  Aug. 2023 - Oct. 2023 ",
    details: "Worked as a Freelance developer with their backend team, developing multiple projects for different clients"
  },
  {
    company: "Bitnine Global Inc.",
    title: "Software Engineer |  Mar. 2023 - Aug. 2023 ",
    details:
      "Contributing to Apache AGE project as an intern through \
      taking part in mathematical functions \
      support and other related projects. Moreover, \
      taking part in the development of AGE and creating PRs to the project related to the parts I am assigned to as well as\
      creating technical blogs related to AGE and answering stackoverflow questions related to apache-age.",
  },
  {
    company: "Fedni",
    title: "Software Engineer |  Dec. 2022 - Mar. 2023 ",
    details:
      "Taking part in fixing and creating new features \
      of the Fedni Platform and created the seed of a new application \
      based its core is based on computer vision algorithms. \
      Moreover, addeing new features to the platform some features are for \
      the admin dashboard and some else were for the end-user as well as \
      taking part on creating a new app for the company which still in development phase",
  },
  {
    company: "Red Hen Lab with GSoC 2022",
    title: "Software Engineer |  May 2022 - Nov. 2022 ",
    details:
      "Extended my work on 21s I have joined for the second time at 22s program, implementing new video experiment type\
      Rapid Annotator tries  to enable researchers worldwide to annotate large chunks\
      of data in a very short period of time with the least effort possible and try to\
      get started with minimal training. My role was adding new features and\
      fixing bugs on the existing code base",
  },
  {
    company: "Ajax Business Solutions",
    title: "Software Engineer |  Aug. 2021 - Mar. 2022 ",
    details:
      "Building web applications and services using Golang with fiber and building user interface pages using React and solving\
      subproblems and modules using another languages.",
  },
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
