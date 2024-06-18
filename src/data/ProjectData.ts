export default class ProjectData {
    id: string;
    name: string;
    description: string;
    htmlDescription: string;
    iconUrl: string; // used as thumnail
    gifUrl: string;
    isWide: boolean; // thumbnail will take 2 cols in the grid view
    isHigh: boolean; // thumbnail will take 2 rows in the grid view
    accentColor: string; // color of title bar 

    constructor(id: string, name: string, iconUrl: string, gifUrl: string, desc: string, html: string, accentColor = "#000000", isHigh = false, isWide = false){
        this.id = id;
        this.name = name;
        this.description = desc;
        this.htmlDescription = html;
        this.iconUrl = iconUrl;
        this.gifUrl = gifUrl;
        this.isHigh = isHigh;
        this.isWide = isWide;
        this.accentColor = accentColor;
    }
}
