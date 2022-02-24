export interface IBuilder {
    setProjectName(name: string): void;
    setType(type: string): void;
    setTitle(title: string): void;
    setDescription(description: string): void;
    setComment(comment: string): void;
    setLabels(labels: string[]): void;
    setAsignee(asignee: string): void;
    setStoryPoints(points: number): void;
    reset(): void;
}