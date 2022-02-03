import { RaiderBaseTests } from "./RaiderBaseTests";

export class FBDTests extends RaiderBaseTests {
    
    public setup(){
        super.setup();
        console.log('Other setup operations that the FBD feature requires')
    }

    protected tests(): void {
        console.log("FBD Test 1");
        console.log("FBD Test 2");
        console.log("FBD Test ...");
        console.log("FBD Test N");
    }

    public teardown(): void {
        super.teardown();
        console.log('Other teardown operations that the FBD feature requires')
    }
    
}