import { ITestCaseInfo } from "../Interfaces/ITestCaseInfo";
import { OBJECT_TYPE } from "../Interfaces/OBJECT_TYPE";
import { TicketTemplate } from "./TicketTemplate";

export class JiraInconsistency extends TicketTemplate {
    
    public createInconsistency(testCaseInfo: ITestCaseInfo) {
        this.createTicket(testCaseInfo);
    }

    protected setTicket(testCaseInfo: ITestCaseInfo): void {
        this.IJiraObjectBuilder.setTitle(`${testCaseInfo.id} - This is an Inconsistency`);
        this.IJiraObjectBuilder.setDescription(`Please review this Test Case...... ${testCaseInfo.id} - ${testCaseInfo.description}`)
        this.IJiraObjectBuilder.setType(OBJECT_TYPE.INCONSISTENCY);
    }
    
}