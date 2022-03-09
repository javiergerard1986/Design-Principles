import { FILE_SYSTEM_API_SIMULATOR } from "../../../3.4 - Facade";
import { FFMPEG_API_SIMULATOR } from "../interfaces/FFMPEG_API_SIMULATOR";

export class Facade {

    private static instance: Facade;
    private _ffmpegDependencyServices: FFMPEG_API_SIMULATOR;
    private _fsServices: FILE_SYSTEM_API_SIMULATOR;

    private constructor(){
        this._ffmpegDependencyServices =  this._ffmpegDependencyServices.createFFmpeg({ log: true });
    }

    public static getInstance(): Facade {
        if (!Facade.instance) {
            Facade.instance = new Facade();
        }

        return Facade.instance;
    }

    public recordE2EExecution(): void {
        
        this.loadAndRunFFMPEGSimulator();
        
        const videoPath: string  = this._fsServices.parseFilePath('./test_execution.mp4');
        this._fsServices.writeFile(videoPath);

        this._ffmpegDependencyServices.writeFile(videoPath);

        this._ffmpegDependencyServices.record(videoPath);
        this._ffmpegDependencyServices.stopRecording();
        this._ffmpegDependencyServices.exit(0);
    }

    public generateSummary(): void {
        
        this.loadAndRunFFMPEGSimulator();

        const videoPath: string = this._fsServices.parseFilePath('./test_execution.mp4');

        const preview: string = this._ffmpegDependencyServices.generatePreview(videoPath, { format: 'png' });

        this._fsServices.writeFile(preview);

        this._ffmpegDependencyServices.exit(0);
    }

    private loadAndRunFFMPEGSimulator(): void {
        this._ffmpegDependencyServices.load();
        this._ffmpegDependencyServices.run();
    }


}