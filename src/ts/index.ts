import ContainerHeaderComponent from "./components/ContainerHeader/ContainerHeaderComponent";
import SeriesListComponent from "./components/SeriesList/SeriesListContainer";

const mainTitle = "My Series";

const header = new ContainerHeaderComponent(mainTitle, "main-header");

const mainContentTitle = "Series list";

const maincContent = new SeriesListComponent(mainContentTitle, "main-content");
