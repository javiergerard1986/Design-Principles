import { PropertiesPanel } from "../Panels/propertiesPanel";
import { Toolbox } from "../Toolbox/toolBox";

export interface IAbstractFactory {

    createPropertiesPanel(): PropertiesPanel;
    
    createToolbox(): Toolbox;

}