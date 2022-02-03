export enum ControllerType {
    Logix300,
    Logix500
}

export abstract class Emulator {
    protected _controllerType: ControllerType;

    constructor(controllerType: ControllerType) {
        this._controllerType = controllerType;
    }

    public abstract initiateEmulator(): void;
    public abstract waitForEmulatorToBeAvailable(): void;
    public abstract checkEmulatorOnlineStatus(): boolean;
    public abstract emulatorShutdown(): void;
}

export class EmulatorGeneric extends Emulator {
    protected _controllerType: ControllerType;

    public initiateEmulator(): void {
        console.log('emulator initiated!')
    }

    public waitForEmulatorToBeAvailable(): void {
        console.log('emulator available!')
    }

    public checkEmulatorOnlineStatus(): boolean {
        return true;
    }

    public emulatorShutdown(): void {
        console.log('emulator is off!')
    }
}

export abstract class Controller {
    protected _controllerType: ControllerType;

    constructor(contollerType: ControllerType) {
        this._controllerType = contollerType;
    }

    public abstract initiateController(): void;
    public abstract waitForControllerToBeAvailable(): void;
    public abstract deviceDeallocate(): void;
}

export class ControllerGeneric extends Controller {

    public initiateController(): void {
        console.log('controller initiated!')
    }

    public waitForControllerToBeAvailable(): void {
        console.log('controller available!')
    }

    public deviceDeallocate(): void {
        console.log('device allocated!')
    }
}

export abstract class RaiderBaseTests {
    public abstract setUp(): void;
    public abstract tearDown(): void;
}

export class RaiderBaseEmulatorTests extends RaiderBaseTests {
    protected emulator: Emulator;

    public setUp() {
        this.emulator.initiateEmulator();
        this.emulator.waitForEmulatorToBeAvailable();
    }

    public tearDown(): void {
        this.emulator.emulatorShutdown

        if (!this.emulator.checkEmulatorOnlineStatus()) {
            throw new Error("The emulator is still online!");
        }
    }

    protected setEmulator(emulator: Emulator): void {
        this.emulator = emulator;
    }
}

export class RaiderBasePhysicalControllerTests extends RaiderBaseTests {
    protected controller: Controller;

    public setUp() {
        this.controller.initiateController();
        this.controller.waitForControllerToBeAvailable();
    }

    public tearDown(): void {
        this.controller.deviceDeallocate
    }

    protected setController(controller: Controller): void {
        this.controller = controller;
    }
}

