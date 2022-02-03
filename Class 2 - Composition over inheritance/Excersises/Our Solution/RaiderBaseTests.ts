export abstract class RaiderBaseTests {

    constructor(){}

    protected setup(): void{
        console.log("Common setup actions");
    };

    protected abstract tests(): void;    

    protected teardown(): void{
        console.log("Other teardown actions");
    }

}