import { NightlyReportTicket } from "../Tickets/nightlyReportTicket";
import { IBuilder } from "./IBuilder";

export class TicketBuilder implements IBuilder{
   
    ticket: NightlyReportTicket = new NightlyReportTicket();
    
    setProjectName(name: string): void {
        this.ticket.setProjectName(name);
    }
    setType(type: string): void {
        this.ticket.setType(type);
    }
    setTitle(title: string): void {
        this.ticket.setTitle(title);
    }
    setDescription(description: string): void {
        this.ticket.setDescription(description);
    }
    setComment(comment: string): void {
        this.ticket.setComment(comment);
    }
    setLabels(labels: string[]): void {
        this.ticket.setLabels(labels);
    }
    setAsignee(asignee: string): void {
        this.ticket.setAsignee(asignee);
    }
    setStoryPoints(points: number): void {
        this.ticket.setStoryPoints(points);
    }
    reset(): void {
        this.ticket = new NightlyReportTicket();
    }

    getResult(): NightlyReportTicket {
        return this.ticket;
    } 
}