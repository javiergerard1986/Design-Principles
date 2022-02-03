// 1 - Refactor the code using the design principles explained during the workshop
// 2 - The code must compile
// 3 - You don't need to implement the tests

/*
                                      RaiderBaseTests
                                              |
                     RaiderBaseEmulatorTests     RaiderBasePhysicalControllerTests
                               |
RaiderBaseEmulatorLogix500Tests RaiderBaseEmulatorLogix600Tests
                |
   RaiderEmulatorLogix500Tests       
*/

// BaseClass definition
export abstract class RaiderBaseTests {

    public setUp() {
        const emulatorType = "Logix300";
        this.initiateEmulator(emulatorType);
        this.waitForEmulatorToBeAvailable();
        this.initiateController();
        this.waitForControllerToBeAvailable();
    }

    public tearDown(){
        this.emulatorShutdown();
        this.deviceDeallocate();
    }
    public abstract tests();

    public initiateEmulator(emulatorType: string){};
    public waitForEmulatorToBeAvailable(){};
    public initiateController(){};
    public waitForControllerToBeAvailable(){};
    public emulatorShutdown(){};
    public deviceDeallocate(){};

}

// Emulators vs Phyisical section
export class RaiderBaseEmulatorTests extends RaiderBaseTests {

    public tearDown(): void {
        this.emulatorShutdown();
        this.deviceDeallocate();

        if(!this.checkEmulatorOnlineStatus()) {
            throw new Error("The emulator is still online!");
        }
    }

    public tests(): void {
        console.log('upalala');
    }

    public checkEmulatorOnlineStatus(): boolean{return true};

}

export class RaiderBasePhysicalControllerTests extends RaiderBaseTests {
    public tests() {
        console.log('upalala');
    }
}

// Emulator Logix 500 vs Logix 600

export class RaiderBaseEmulatorLogix500Tests extends RaiderBaseEmulatorTests {
    public setUp() {
        const emulatorType = "Logix500";
        this.initiateEmulator(emulatorType);
        this.waitForEmulatorToBeAvailable();
    }
}

export class RaiderBaseEmulatorLogix600Tests extends RaiderBaseEmulatorTests {
    
    public setUp() {
        const emulatorType = "Logix600";
        this.initiateEmulator(emulatorType);
        this.waitForEmulatorToBeAvailable();
    }
}

// Tests Implementations

export class RaiderPhysicalLogix500Tests extends RaiderBasePhysicalControllerTests {
    public tests() {
        console.log('upalala');
    }
}