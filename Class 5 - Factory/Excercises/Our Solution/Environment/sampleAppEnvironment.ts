import { SampleAppPropertiesPanel } from "../Panel/SampleAppPropertiesPanel";
import { Environment } from "./environment";

export class SampleAppEnvironment extends Environment {
    
    public createPropertiesPanel(): SampleAppPropertiesPanel {
        return new SampleAppPropertiesPanel();
    }
    
}