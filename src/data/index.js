import data1 from "./CONTENTLISTINGPAGE-PAGE1.json";
import data2 from "./CONTENTLISTINGPAGE-PAGE2.json";
import data3 from "./CONTENTLISTINGPAGE-PAGE3.json";
import { get } from "lodash";

const data = [...get(data1, "page.content-items.content"), ...get(data2, "page.content-items.content"), ...get(data3, "page.content-items.content")];

export default data;
