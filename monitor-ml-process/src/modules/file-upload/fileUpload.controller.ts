import * as grpc from "@grpc/grpc-js"
import fs from "fs"
import {
  FileChunk,
  UploadResponse,
} from "../../proto/v1/file-upload/file.service"

export class FileUploadController {
  constructor() {}

  uploadFiles(
    call: grpc.ServerUnaryCall<FileChunk, UploadResponse>,
    callback: grpc.sendUnaryData<UploadResponse>
  ) {
    try {
      console.log("Uploading")
      call.on("data", (chunk) => {
        // Process each incoming file chunk
        const fileData = chunk.data
        const filename =
          "/Users/Programming/wow-ai-test/monitor-ml-process/upload/" +
          chunk.name // Set the destination file path
        console.log("Uploading", fileData, filename)

        fs.appendFileSync(filename, fileData)
      })

      call.on("end", () => {
        // Upload completed
        const response = { message: "Files uploaded successfully" }

        callback(null, response)
      })
    } catch (err: any) {
      console.log(err)
      callback(err)
    }
  }
}
