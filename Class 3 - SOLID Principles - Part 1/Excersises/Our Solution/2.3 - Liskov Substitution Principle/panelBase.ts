export abstract class PanelBase{
    protected name: string;
    protected id: string;

    constructor(name:string, id:string){
        this.name = name;
        this.id = id;
    }

    public getName(): string {
        return this.name;
    }

    public getId(): string {
        return this.id;
    }
}