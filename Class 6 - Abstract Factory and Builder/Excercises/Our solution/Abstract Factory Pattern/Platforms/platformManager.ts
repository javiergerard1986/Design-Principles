import { IAbstractFactory } from "../Factories/IAbstractFactory";
import { RaiderFactory } from "../Factories/RaiderFactory";
import { SampleAppFactory } from "../Factories/SampleAppFactory";
import { PLATFORM } from "./platformEnum";
import { IPlatformManager } from "./IPlatformManager";

export class PlatformManager implements IPlatformManager{

    _platform: string;

    constructor() {
        this._platform = PLATFORM.RAIDER;
    }

    public initialize(): IAbstractFactory {
        switch(this._platform){
            case PLATFORM.RAIDER:
                return new RaiderFactory();
            case PLATFORM.SAMPLE:
                return new SampleAppFactory();
       }
    }

}