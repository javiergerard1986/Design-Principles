import { Environment } from "../Environment/environment";

export interface IPlatformManager{
    initialize(platform:string): Environment;
}