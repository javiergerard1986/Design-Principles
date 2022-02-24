export abstract class PropertiesPanel {

    _tabs: string[];

    getTabs(): string[] {
        return this._tabs;
    }

    abstract getPropertiesList(): string[];

}