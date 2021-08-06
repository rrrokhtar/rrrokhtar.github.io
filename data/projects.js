const T = {
  PY: "python",
  GANS: "gans",
  SDC: "self-driving-cars",
  CV: "computer-vision",
  CPP: "c++",
  IP: "image-processing",
  ML: "machine-learning",
  NLP: "natural-language-processing",
  OS: "operating-system",
  VO: "visual-odometry",
  REG: "regression",
  CLS: "classification",
  DL: "deep-learning",
  PT: "pytorch",
  TF: "tensorflow",
  REACT: "reactjs",
  LARAVEL: "laravel",
  PHP: "php",
  GO: "golang",
  FIBER: "fiber",
  NODE: "nodejs",
  ANDROID: "andriod",
  BD: "big-data",
  JS: "javascript",
  SQL: "sql",
  MONGO: "mongodb",
  SD: "system-design",
  JAVA: "java",
  OOP: "oop",
  ALGO: "algorithms"
}

projects = [{
    name: "Autoeye",
    details: "Auto-Eye is a software solution to help the autonomous vehicle in adverse weather conditions, \
               solution pipeline was dedicated in detection of the current state of the environment surrounding \
               the vehicle and then apply computer vision and deep learning techniques to enhance the vision stream \
               from the camera in order to be used to make the actions more accurate and better. Project was sponsored by [METI] ",
    tags: ["graduation-project", T.PY, T.SDC, T.GANS, T.CV, T.IP, T.ML, T.VO],
    link: "",
    image: "",
  },
  {
    name: "Airbnb EDA and regression",
    details: "Airbnb, Inc. operates an online marketplace for lodging,primarily homestays for vacation rentals, \
      and tourism activities. It is based in San Francisco,California. Our problem is going to be analysis and explorationon \
      the given dataset we provided in the proposal and modeling the data in order to predictthe price of an instance.",
    tags: [T.PY, T.BD, T.DL, T.REG, T.ML, "airbnb", "analysis"],
    link: "",
    image: "",
  },
  {
    name: "Onepiecelang",
    details: "Text segmentation solution using natural language processing. \
      It is concerned with splitting text into tokens. For example, Proposed to do segmentation of words without spaces. Given a string, such as the URL \
   'thelongestlistofthelongeststuffatthelongestdomainnameatlonglast.com' return a list of splitted words of this sentence. \
   Used unigrams model and Dynamic programming to solve it.",
    tags: [T.PY, T.NLP, T.ML, "unigrams"],
  },
  {
    name: "Matchera",
    details: "An online automated ticket reservation system for football matches in the\
   Egyptian Premier League is requested by the client. The system allows the EFA\
   (Egyptian Federation Association) management to create, manage, and maintain\
   current and future matches. The system should allow the users to reserve specific\
   seats for the matches they want to attend. \
   I have participted in building the front-end using React Javascript framework",
    tags: [T.LARAVEL, T.JS, T.REACT, "material-ui"],
  },
  {
    name: "Whoami",
    details: "Handwriting writer classifier using IAM database, \
     applied pattern recognition and machine learning besides statisitcal describing of images to acheivie classification of writers. ",
    tags: [T.PY, T.CV, T.DL, T.CLS, T.ML],
  },
  {
    name: "P2P Network",
    details: "Aims to simulation of some data link layer protocols, implemented error detection using checksum, \
      framing using byte stuffing, sliding window protocol was using Go Back N protocol and network architecture was distributed \
   Software used for simulation was Omnet++.",
    tags: ["networks", "peer-to-peer", "omnet++", "data-link", "protocols"],
  },
  {
    name: "Distributed files system",
    details: "Distributed Systems mimicking and applying object-oriented and socket programming using python.\
    A simple application that enables users to have a reliable storage\
    system to save files into multiple machines as replication nodes such as hadoop file system.",
    tags: [T.PY, T.SD, T.OS, "DFS", "google-drive", "replication", "threading"],
  },
  {
    name: "Search Engine",
    details: "Used java to build up a small-scale search engine.\
    it consists of multiple main modules as the following\
    Crawler, Indexer, Query Processor, Ranker, Interface.\
    I have been working on the crawler module",
    tags: [T.JAVA, T.OOP, "crawler", "search-engine"],
  },
  {
    name: "Grades Auto-filler System",
    details: "Image processing and computer vision application stands for multiple\
      choices exams marking automation and converting hard copy grades sheets\
      into editable digital documents.",
    tags: [T.PY, T.IP, T.ML, T.CV],
  },
  {
    name: "Operating System Scheduler",
    details: "Operating systems scheduling algorithms,\
      implementation and visualization\
      using python and tkinter as a graphical user interface library.",
    tags: [T.PY, T.OS, T.SD, T.ALGO, "scheduling-algorithms"],
  },
  {
    name: "Goodreads API",
    details: "Goodreads.com RESTful API remaking using Laravel.\
      that is a social network for book lovers\
      to share their reading list with friends and reviews.",
    tags: [T.PHP, T.LARAVEL],
  },
  {
    name: "Scheduling Improving Research",
    details: "There are several scheduling algorithms for CPU process scheduling, recalling some\
      of them are shortest job first (SJF) and shortest remaining time first (SRTF). Both\
      of these algorithms must have information about the burst time of the processes\
      in the ready queue. The burst time cannot be determined exactly so estimation\
      comes over here, to execute these algorithms requires the burst time of\
      processes. Research aimed to find out the execution time of the upcoming process before its\
      execution based on it's history.",
    tags: [T.PY, T.OS, T.SD, T.ALGO, "scheduling-algorithms"],
  },
  {
    name: "ODE Euler Solver",
    details: "Built an ASIC design for acceleration the operations of making ordinary differential equations using Verilog as HDL.\
      and Modelsim for simulation, my role was designing a FSM to perform matrix multiplication.",
    tags: ["vlsi", "verilog", "hardware", "modelsim"],
  },
  {
    name: "Movies Android App",
    details: "Movies recommendation and reviews system,\
      using Java and SQL for database (JDBC library).",
    tags: [T.JAVA, T.ANDROID, T.OOP, T.SQL],
  },
  {
    name: "Multi-cycles CPU Simulation",
    details: "Designed an architecture for a processor based on PDP-11 instruction set\
      and assembly language using Modelsim as simulator tool and VHDL as design language.",
    tags: ["computer-architecture", "vhdl", "hardware", T.SD],
  },
  {
    name: "Pipelined Processor 5 Stages",
    details: "Designed an architecture for a processor based on MIPS instruction set,\
      assembly language and 5 stages model [Fetch, Decode, Execute, Memory and Write back]\
      and applied pipelining concept on it.\
      using Modelsim as simulator tool and VHDL as Hardware description language .",
    tags: ["computer-architecture", "vhdl", "hardware", T.SD],
  },
  {
    name: "Voice Controlled Car",
    details: "A voice-controlled car using a smartphone application used to send voice commands\
    recognized using google API to Bluetooth module in Arduino-Uno kit .",
    tags: ["arduino", "hardware"],
  },
  {
    name: "Seek And Hide",
    details: "Managed to build a DOS 2-Players remote game via LAN using assembly language\
      of 8086 processor instructions.",
    tags: ["assembly"],
  },
  {
    name: "Integrated Circuits Tester",
    details: "Unit testing circuit for verifying the operation of ICs/Components using sequential logic design principles.",
    tags: ["logisim", "login-design", "hardware"],
  },
  {
    name: "Simple ALU Signed Circuit",
    details: "A simple calculator using basic digital logic\
      design gates to perform arithmetic operations.",
    tags: ["logisim", "login-design", "hardware"],
  },
  {
    name: "Game Simulator",
    details: "Used Data-structure and algorithms techniques to build up\
      a simulation game between castle towers and enemies and calculate\
      some statistics from this simulation",
    tags: [T.OOP, T.CPP, T.ALGO ,"data-structures"],
  },
  {
    name: "Paint For Kids",
    details: "Using object-oriented programming techniques\
      A simple application that enables kids to draw \
      fancy shapes and also play some simple games with those shapes,\
      save and load game sessions.",
    tags: [T.OOP, T.CPP, T.ALGO ,"data-structures"],
  },
];
dom = "";

projects.forEach((project) => {
  tags = "";
  if (project.tags) {
    project.tags.forEach((tag) => {
      if (tag.length)
        tags += `<p class='noselect tag tag-${tag}' onclick=toggleTag('tag-${tag}')>${tag}</tag>`
    });
  }
  dom += `<div>
    <a class="project-title" ${project.link?"href="+project.link:""}">${project.name}</a>
    <br>
    <div>
      ${project.details} 
    </div>
    <div>
      ${tags}
    </div>
    </div>
    <br>
    <hr>`;
});
document.getElementById("pro").insertAdjacentHTML("beforeend", dom);

function toggleTag(tagname) {
  var elements = document.getElementsByClassName(tagname);
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.toggle("active-tag");
  }
}