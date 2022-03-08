export interface FILE_SYSTEM_API_SIMULATOR {
    openFile(path: string): FILE_SYSTEM_API_SIMULATOR;
    writeFile(path: string): FILE_SYSTEM_API_SIMULATOR;
    parseFilePath(filePath: string): string;
}