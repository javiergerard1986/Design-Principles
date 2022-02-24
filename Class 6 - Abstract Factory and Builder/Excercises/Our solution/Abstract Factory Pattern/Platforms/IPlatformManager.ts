import { IAbstractFactory } from "../Factories/IAbstractFactory";

export interface IPlatformManager {
    initialize(platform: string): IAbstractFactory;
}