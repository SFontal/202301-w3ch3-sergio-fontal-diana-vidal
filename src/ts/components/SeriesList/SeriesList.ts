import { type Series } from "../SeriesStructure/SeriesStructure";

interface SeriesListStructure {
  element: Element;
  title: string;
  span: string;
  typeOfList: string;
  series: Series;
}

export class SeriesList implements SeriesListStructure {
  parentElement = document.querySelector(".main-content")!;
  element: Element;
  title: string;
  span: string;
  typeOfList: string;
  series: Series;

  constructor(
    tagName: string,
    className: string,
    typeOfList: string,
    series: Series
  ) {
    this.element = document.createElement(tagName);
    this.element.className = className;
    this.typeOfList = typeOfList;
    this.series = series;
    this.title = typeOfList === "pending" ? "Pending series" : "Watched series";

    this.render();
    this.element.innerHTML = `<h3 class="list__title">${this.title}</h3>
                              <span class="list__info">${this.span}</span>`;

    this.parentElement.appendChild(this.element);
  }

  private render() {
    if (this.typeOfList === "pending") {
      this.pendingSeries();
      this.span = `You have ${this.series.length} series pending to watch`;
      return;
    }

    this.watchedSeries();
    this.span = `You have watched ${this.series.length} series`;
  }

  private pendingSeries() {
    this.series = this.series.filter((serie) => !serie.isWatched);
  }

  private watchedSeries() {
    this.series = this.series.filter((serie) => serie.isWatched);
  }
}
