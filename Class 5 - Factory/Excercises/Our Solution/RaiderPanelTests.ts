import { RaiderPropertiesPanel } from "./Panel/RaiderPropertiesPanel";
import { PanelBaseTest } from "./RaiderBaseTest";

export class RaiderPanelTests extends PanelBaseTest {
    
    setUp() {
        this._propertiesPanel = new RaiderPropertiesPanel();
    }
    
    tests() {
        const panelProperties = this._propertiesPanel.getPropertiesList();
        // Additional test stuff here
    }
}