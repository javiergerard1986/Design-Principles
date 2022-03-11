export interface IControllerStrategy{

    createController(name: string): void;
    deleteController(name: string): void;

}