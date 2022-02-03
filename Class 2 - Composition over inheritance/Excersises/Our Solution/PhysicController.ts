import { BaseDevice } from "./BaseDevice";

export class PhysicController extends BaseDevice{
    public initiateDevice(): void {
        console.log('Requried actions to initialize a Controller');
    }

}