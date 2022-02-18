import { Environment } from "./Environment/environment";
import { PropertiesPanel } from "./Panel/propertiesPanel";
import { PLATFORM } from "./Platform/PlatformEnum";
import { PlatformManager } from "./Platform/platformManager";

export class PanelBaseTest {

    _platformManager: PlatformManager;
    _environment: Environment;
    _platform: string = PLATFORM.RAIDER;
    _propertiesPanel: PropertiesPanel;

    public setUp(): void{
        this._platformManager =  new PlatformManager();
        this._environment = this._platformManager.initialize(this._platform);
        this._propertiesPanel =  this._environment.createPropertiesPanel();
    };

    tests(): void{}

}