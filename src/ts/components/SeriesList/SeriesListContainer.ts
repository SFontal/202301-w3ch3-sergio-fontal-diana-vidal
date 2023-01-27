import type TitleStructure from "../TitleStructure/TitleStructure";

class SeriesListComponent implements TitleStructure {
  title: string;
  parentElement: Element;
  element: Element;

  constructor(title: string, className: string) {
    this.parentElement = document.querySelector(".container")!;
    this.element = document.createElement("main");
    this.title = title;
    this.element.className = className;
    this.render();
  }

  render() {
    this.element.innerHTML = `<h2 class="main-content__title">${this.title}</h2>`;
    this.parentElement.appendChild(this.element);
  }
}

export default SeriesListComponent;
