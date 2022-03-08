import { IExplorerPanel } from "../Panel/IExplorerPanel";
import { ExecutionExplorerPanel } from "../Panel/ExecutionExplorerPanel";
import { DeviceExplorerPanel } from "../Panel/DeviceExplorerPanel";

export class Context {

    private _explorerPanel: IExplorerPanel;

    constructor(){
    }

    public getExplorerPanel(): IExplorerPanel{
        return this._explorerPanel;
    }

    public setContext(featureFlagAvailable: boolean): void {        
        if (featureFlagAvailable) {
            this._explorerPanel = new DeviceExplorerPanel();
        } else {
            this._explorerPanel = new ExecutionExplorerPanel();
        }
    }
}