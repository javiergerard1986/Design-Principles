import { IPanel } from "./Panel/IPanel";

export abstract class PanelBaseTest {

    protected _propertiesPanel: IPanel;

    abstract setUp(): void;

    abstract tests(): void;

}