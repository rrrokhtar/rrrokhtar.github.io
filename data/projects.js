projects = [
  {
    name: "P2P Network",
    details:
      "Aims to simulating some data link layer protocols, implemented error detection using checksum, \
      framing using byte stuffing, sliding window protocol was using Go Back N protocol and network architecture was distributed \
   Software used for simulation was Omnet++",
  },
  {
    name: "Distributed files system",
    details:
      "Distributed Systems mimicking and applying object-oriented and socket programming using python.\
    A simple application that enables users to have a reliable storage\
    system to save files into multiple machines as replication nodes such as hadoop file system.",
  },
  {
    name: "Search Engine",
    details:
      "Used java to build up a small-scale search engine.\
    it consists of multiple main modules as the following\
    Crawler, Indexer, Query Processor, Ranker, Interface.\
    I have been working on the crawler module",
  },
  {
    name: "Grades Auto-filler System",
    details:
      "Image processing and computer vision application stands for multiple\
      choices exams marking automation and converting hard copy grades sheets\
      into editable digital documents.",
  },
  {
    name: "Operating System Scheduler",
    details:
      "Operating systems scheduling algorithms,\
      implementation and visualization\
      using python and tkinter as a graphical user interface library.",
  },
  {
    name: "Goodreads API",
    details:
      "Goodreads.com RESTful API remaking using Laravel.\
      that is a social network for book lovers\
      to share their reading list with friends and reviews.",
  },
  {
    name: "Scheduling Improving Research",
    details:
      "There are several scheduling algorithms for CPU process scheduling, recalling some\
      of them are shortest job first (SJF) and shortest remaining time first (SRTF). Both\
      of these algorithms must have information about the burst time of the processes\
      in the ready queue. The burst time cannot be determined exactly so estimation\
      comes over here, to execute these algorithms requires the burst time of\
      processes. Research aimed to find out the execution time of the upcoming process before its\
      execution based on it's history.",
  },
  {
    name: "ODE Euler Solver",
    details:
      "Built an ASIC design for acceleration the operations of making ordinary differential equations using Verilog as HDL.\
      and Modelsim for simulation, my role was designing a FSM to perform matrix multiplication.",
  },
  {
    name: "Digital Communication Simulator",
    details:
      "Simulation of the modulation and demodulation of a stream of data between two channels using Matlab.\
      and performed analysis on the bit rate as well as some visualization between noise to signal ratio\
      and correct output.",
  },
  {
    name: "Movies Android App",
    details:
      "Movies recommendation and reviews system,\
      using Java and SQL for database (JDBC library).",
  },
  {
    name: "Image Compression Research",
    details:
      "Participated in Mathematical research day for undergraduate with\
      Image compression research.",
  },
  {
    name: "Multi-cycles CPU Simulation",
    details:
      "Designed an architecture for a processor based on PDP-11 instruction set\
      and assembly language using Modelsim as simulator tool and VHDL as design language.",
  },
  {
    name: "Pipelined Processor 5 Stages",
    details:
      "Designed an architecture for a processor based on MIPS instruction set,\
      assembly language and 5 stages model [Fetch, Decode, Execute, Memory and Write back]\
      and applied pipelining concept on it.\
      using Modelsim as simulator tool and VHDL as Hardware description language .",
  },
  {
    name: "Voice Controlled Car",
    details:
      "A voice-controlled car using a smartphone application used to send voice commands\
    recognized using google API to Bluetooth module in Arduino-Uno kit .",
  },
  {
    name: "Seek And Hide",
    details:
      "Managed to build a DOS 2-Players remote game via LAN using assembly language\
      of 8086 processor instructions.",
  },
  {
    name: "Integrated Circuits Tester",
    details:
      "Unit testing circuit for verifying the operation of ICs/Components using sequential logic design principles.",
  },
  {
    name: "Simple ALU Signed Circuit",
    details:
      "A simple calculator using basic digital logic\
      design gates to perform arithmetic operations.",
  },
  {
    name: "Game Simulator",
    details:
      "Used Data-structure and algorithms techniques to build up\
      a simulation game between castle towers and enemies and calculate\
      some statistics from this simulation",
  },
  {
    name: "Paint For Kids",
    details:
      "Using object-oriented programming techniques\
      A simple application that enables kids to draw \
      fancy shapes and also play some simple games with those shapes,\
      save and load game sessions.",
  },
  {
    name: "Modified Nodal Analysis",
    details:
      "Implementation for modified nodal analysis algorithm for solving electrical circuits.",
  },
];
dom = "";
projects.forEach((project) => {
  dom += `<div>
  <b>${project.name}</b>
  <br>
  ${project.details} 
  </div>
  <br>
  <hr>`;
});
document.getElementById("pro").insertAdjacentHTML("beforeend", dom);
