import { DeviceType } from "./deviceTypeEnum";
import { Emulator } from "./Emulator";
import { RaiderBaseTests } from "./RaiderBaseTests";

export class PanelTests extends RaiderBaseTests{
    
    private device: Emulator;

    public setup(){
        super.setup();
        this.device = new Emulator(DeviceType.LOGIX500);
        this.device.startUp();
        console.log('Other setup operations that the Panel feature requires')
    }

    public tests(): void {
        console.log('Panel with Emulator - Test 1');
        console.log('Panel with Emulator - 2');
        console.log('Panel with Emulator - ...');
        console.log('Panel with Emulator - N');
    }

    public teardown(): void {
        super.teardown();
        this.device.shutDown();
        console.log('Other teardown operations that the Panel feature requires')
    }

}