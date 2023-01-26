interface ContainerHeaderStructure {
  parentElement: Element;
  element: Element;
  title: string;
}

class ContainerHeaderComponent implements ContainerHeaderStructure {
  parentElement: Element;
  element: Element;
  title: string;

  constructor(title: string, className: string) {
    this.parentElement = document.querySelector(".container")!;
    this.element = document.createElement("header");
    this.element.className = className;
    this.title = title;
    this.render();
  }

  render() {
    this.element.innerHTML = `<h1 class="main-title">${this.title}</h1>`;
    this.parentElement.appendChild(this.element);
  }
}

export default ContainerHeaderComponent;
