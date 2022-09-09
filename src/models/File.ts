
export enum FileStatus {
  INITIAL,
  OK,
  LOADING,
  FAIL
}

export interface UploadingFile {
  file: File;
  id: string;
  url: string;
  status: FileStatus;
}
