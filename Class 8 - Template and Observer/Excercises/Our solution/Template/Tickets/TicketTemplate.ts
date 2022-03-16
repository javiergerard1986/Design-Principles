import { IJiraApiSimulator } from "../Interfaces/IJiraApiSimulator";
import { IJiraObjectBuilder } from "../Interfaces/IJiraObjectBuilder";
import { ILoggerAPISimulator } from "../Interfaces/ILoggerAPISimulator";
import { ITestCaseInfo } from "../Interfaces/ITestCaseInfo";
import { JIRAObject } from "../Interfaces/JIRAObject";

export abstract class TicketTemplate {
    
    private JiraAPI: IJiraApiSimulator;
    private LogerAPI: ILoggerAPISimulator;
    protected IJiraObjectBuilder: IJiraObjectBuilder;

    protected createTicket(testCaseInfo: ITestCaseInfo): void{

        this.waitForServer();
        this.connect();
        this.setTicket(testCaseInfo);    
        this.createObject();
        this.writeLog();
        this.closeConnection();
    }

    protected waitForServer() {
        this.JiraAPI.waitForServer('jira.com');
    }

    protected connect(){
        this.JiraAPI.connect('jira.com', 'the_user', 'the_password');
    }

    protected createObject(){
        const jiraObject: JIRAObject = this.IJiraObjectBuilder.getResult();
        this.JiraAPI.createObject(jiraObject);
    }

    protected writeLog(){
        this.LogerAPI.writeLog('anomaly created');
    }

    protected closeConnection(){
        this.JiraAPI.closeConnection('jira.com');
    }

    protected abstract setTicket(testCaseInfo: ITestCaseInfo): void;

}