const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function main() {
  const listaEl = document.querySelector('.lista');
  const itemsElm = document.querySelectorAll('.lista li');

  for(let el of itemsElm) {
    el.remove();
  }
  for(let item of cosasQueAprendimos){
    const newLiElem = document.createElement("li")
    newLiEl.textContent = item.tema;
    newLiEl.classList.add(item.class || "item");

    listaEl.appendChild(newLiEl);
  }
};
main();
