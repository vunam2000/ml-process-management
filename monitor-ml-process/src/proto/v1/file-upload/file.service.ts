/* eslint-disable */
import {
  ChannelCredentials,
  Client,
  ClientWritableStream,
  handleClientStreamingCall,
  makeGenericClientConstructor,
  Metadata,
} from "@grpc/grpc-js";
import type { CallOptions, ClientOptions, ServiceError, UntypedServiceImplementation } from "@grpc/grpc-js";
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "services.fileUpload.v1";

export interface FileChunk {
  name: string;
  data: Uint8Array;
}

export interface UploadResponse {
  message: string;
}

function createBaseFileChunk(): FileChunk {
  return { name: "", data: new Uint8Array(0) };
}

export const FileChunk = {
  encode(message: FileChunk, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FileChunk {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFileChunk();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.data = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FileChunk {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(0),
    };
  },

  toJSON(message: FileChunk): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.data.length !== 0) {
      obj.data = base64FromBytes(message.data);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FileChunk>, I>>(base?: I): FileChunk {
    return FileChunk.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FileChunk>, I>>(object: I): FileChunk {
    const message = createBaseFileChunk();
    message.name = object.name ?? "";
    message.data = object.data ?? new Uint8Array(0);
    return message;
  },
};

function createBaseUploadResponse(): UploadResponse {
  return { message: "" };
}

export const UploadResponse = {
  encode(message: UploadResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UploadResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUploadResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.message = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UploadResponse {
    return { message: isSet(object.message) ? globalThis.String(object.message) : "" };
  },

  toJSON(message: UploadResponse): unknown {
    const obj: any = {};
    if (message.message !== "") {
      obj.message = message.message;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UploadResponse>, I>>(base?: I): UploadResponse {
    return UploadResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UploadResponse>, I>>(object: I): UploadResponse {
    const message = createBaseUploadResponse();
    message.message = object.message ?? "";
    return message;
  },
};

export type FileUploadGrpcService = typeof FileUploadGrpcService;
export const FileUploadGrpcService = {
  uploadFiles: {
    path: "/services.fileUpload.v1.FileUploadGrpc/UploadFiles",
    requestStream: true,
    responseStream: false,
    requestSerialize: (value: FileChunk) => Buffer.from(FileChunk.encode(value).finish()),
    requestDeserialize: (value: Buffer) => FileChunk.decode(value),
    responseSerialize: (value: UploadResponse) => Buffer.from(UploadResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => UploadResponse.decode(value),
  },
} as const;

export interface FileUploadGrpcServer extends UntypedServiceImplementation {
  uploadFiles: handleClientStreamingCall<FileChunk, UploadResponse>;
}

export interface FileUploadGrpcClient extends Client {
  uploadFiles(
    callback: (error: ServiceError | null, response: UploadResponse) => void,
  ): ClientWritableStream<FileChunk>;
  uploadFiles(
    metadata: Metadata,
    callback: (error: ServiceError | null, response: UploadResponse) => void,
  ): ClientWritableStream<FileChunk>;
  uploadFiles(
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: UploadResponse) => void,
  ): ClientWritableStream<FileChunk>;
  uploadFiles(
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: UploadResponse) => void,
  ): ClientWritableStream<FileChunk>;
}

export const FileUploadGrpcClient = makeGenericClientConstructor(
  FileUploadGrpcService,
  "services.fileUpload.v1.FileUploadGrpc",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): FileUploadGrpcClient;
  service: typeof FileUploadGrpcService;
};

function bytesFromBase64(b64: string): Uint8Array {
  if (globalThis.Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (globalThis.Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(globalThis.String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
