import { Environment } from "./environment";
import { Platform, Resolution } from "./environmentEnum";

export default class Electron extends Environment{

    constructor(resolution: string){
       // Set platform
       super(Platform.electron);
       // Set resolution
       this.setResolution(resolution);
    }

    public setResolution(resolution: string): void{
        // Set resolution
        switch(resolution){
            case(''):
                this.resolution = Resolution.electronSmall;
                break;
            default:
                this.resolution = resolution;
                break;
        }
    } 
}