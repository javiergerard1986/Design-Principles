import { IControllerStrategy } from "../Explorer/IControllerStrategy";

export class Context {

    private _strategy: IControllerStrategy;

    constructor(){
    }

    public setStrategy(strategy: IControllerStrategy): void {        
        this._strategy = strategy;
    }

    public createController(name: string): void {
        this._strategy.createController(name);
    }

    public deleteController(name: string): void {
        this._strategy.deleteController(name);
    }

}