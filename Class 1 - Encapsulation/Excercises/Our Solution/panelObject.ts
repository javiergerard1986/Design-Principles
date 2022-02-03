// 1 - Refactor the code using the design principles explained during the workshop
// 2 - PanelObject should be able to perform the moveTo action without knowing implementation details
// 3 - The code must compile
import IGetCoordinates from "./IGetCoordinates";
import Electron from "./electron";
import { Platform, Resolution } from "./environmentEnum";
import { Environment } from "./environment";


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

export default class PanelObject implements IGetCoordinates {
    protected environment: Environment;
    protected panelBorder: Element;
    
    constructor() {
        this.panelBorder = new Element('');
        this.environment = new Electron(Resolution.electronSmall);
    }

    /**
     * Move panel to a specified position
     * @param to (numer) Coordinate to move the panel
     * @returns Promise<void>
     */
    public async moveTo(to: number): Promise<void> {
        // Define acutal position of the panel to be moved
        var currentPosition: number = this.getCurrentPosition();
        // Move panel
        this.panelBorder.dragAndDrop(currentPosition, to);
    }

    /**
     * Define the current panel position based on the Electron client resolution
     * @returns Promise<number> The current panel position based on the Electron client resolution
     */
     getCurrentPosition(): number {
        let currentPosition: number;

        switch(this.environment.getPlatform()){
            case Platform.electron:
                currentPosition = this.getPosByElectronResolution();
                break;
            case Platform.browser:
                currentPosition = this.getPosByBrowserResolution();
                break;
            default:
                throw Error ('Error: Invalid environment platform');
        }

        return currentPosition;
    };

    /**
     * Define the current panel position based on the Electron client resolution
     * @returns number The current panel position based on the Electron client resolution
     */
     getPosByElectronResolution(): number {
        let currentPosition: number;
        
        switch(this.environment.getResolution()){
            case Resolution.electronSmall:
                currentPosition = (0.5 * 30) / 33 + 55;
                break;
            case Resolution.electronBig:
                currentPosition = (0.9 * 88) / 78 + 22;
                break;
            default:
                throw Error('Error: Invalid Electron resolution'); 
        }
        
        return currentPosition;
    }

    /**
     * Define the current panel position based on the Browser client resolution
     * @returns Promise<number> The current panel position based on the Browser client resolution
     */
    getPosByBrowserResolution(): number {
        let currentPosition: number;
    
        switch(this.environment.getResolution()){
            case Resolution.browser:
                currentPosition = (0.9 * 88) / 78 + 22;
                break;
            default:
                throw Error('Error: Invalid Browser resolution');    
        }
    
        return currentPosition;
    };
};