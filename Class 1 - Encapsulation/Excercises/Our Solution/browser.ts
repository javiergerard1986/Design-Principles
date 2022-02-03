import { Environment } from "./environment";
import { Platform, Resolution } from "./environmentEnum";

export default class Browser extends Environment{

    constructor(resolution: string){
        // Set platform
        super(Platform.browser);
        // Set resolution
        this.setResolution(resolution);
    }

    /**
     * Set resolution to the environment
     * @param resolution (string) Resolution to set
     */
    public setResolution(resolution: string): void{
        // Set resolution
        switch(resolution){
            case(''):
                this.resolution = Resolution.browser;
                break;
            default:
                this.resolution = resolution;
                break;
        }
    }
}