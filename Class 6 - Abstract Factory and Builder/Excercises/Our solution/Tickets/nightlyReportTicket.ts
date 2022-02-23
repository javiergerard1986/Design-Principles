export class NightlyReportTicket {
    
    name: string;
    type: string;
    title: string;
    description: string;
    comment: string;
    labels: string[];
    asignee: string;
    storyPoints: string;

    setProjectName(name: string): void {
        this.name = name;
    }
    setType(type: string): void {
        this.type = type;
    }
    setTitle(title: string): void {
        this.title = title;
    }
    setDescription(description: string): void {
        this.description = description;
    }
    setComment(comment: string): void {
        this.comment = comment;
    }
    setLabels(labels: string[]): void {
        this.labels = labels;
    }
    setAsignee(asignee: string): void {
        this.asignee = asignee;
    }
    setStoryPoints(points: number): void {
        this.storyPoints = this.storyPoints;
    }

}