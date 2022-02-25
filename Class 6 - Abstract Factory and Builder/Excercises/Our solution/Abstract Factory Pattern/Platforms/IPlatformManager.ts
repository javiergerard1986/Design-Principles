import { IAbstractFactory } from "../Factories/IAbstractFactory";

export interface IPlatformManager {
    _platform: string;
    initialize(platform: string): IAbstractFactory;
}