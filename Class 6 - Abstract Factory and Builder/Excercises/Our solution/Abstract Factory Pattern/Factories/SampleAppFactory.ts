import { PropertiesPanel } from "../Panels/propertiesPanel";
import { SampleAppPropertiesPanel } from "../Panels/SampleAppPropertiesPanel";
import { SampleAppToolbox } from "../Toolbox/SampleAppToolbox";
import { Toolbox } from "../Toolbox/toolBox";
import { IAbstractFactory } from "./IAbstractFactory";

export class SampleAppFactory implements IAbstractFactory {
    createPropertiesPanel(): PropertiesPanel {
        return new SampleAppPropertiesPanel();
    }
    createToolbox(): Toolbox {
        return new SampleAppToolbox();
    }
    
}