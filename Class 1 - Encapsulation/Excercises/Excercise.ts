// 1 - Refactor the code using the design principles explained during the workshop
// 2 - PanelObject should be able to perform the moveTo action without knowing implementation details
// 3 - The code must compile

class Element{
    protected locator: string;

    constructor(locator: string) {
        this.locator = locator;
    }

    public toString(): string {
        return this.locator;
    }

    public dragAndDrop(from: number, to: number) {};
}

export default class PanelObject {
    protected panelBorder: Element;
    protected platform: string;
    protected resolution: string;

    constructor(platform: string, resolution: string) {
        this.panelBorder = new Element('');

        //window properties
        if(platform === ''){
            this.platform = "electron";
        }
        if(this.resolution === ''){
            this.resolution = "800x600";
        }
        
    }

    public async moveTo(to: number): Promise<void> {

        var actualPositionX: number;

        if(this.platform === "electron"){
            if(this.resolution === "800x600")
            {
                actualPositionX = (0.5 * 30) / 33 + 55;
                this.panelBorder.dragAndDrop(actualPositionX, to);
            }
            if(this.resolution === "1920x1080")
            {
                actualPositionX = (0.9 * 88) / 78 + 22;
                this.panelBorder.dragAndDrop(actualPositionX, to);  
            }
        }
        else if(this.platform === "browser") {
            if(this.resolution === "1024x768")
                actualPositionX = (0.9 * 88) / 78 + 22;
                this.panelBorder.dragAndDrop(actualPositionX, to);
            }
    }
};