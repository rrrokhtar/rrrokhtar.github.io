internships = [
  {
    company: "Senslr Software House",
    title: "Software Engineer Intern | Jul. 2020 - Sept. 2020",
    details:
      "Building dynamic web pages using HTML/CSS/JS and using C3js for data visualization and Canvas for graphics as well as communicating with backend.",
    worked_on: [
      {
        project: "Attendance Systems Dashboard",
        details:
          "Viewing and managing of employees attendance and viewing reports about them as well as their profile information",
      },
      {
        project: "Graph Builder",
        details:
          "Building graph nodes and edges via graphical web interface and toolbar using canvas to\
        perform graph algorithms on user-drawing.",
      },
      {
        project: "Production Workflow",
        details:
          "Tracking the production cycle and creating it via graphical web interface as well as\
        checking the availability of real material and consuming the resources records and store all\
        of those steps for each product.",
      },
      {
        project: "MNIST Classifier",
        details:
          "Built a CNN model for MNIST dataset using python and saved it as a torchscript then deploying\
        and running it as a C++ code for performance analysis and improvement.",
      },
      {
        project: "Python Embedding in C++",
        details:
          "Encrypting a python code then put it as payload in C++ then at runtime it is decrypted and\
        sent to pipe to run via a python interpreter aimed for security.",
      },
    ],
  },
  {
    company: "ITIDA internship by NajahNow corp",
    title: "Software Engineer Intern | Jun. 2020 - Sept. 2020",
    details:
      "Developed additional features and enhancements for existing applications built using the PHP Laravel framework. Maintained the existing codebase and also provide bug-fixing for it",
    worked_on: [
      {
        project: "NajahNow.com",
        details:
          "Added Facebook login to the current authentication.\
          Added Sorting to the homepage's courses with respect to the higher rating teachers",
      },
      {
        project: "Se7tey.com",
        details:
          "Added uploading profile pictures to the doctors users. Replaced the code registration system of doctors with being confirmed by admin users instead. Old user flow is admin generates code numbers, then gives it to the doctor who wants to sign up that allows him to register. New user-flow - Doctors signup and keep being inactive till the admin confirms it from the admin dashboard",
      },
      {
        project: "NajahNow.net",
        details:
          "Added Facebook login to the current authentication for student users.\
          Replaced the code registration system of centers with being confirmed by admin users\
          instead.",
      },
     
    ],
  },
];
dom = "";
internships.forEach((internship) => {
  dom += `<div>
    <h3>${internship.company} | <small> ${internship.title} </small> </h3>
    ${internship.details} 
    <br><br> <center><h4>Worked on</h4></center>
    `;
  internship.worked_on.forEach((w) => {
    dom += `<b> &mdash; ${w.project}</b> <br> ${w.details}<br><br>`;
  });
  dom += `</div> <hr>`;
});
document.getElementById("internships").insertAdjacentHTML("beforeend", dom);
