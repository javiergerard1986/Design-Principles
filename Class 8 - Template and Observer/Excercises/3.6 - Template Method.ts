export enum OBJECT_TYPE {
  INCONSISTENCY,
  ANOMALY
}

// this interface emulates the Jira API - do NOT need to refactor this 
export interface IJiraApiSimulator {
  waitForServer(url: string): boolean;
  connect(url: string, user: string, password: string): void;
  createObject(jiraObject: JIRAObject): void;
  closeConnection(url: string): void;
}

// this interface emulates a generic Logger API - do NOT need to refactor this 
export interface ILoggerAPISimulator {
  writeLog(text: string): boolean;
}

// this interface representes the inferface of a Jira Object's builder - do NOT need to refactor this 
export interface IJiraObjectBuilder {
  setTitle(title: string): void;
  setDescription(description: string): void;
  setType(type: OBJECT_TYPE): void;
  getResult(): JIRAObject;
}

export interface JIRAObject {

}

export interface ITestCaseInfo {
  id: string;
  name: string;
  description: string;
  errorInfo: string;
  result: string;
}

export class JiraAnomaly {
  private JiraAPI: IJiraApiSimulator;
  private LogerAPI: ILoggerAPISimulator;
  private IJiraObjectBuilder: IJiraObjectBuilder;

  public createAnomaly(testCaseInfo: ITestCaseInfo) {
    this.JiraAPI.waitForServer('jira.com');
    this.JiraAPI.connect('jira.com', 'the_user', 'the_password');

    this.IJiraObjectBuilder.setTitle(`${testCaseInfo.id} - ANOMALY!!!! - ${testCaseInfo.result}`);
    this.IJiraObjectBuilder.setDescription(`Please review this Anomaly... ${testCaseInfo.errorInfo}`)
    this.IJiraObjectBuilder.setType(OBJECT_TYPE.ANOMALY);

    const jiraObject: JIRAObject = this.IJiraObjectBuilder.getResult();

    this.JiraAPI.createObject(jiraObject);

    this.LogerAPI.writeLog('anomaly created');
    this.JiraAPI.closeConnection('jira.com');
  }
}

export class JiraInconsistency {
  private JiraAPI: IJiraApiSimulator;
  private LogerAPI: ILoggerAPISimulator;
  private IJiraObjectBuilder: IJiraObjectBuilder;

  public createInconsistency(testCaseInfo: ITestCaseInfo) {
    this.JiraAPI.waitForServer('jira.com');
    this.JiraAPI.connect('jira.com', 'the_user', 'the_password');

    this.IJiraObjectBuilder.setTitle(`${testCaseInfo.id} - This is an Inconsistency`);
    this.IJiraObjectBuilder.setDescription(`Please review this Test Case...... ${testCaseInfo.id} - ${testCaseInfo.description}`)
    this.IJiraObjectBuilder.setType(OBJECT_TYPE.INCONSISTENCY);

    const jiraObject: JIRAObject = this.IJiraObjectBuilder.getResult();

    this.JiraAPI.createObject(jiraObject);

    this.LogerAPI.writeLog('incosistency created');
    this.JiraAPI.closeConnection('jira.com');
  }
}