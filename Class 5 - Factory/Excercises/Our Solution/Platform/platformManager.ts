import { Environment } from "../Environment/environment";
import { RaiderEnvironment } from "../Environment/raiderEnvironment";
import { SampleAppEnvironment } from "../Environment/sampleAppEnvironment";
import { IPlatformManager } from "./IPlatformManager";
import { PLATFORM } from "./PlatformEnum";

export class PlatformManager implements IPlatformManager{
    
    public initialize(platform: string): Environment {
        switch(platform){
            case PLATFORM.RAIDER:
                return new RaiderEnvironment();
            case PLATFORM.SAMPLE:
                return new SampleAppEnvironment();
       }
    }
}