import { SeriesList } from "./components/SeriesList/SeriesList";
import series from "./series";

const pendingList = new SeriesList("section", "list", "pending", series);
const watchedList = new SeriesList("section", "list", "watched", series);
