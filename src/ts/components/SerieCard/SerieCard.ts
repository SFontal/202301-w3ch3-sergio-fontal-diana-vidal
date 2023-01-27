export interface SeriesStructure {
  id: number;
  name: string;
  creator: string;
  year: number;
  poster: string;
  isWatched: boolean;
  score: 0 | 1 | 2 | 3 | 4 | 5;
  emmies: number;
}

export class SerieCard implements SeriesStructure {
  element: Element;
  id: number;
  name: string;
  creator: string;
  year: number;
  poster: string;
  isWatched: boolean;
  score: 0 | 1 | 2 | 3 | 4 | 5;
  emmies: number;
  parentElement: Element;

  constructor(tagName: string, className: string, serie: SeriesStructure) {
    this.element = document.createElement(tagName);
    this.element.className = className;
    this.id = serie.id;
    this.name = serie.name;
    this.creator = serie.creator;
    this.year = serie.year;
    this.poster = serie.poster;
    this.isWatched = serie.isWatched;
    this.score = serie.score;
    this.emmies = serie.emmies;
    this.render();
    this.parentElement = document.querySelector("ul")!;
    this.parentElement.appendChild(this.element);
  }

  private render() {
    this.element.innerHTML = `
        <img class="serie__poster"
          src="${this.poster}"
          alt="${this.name} poster" />
        <h4 class="serie__title">${this.name}</h4>
        <span class="serie__info">${this.creator} (${this.year})</span>
        <ul class="score">
          <li class="score__star">
            <button><i class="icon icon--score far fa-star" title="1/5"></i></button>
          </li>
          <li class="score__star">
            <button><i class="icon icon--score far fa-star" title="2/5"></i></button>
          </li>
          <li class="score__star">
            <button><i class="icon icon--score far fa-star" title="3/5"></i></button>
          </li>
          <li class="score__star">
            <button><i class="icon icon--score far fa-star" title="4/5"></i></button>
          </li>
          <li class="score__star">
            <button><i class="icon icon--score far fa-star" title="5/5"></i></button>
          </li>
        </ul>
        <button><i class="icon icon--delete fas fa-times-circle"></i></button>
    `;
  }
}
