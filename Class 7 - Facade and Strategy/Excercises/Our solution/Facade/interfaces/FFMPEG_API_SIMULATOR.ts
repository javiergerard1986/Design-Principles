import { FFMPEG_API_SIMULATOR_OPTIONS } from "./FFMPEG_API_SIMULATOR_OPTIONS";

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