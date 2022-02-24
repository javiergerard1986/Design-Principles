import { PropertiesPanel } from "../Panels/propertiesPanel";
import { RaiderPropertiesPanel } from "../Panels/RaiderPropertiesPanel";
import { RaiderToolbox } from "../Toolbox/RaiderToolBox";
import { Toolbox } from "../Toolbox/toolBox";
import { IAbstractFactory } from "./IAbstractFactory";

export class RaiderFactory implements IAbstractFactory {
    
    createPropertiesPanel(): PropertiesPanel {
        return new RaiderPropertiesPanel();
    }
    
    createToolbox(): Toolbox {
        return new RaiderToolbox();
    }
    
}