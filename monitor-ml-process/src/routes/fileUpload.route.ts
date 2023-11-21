import * as grpc from "@grpc/grpc-js"

import { authenticateMiddleware } from "../middleware/authenticate"
import { FileUploadController } from "../modules/file-upload/fileUpload.controller"
import {
  FileChunk,
  FileUploadGrpcService,
  UploadResponse,
} from "../proto/v1/file-upload/file.service"

export class FileUploadRoute {
  public fileUploadController: FileUploadController
  private server: grpc.Server

  constructor(server: grpc.Server) {
    this.server = server
    this.fileUploadController = new FileUploadController()
  }

  register() {
    this.server.addService(FileUploadGrpcService, {
      uploadFiles: (
        call: grpc.ServerUnaryCall<FileChunk, UploadResponse>,
        callback: grpc.sendUnaryData<UploadResponse>
      ) =>
        authenticateMiddleware(
          call,
          callback
        )(() => this.fileUploadController.uploadFiles(call, callback)),
    })
  }
}
