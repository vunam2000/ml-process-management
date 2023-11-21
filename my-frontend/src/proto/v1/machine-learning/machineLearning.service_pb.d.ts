import * as jspb from 'google-protobuf'



export class CreateMachineLearningRequest extends jspb.Message {
  getName(): string;
  setName(value: string): CreateMachineLearningRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateMachineLearningRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateMachineLearningRequest): CreateMachineLearningRequest.AsObject;
  static serializeBinaryToWriter(message: CreateMachineLearningRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateMachineLearningRequest;
  static deserializeBinaryFromReader(message: CreateMachineLearningRequest, reader: jspb.BinaryReader): CreateMachineLearningRequest;
}

export namespace CreateMachineLearningRequest {
  export type AsObject = {
    name: string,
  }
}

export class CreateMachineLearningResponse extends jspb.Message {
  getId(): number;
  setId(value: number): CreateMachineLearningResponse;

  getName(): string;
  setName(value: string): CreateMachineLearningResponse;

  getStatus(): number;
  setStatus(value: number): CreateMachineLearningResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateMachineLearningResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateMachineLearningResponse): CreateMachineLearningResponse.AsObject;
  static serializeBinaryToWriter(message: CreateMachineLearningResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateMachineLearningResponse;
  static deserializeBinaryFromReader(message: CreateMachineLearningResponse, reader: jspb.BinaryReader): CreateMachineLearningResponse;
}

export namespace CreateMachineLearningResponse {
  export type AsObject = {
    id: number,
    name: string,
    status: number,
  }
}

export class UpdateMachineLearningRequest extends jspb.Message {
  getId(): number;
  setId(value: number): UpdateMachineLearningRequest;

  getName(): string;
  setName(value: string): UpdateMachineLearningRequest;

  getStatus(): number;
  setStatus(value: number): UpdateMachineLearningRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateMachineLearningRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateMachineLearningRequest): UpdateMachineLearningRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateMachineLearningRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateMachineLearningRequest;
  static deserializeBinaryFromReader(message: UpdateMachineLearningRequest, reader: jspb.BinaryReader): UpdateMachineLearningRequest;
}

export namespace UpdateMachineLearningRequest {
  export type AsObject = {
    id: number,
    name: string,
    status: number,
  }
}

