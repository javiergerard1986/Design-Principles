// 1 - Refactor the code to apply the Facade Design Pattern

// 2 - The code must compile 

let ffmpegDependency: FFMPEG_API_SIMULATOR; // this variable emulates an imported dependency - ffmpeg - do NOT need to refactor this
let fs: FILE_SYSTEM_API_SIMULATOR; // this variable emulates an imported dependency - fs - do NOT need to refactor this

// this interface emulates the ffmpeg API options - do NOT need to refactor this 
export interface FFMPEG_API_SIMULATOR_OPTIONS {
    corePath?: string,
    log?: boolean,
    resolution?: string,
    format?: string,
    timeSpan?: string
}

// this interface emulates the ffmpeg API - do NOT need to refactor this 
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

// this interface emulates the fs API - do NOT need to refactor this 
export interface FILE_SYSTEM_API_SIMULATOR {
    openFile(path: string): FILE_SYSTEM_API_SIMULATOR;
    writeFile(path: string): FILE_SYSTEM_API_SIMULATOR;
    parseFilePath(filePath: string): string;
}

export class JenkinsBlocksRunner {
    public executeE2ETests(): void {
        // Code that runs e2e ui tests goes here
        // ....
        // ....
        // ....

        // Record e2e execution
        const ffmpeg = ffmpegDependency.createFFmpeg({ log: true });
        ffmpeg.load();
        ffmpeg.run();

        const videoPath = fs.parseFilePath('./test_execution.mp4');
        fs.writeFile(videoPath);

        ffmpeg.writeFile(videoPath);

        ffmpeg.record(videoPath);
        ffmpeg.stopRecording();

        ffmpeg.exit(0);

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
        const ffmpeg = ffmpegDependency.createFFmpeg({ log: true });
        ffmpeg.load();
        ffmpeg.run();

        const videoPath = fs.parseFilePath('./test_execution.mp4');

        const preview = ffmpeg.generatePreview(videoPath, { format: 'png' });

        fs.writeFile(preview);

        ffmpeg.exit(0);

        // Insert preview into the summary here
        // ...

        // Additional block behavior implemented here
        // ....
        // ....
        // ....
    }
}