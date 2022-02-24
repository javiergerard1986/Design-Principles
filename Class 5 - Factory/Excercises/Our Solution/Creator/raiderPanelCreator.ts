import { RaiderPropertiesPanel } from "../Panel/RaiderPropertiesPanel";
import { Environment } from "./environment";

export class RaiderEnvironment extends Environment {
    
    public createPropertiesPanel(): RaiderPropertiesPanel {
        return new RaiderPropertiesPanel();
    }
    
}