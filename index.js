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
  const elLista = document.querySelector('.list');
  elLista.replaceChildren();

  cosasAprendidas.forEach((elem) => {
    const nuevoElLi = document.createElement(´li´);
    nueevoElLi.innerText = elem.tema;
    if (elem.class.lenght > 0)
      nuevoElLi.classList.add(elem.class);
    elLista.appens(nuevoElLi);
});

main();
