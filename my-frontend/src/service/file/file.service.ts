import * as grpcWeb from "grpc-web"

import { FileUploadGrpcClient } from "../../proto/v1/file-upload/File.serviceServiceClientPb"
import {
  FileChunk,
  UploadResponse,
} from "../../proto/v1/file-upload/file.service_pb"
import { convertToUint8Array } from "../../utils/convertToUnit8Array"

const uploadFile = (fileName: string, fileData: any) => {
  if (!fileData) return

  const fileClient = new FileUploadGrpcClient("http://localhost:8000")
  const request = new FileChunk()
  const buffer = convertToUint8Array(fileData)

  request.setName(fileName)
  request.setData(buffer)

  const methodDescriptorGreet = new grpcWeb.MethodDescriptor(
    "/services.fileUpload.v1.FileUploadGrpc/UploadFiles",
    grpcWeb.MethodType.UNARY,
    FileChunk,
    UploadResponse,
    (request: FileChunk) => {
      return request.serializeBinary()
    },
    UploadResponse.deserializeBinary
  )

  fileClient.client_.serverStreaming(
    fileClient.hostname_ + "/services.fileUpload.v1.FileUploadGrpc/UploadFiles",
    request,
    {},
    methodDescriptorGreet
  )
}

export const FileService = {
  uploadFile,
}
