import { PanelCreator } from "./Creator/panelCreator";
import { PropertiesPanel } from "./Panel/propertiesPanel";
import { PLATFORM } from "./Platform/PlatformEnum";
import { PlatformManager } from "./Platform/platformManager";

export class PanelBaseTest {

    platformManager: PlatformManager;
    panelCreator: PanelCreator;
    platform: string = PLATFORM.RAIDER;
    propertiesPanel: PropertiesPanel;

    public setUp(): void{
        this.platformManager =  new PlatformManager();
        this.panelCreator = this.platformManager.initialize(this.platform);
        this.propertiesPanel =  this.panelCreator.createPropertiesPanel();
    };

    tests(): void{}

}