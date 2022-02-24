import { IAbstractFactory } from "../Factories/IAbstractFactory";
import { RaiderFactory } from "../Factories/RaiderFactory";
import { SampleAppFactory } from "../Factories/SampleAppFactory";
import { PLATFORM } from "./platformEnum";
import { IPlatformManager } from "./IPlatformManager";

export class PlatformManager implements IPlatformManager{

    public initialize(platform: string): IAbstractFactory {
        switch(platform){
            case PLATFORM.RAIDER:
                return new RaiderFactory();
            case PLATFORM.SAMPLE:
                return new SampleAppFactory();
       }
    }

}