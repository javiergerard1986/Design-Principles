
export abstract class PanelBase {
    private _name: string;
    private _id: string;

    public get name(): string {
        return this.name;
    }

    public get id(): string {
        return this.id;
    }
}

export interface ITab {
    get name(): string;
    set name(name: string);
}

export class AwesomeTab implements ITab {
    private _name: string;

    private readonly AWESOME_TAB = "Awesome Tab";

    constructor(name: string) {
        this.name = name;
    }

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = `${name} ${this.AWESOME_TAB}`;
    }
}

export class ToolTab implements ITab {
    private _name: string;

    private readonly TOOL_TAB = "Tooltab";

    constructor(name: string) {
        this.name = name;
    }

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = `${name} ${this.TOOL_TAB}`;
    }
}

export default interface TabbedPanel {
    get tabs(): ITab[];
}

export class PropertiesPanel extends PanelBase implements TabbedPanel {
    private _tabs: ITab[];

    constructor() {
        super();
    }

    public get tabs(): ITab[] {
        if (!this._tabs) {
            this._tabs = [new AwesomeTab('Properties Tab 1'),
                          new AwesomeTab('Properties Tab 2'),
                          new AwesomeTab('Properties Tab 3'),]
        }

        return this._tabs;
    }
}

export class ToolboxPanel extends PanelBase implements TabbedPanel {
    private _tabs: ITab[];

    constructor() {
        super();
    }

    public get tabs(): ITab[] {
        if (!this._tabs) {
            this._tabs = [new ToolTab('Toolbox Tab A'),
                          new ToolTab('Toolbox Tab B'),
                          new ToolTab('Toolbox Tab C'),]
        }

        return this._tabs;
    }
}

export class MyCustomPanel extends PanelBase {
    constructor() {
        super();
    }
}