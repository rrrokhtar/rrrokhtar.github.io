awards = [
  {
    title: "GADS Pluralsight Skill IQ Award 2020",
    href: "",
  },
  {
    title: "Big Data Engineer - Mastery Award 2018",
    href:
      "https://www.youracclaim.com/badges/19ca19c7-3f4b-4b91-8335-57154a737645/linked_in_profile",
  },
  {
    title: "Big Data Engineer - Explorer Award 2018",
    href:
      "https://www.youracclaim.com/badges/f6a0e458-252a-45a5-acd6-efe0ece3ae9a/linked_in_profile",
  },
];
dom = "";
awards.forEach((award) => {
  dom += award.href
    ? `&mdash; <a href=${award.href}>${award.title}</a><br>`
    : (dom += `&mdash; <a>${award.title}</a><br>`);
});
document.getElementById("awards").insertAdjacentHTML("beforeend", dom);
