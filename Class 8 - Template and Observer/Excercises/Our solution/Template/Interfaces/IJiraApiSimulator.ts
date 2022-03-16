import { JIRAObject } from "./JIRAObject";

export interface IJiraApiSimulator {
    waitForServer(url: string): boolean;
    connect(url: string, user: string, password: string): void;
    createObject(jiraObject: JIRAObject): void;
    closeConnection(url: string): void;
}  