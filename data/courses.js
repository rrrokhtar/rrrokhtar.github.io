courses = [
  {
    title: "Natural Language Processing with Classification and Vector Spaces",
    href:
      "https://www.coursera.org/account/accomplishments/certificate/FLYQ3G2VZ7WQ",
  },
  {
    title: "Natural Language Processing in TensorFlow",
    href:
      "https://www.coursera.org/account/accomplishments/certificate/8A83P9GCQQDN",
  },
  {
    title: "Perform Sentiment Analysis with scikit-learn",
    href:
      "https://www.coursera.org/account/accomplishments/certificate/J45ZB3PMLU2P",
  },
  {
    title: "Machine Learning",
    href:
      "https://www.coursera.org/account/accomplishments/certificate/DKT5DS75E79Q",
  },
  {
    title: "Neural Networks and Deep Learning",
    href:
      "https://www.coursera.org/account/accomplishments/certificate/CTS48MR3L8VL",
  },
  {
    title: "Structuring Machine Learning Projects",
    href:
      "https://www.coursera.org/account/accomplishments/certificate/PN2W4FQGAVTB",
  },
  {
    title: "Improving Deep Neural Networks",
    href:
      "https://www.coursera.org/account/accomplishments/certificate/EHMHNJLDSSUJ",
  },
  {
    title: "Convolutional Neural Networks",
    href:
      "https://www.coursera.org/account/accomplishments/certificate/VRLYPX9WKZLP",
  },
  {
    title: "Sequence Models",
    href:
      "https://www.coursera.org/account/accomplishments/certificate/9EW3ZAH523XS",
  },
  {
    title: "AWS Machine Learning Foundations Course",
    href: "",
  },
  {
    title: "Intel® Edge AI Scholarship Foundation Course Nanodegree Program",
    href: "",
  },
];
dom = "";
courses.forEach((course) => {
  dom += course.href
    ? `&mdash; <a href=${course.href}>${course.title}</a><br>`
    : `&mdash; <a>${course.title}</a><br>`;
});
document.getElementById("courses").insertAdjacentHTML("beforeend", dom);
