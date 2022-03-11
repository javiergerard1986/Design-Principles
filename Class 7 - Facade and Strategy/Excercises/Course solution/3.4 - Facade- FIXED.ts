let ffmpegDependency: FFMPEG_API_SIMULATOR; // this variable simulates an imported dependency - ffmpeg
let fs: FILE_SYSTEM_API_SIMULATOR; // this variable simulates an imported dependency - fs

export interface FFMPEG_API_SIMULATOR_OPTIONS {
    corePath?: string,
    log?: boolean,
    resolution?: string,
    format?: string,
    timeSpan?: string
}

export interface FFMPEG_API_SIMULATOR {
    createFFmpeg(options?: FFMPEG_API_SIMULATOR_OPTIONS): FFMPEG_API_SIMULATOR;
    compressVideo(options?: FFMPEG_API_SIMULATOR_OPTIONS): void;
    convertVideo(options?: FFMPEG_API_SIMULATOR_OPTIONS): void;
    exit(code: number): void;
    generatePreview(path: string, options?: FFMPEG_API_SIMULATOR_OPTIONS): string;
    load(): void;
    readImageStream(options?: FFMPEG_API_SIMULATOR_OPTIONS): void;
    record(filePath: string): string;
    recordAudioOnly(options?: FFMPEG_API_SIMULATOR_OPTIONS): void;
    rotateVideo(filePath: string): void;
    run(): void;
    stopRecording(): void;
    writeFile(filePath: string): void;
}

export interface FILE_SYSTEM_API_SIMULATOR {
    openFile(path: string): FILE_SYSTEM_API_SIMULATOR;
    writeFile(path: string): FILE_SYSTEM_API_SIMULATOR;
    parseFilePath(filePath: string): string;
}

export interface IVideoManager {
    recordVideo(filePath: string): void;
    generatePreview(filePath: string): string;
}

export class VideoManager  implements IVideoManager {
    private _ffmpeg: FFMPEG_API_SIMULATOR;

    constructor(ffmpeg: FFMPEG_API_SIMULATOR = null) {
        this._ffmpeg = ffmpeg ? ffmpeg : ffmpegDependency.createFFmpeg({ log: true });
    }

    public recordVideo(filePath: string): void {
        this._ffmpeg.load();
        this._ffmpeg.run();

        const videoPath = fs.parseFilePath(filePath);
        fs.writeFile(videoPath);

        this._ffmpeg.writeFile(videoPath);

        this._ffmpeg.record(videoPath);
        this._ffmpeg.stopRecording();

        this._ffmpeg.exit(0);
    }

    public generatePreview(filePath: string): string {
        const ffmpeg = ffmpegDependency.createFFmpeg({ log: true });
        ffmpeg.load();
        ffmpeg.run();

        const videoPath = fs.parseFilePath(filePath);

        const preview = ffmpeg.generatePreview(videoPath, { format: 'png' });

        fs.writeFile(preview);

        ffmpeg.exit(0);

        return preview;
    }
}


export class JenkinsBlocksRunner {
    private _videoManager: IVideoManager = new VideoManager();
    private readonly videoPath: string = './test_execution.mp4';

    public executeE2ETests(): void {
        // Code that runs e2e ui tests goes here
        // ....
        // ....
        // ....

        // Record e2e execution
        this._videoManager.recordVideo(this.videoPath);

        // Additional block behavior implemented here
        // ....
        // ....
        // ....
    }

    public generateSummary(): void {
        // Artifacts, installers, published packages, etc.
        // ....
        // ....
        // ....

        // Put a test execution recording preview into the summary
        const preview: string = this._videoManager.generatePreview(this.videoPath);

        // Insert preview into the summary here
        // ...

        // Additional block behavior implemented here
        // ....
        // ....
        // ....
    }
}