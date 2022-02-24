import { PanelCreator } from "../Creator/panelCreator";
import { RaiderPanelCreator } from "../Creator/raiderPanelCreator";
import { SampleAppPanelCreator } from "../Creator/sampleAppPanelCreator";
import { IPlatformManager } from "./IPlatformManager";
import { PLATFORM } from "./PlatformEnum";

export class PlatformManager implements IPlatformManager{
    
    public initialize(platform: string): PanelCreator {
        switch(platform){
            case PLATFORM.RAIDER:
                return new RaiderPanelCreator();
            case PLATFORM.SAMPLE:
                return new SampleAppPanelCreator();
       }
    }
}