import { BaseDevice } from "./BaseDevice";

export class Emulator  extends BaseDevice{
    
    private type: string;

    constructor(emulatorType: string){
        super();
        this.type = emulatorType;
    }

    public initiateDevice(): void {
        console.log('Required actions to initialize an Emulator');
    }

    public checkEmulatorOnlineStatus(): boolean{
        return true
    };

    public shutDown(): void {
        super.shutDown();

        if(!this.checkEmulatorOnlineStatus()) {
            throw new Error("The emulator is still online!");
        }
    }
}
    