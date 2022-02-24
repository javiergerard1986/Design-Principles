import { PropertiesPanel } from "./propertiesPanel";


export class SampleAppPropertiesPanel extends PropertiesPanel {
    
    getPropertiesList(): string[] {
        return ['4', '5', '6'];
    }
    
}