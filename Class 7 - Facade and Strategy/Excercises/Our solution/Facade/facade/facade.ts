import { FILE_SYSTEM_API_SIMULATOR } from "../../../3.4 - Facade";
import { FFMPEG_API_SIMULATOR } from "../interfaces/FFMPEG_API_SIMULATOR";

export class Facade {

    private static instance: Facade;
    private _ffmpegDependencyServices: FFMPEG_API_SIMULATOR;
    private _fsServices: FILE_SYSTEM_API_SIMULATOR;

    private constructor(){
    }

    public static getInstance(): Facade {
        if (!Facade.instance) {
            Facade.instance = new Facade();
        }

        return Facade.instance;
    }

    public recordE2EExecution(): void {
        const ffmpegSimulator = this._ffmpegDependencyServices.createFFmpeg({ log: true });
        ffmpegSimulator.load();
        ffmpegSimulator.run();

        const videoPath = this._fsServices.parseFilePath('./test_execution.mp4');
        this._fsServices.writeFile(videoPath);

        ffmpegSimulator.writeFile(videoPath);

        ffmpegSimulator.record(videoPath);
        ffmpegSimulator.stopRecording();
        ffmpegSimulator.exit(0);
    }

    public generateSummary(): void {
        const ffmpegSimulator = this._ffmpegDependencyServices.createFFmpeg({ log: true });
        ffmpegSimulator.load();
        ffmpegSimulator.run();

        const videoPath: string = this._fsServices.parseFilePath('./test_execution.mp4');

        const preview: string = ffmpegSimulator.generatePreview(videoPath, { format: 'png' });

        this._fsServices.writeFile(preview);

        ffmpegSimulator.exit(0);
    }


}