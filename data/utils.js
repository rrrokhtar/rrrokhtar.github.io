
export default function writeDom(array, id) {
    dom = "";
    array.forEach((e) => {
      dom += `&mdash; ${e}<br>`;
    });
    document.getElementById(id).insertAdjacentHTML("beforeend", dom);
  };