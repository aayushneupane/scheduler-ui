import { FileStatus } from "./File";

export class UploadableFile {
  file: File;
  id: string;
  url: string;
  status: FileStatus;

  constructor(file: File) {
    this.file = file
		this.id = `${file.name}-${file.size}-${file.lastModified}-${file.type}`
		this.url = URL.createObjectURL(file)
		this.status = FileStatus.INITIAL;
  }
}
