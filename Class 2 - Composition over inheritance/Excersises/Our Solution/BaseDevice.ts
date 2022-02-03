export abstract class BaseDevice {
    
    public startUp(): void {
        this.initiateDevice();
        this.waitToBeAvailable();
    }

    public abstract initiateDevice(): void;

    public emulatorShutdown(): void{};

    public deviceDeallocate(): void{};

    public waitToBeAvailable(): void{};

    public shutDown(): void {
        this.emulatorShutdown();
        this.deviceDeallocate();
    }

}