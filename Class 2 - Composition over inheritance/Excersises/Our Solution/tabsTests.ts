import { PhysicController } from "./PhysicController";
import { RaiderBaseTests } from "./RaiderBaseTests";

export class TabsTests extends RaiderBaseTests{
    
    private device: PhysicController;

    public setup(){
        super.setup();
        this.device = new PhysicController();
        this.device.startUp();
        console.log('Other setup operations that the Tabs feature requires')
    }

    public tests(): void {
        console.log('Tabs with Controller Test 1');
        console.log('Tabs with Controller 2');
        console.log('Tabs with Controller ...');
        console.log('Tabs with Controller N');
    }

    public teardown(): void {
        super.teardown();
        this.device.shutDown();
        console.log('Other teardown operations that the Tabs feature requires')
    }

}