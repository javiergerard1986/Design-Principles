import { Component } from "../component";

export class PanelBase extends Component{
    
    name: string;
    id: string;

    constructor(selector: string, name: string, id: string){
        super(selector);
        this.name = name;
        this.id = id;
    }

    getName(): string {
        return this.name;
    }
    
    getId(): string {
        return this.id;
    }
}