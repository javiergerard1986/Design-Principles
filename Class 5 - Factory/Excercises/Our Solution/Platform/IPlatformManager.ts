import { PanelCreator } from "../Creator/panelCreator";

export interface IPlatformManager{
    initialize(platform:string): PanelCreator;
}