// 1 - Refactor the code to respect the Liskov Substitution Principle
// 2 - The code must compile 

export abstract class PanelBase {
    protected _tabs: string[];

    private _name: string;
    private _id: string;

    public get name(): string {
        return this.name;
    }

    public get id(): string {
        return this.id;
    }

    public abstract get tabs(): string[]
}

export class PropertiesPanel extends PanelBase {
    constructor() {
        super();
        this._tabs = ['Properties Tab 1 Awesome Tab', 'Properties Tab 2 Awesome Tab', 'Properties Tab 3 Awesome Tab']
    }

    public get tabs(): string[] {
        return this._tabs;
    }
}

export class ToolboxPanel extends PanelBase {
    constructor() {
        super();
        this._tabs = ['Toolbox Tab A Tooltab', 'Toolbox Tab B Tooltab', 'Toolbox Tab C Tooltab']
    }

    public get tabs(): string[] {
        return this._tabs;
    }
}

export class MyCustomPanel extends PanelBase {
    constructor() {
        super();
    }

    public get tabs(): string[] {
        throw new Error('My Custom Panel does not have tabs!')
    }
}