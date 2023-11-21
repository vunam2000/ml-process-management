/* eslint-disable */
import { ChannelCredentials, Client, makeGenericClientConstructor, Metadata } from "@grpc/grpc-js";
import type {
  CallOptions,
  ClientOptions,
  ClientUnaryCall,
  handleUnaryCall,
  ServiceError,
  UntypedServiceImplementation,
} from "@grpc/grpc-js";
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "services.machineLearning.v1";

/** /proto/hello/v1/hello_service.proto */

export interface CreateMachineLearningRequest {
  name: string;
}

export interface CreateMachineLearningResponse {
  id: Long;
  name: string;
  status: number;
}

export interface UpdateMachineLearningRequest {
  id: Long;
  name: string;
  status: number;
}

function createBaseCreateMachineLearningRequest(): CreateMachineLearningRequest {
  return { name: "" };
}

export const CreateMachineLearningRequest = {
  encode(message: CreateMachineLearningRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateMachineLearningRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateMachineLearningRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateMachineLearningRequest {
    return { name: isSet(object.name) ? globalThis.String(object.name) : "" };
  },

  toJSON(message: CreateMachineLearningRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateMachineLearningRequest>, I>>(base?: I): CreateMachineLearningRequest {
    return CreateMachineLearningRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateMachineLearningRequest>, I>>(object: I): CreateMachineLearningRequest {
    const message = createBaseCreateMachineLearningRequest();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseCreateMachineLearningResponse(): CreateMachineLearningResponse {
  return { id: Long.ZERO, name: "", status: 0 };
}

export const CreateMachineLearningResponse = {
  encode(message: CreateMachineLearningResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).int64(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.status !== 0) {
      writer.uint32(24).int32(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateMachineLearningResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateMachineLearningResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.int64() as Long;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.status = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateMachineLearningResponse {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.ZERO,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      status: isSet(object.status) ? globalThis.Number(object.status) : 0,
    };
  },

  toJSON(message: CreateMachineLearningResponse): unknown {
    const obj: any = {};
    if (!message.id.isZero()) {
      obj.id = (message.id || Long.ZERO).toString();
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.status !== 0) {
      obj.status = Math.round(message.status);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateMachineLearningResponse>, I>>(base?: I): CreateMachineLearningResponse {
    return CreateMachineLearningResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateMachineLearningResponse>, I>>(
    object: I,
  ): CreateMachineLearningResponse {
    const message = createBaseCreateMachineLearningResponse();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.ZERO;
    message.name = object.name ?? "";
    message.status = object.status ?? 0;
    return message;
  },
};

function createBaseUpdateMachineLearningRequest(): UpdateMachineLearningRequest {
  return { id: Long.ZERO, name: "", status: 0 };
}

export const UpdateMachineLearningRequest = {
  encode(message: UpdateMachineLearningRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).int64(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.status !== 0) {
      writer.uint32(24).int32(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateMachineLearningRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateMachineLearningRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.int64() as Long;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.status = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateMachineLearningRequest {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.ZERO,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      status: isSet(object.status) ? globalThis.Number(object.status) : 0,
    };
  },

  toJSON(message: UpdateMachineLearningRequest): unknown {
    const obj: any = {};
    if (!message.id.isZero()) {
      obj.id = (message.id || Long.ZERO).toString();
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.status !== 0) {
      obj.status = Math.round(message.status);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateMachineLearningRequest>, I>>(base?: I): UpdateMachineLearningRequest {
    return UpdateMachineLearningRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateMachineLearningRequest>, I>>(object: I): UpdateMachineLearningRequest {
    const message = createBaseUpdateMachineLearningRequest();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.ZERO;
    message.name = object.name ?? "";
    message.status = object.status ?? 0;
    return message;
  },
};

export type MachineLearningGrpcService = typeof MachineLearningGrpcService;
export const MachineLearningGrpcService = {
  createMachineLearning: {
    path: "/services.machineLearning.v1.MachineLearningGrpc/CreateMachineLearning",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateMachineLearningRequest) =>
      Buffer.from(CreateMachineLearningRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateMachineLearningRequest.decode(value),
    responseSerialize: (value: CreateMachineLearningResponse) =>
      Buffer.from(CreateMachineLearningResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => CreateMachineLearningResponse.decode(value),
  },
  updateMachineLearning: {
    path: "/services.machineLearning.v1.MachineLearningGrpc/UpdateMachineLearning",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateMachineLearningRequest) =>
      Buffer.from(UpdateMachineLearningRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateMachineLearningRequest.decode(value),
    responseSerialize: (value: CreateMachineLearningResponse) =>
      Buffer.from(CreateMachineLearningResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => CreateMachineLearningResponse.decode(value),
  },
} as const;

export interface MachineLearningGrpcServer extends UntypedServiceImplementation {
  createMachineLearning: handleUnaryCall<CreateMachineLearningRequest, CreateMachineLearningResponse>;
  updateMachineLearning: handleUnaryCall<UpdateMachineLearningRequest, CreateMachineLearningResponse>;
}

export interface MachineLearningGrpcClient extends Client {
  createMachineLearning(
    request: CreateMachineLearningRequest,
    callback: (error: ServiceError | null, response: CreateMachineLearningResponse) => void,
  ): ClientUnaryCall;
  createMachineLearning(
    request: CreateMachineLearningRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: CreateMachineLearningResponse) => void,
  ): ClientUnaryCall;
  createMachineLearning(
    request: CreateMachineLearningRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: CreateMachineLearningResponse) => void,
  ): ClientUnaryCall;
  updateMachineLearning(
    request: UpdateMachineLearningRequest,
    callback: (error: ServiceError | null, response: CreateMachineLearningResponse) => void,
  ): ClientUnaryCall;
  updateMachineLearning(
    request: UpdateMachineLearningRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: CreateMachineLearningResponse) => void,
  ): ClientUnaryCall;
  updateMachineLearning(
    request: UpdateMachineLearningRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: CreateMachineLearningResponse) => void,
  ): ClientUnaryCall;
}

export const MachineLearningGrpcClient = makeGenericClientConstructor(
  MachineLearningGrpcService,
  "services.machineLearning.v1.MachineLearningGrpc",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): MachineLearningGrpcClient;
  service: typeof MachineLearningGrpcService;
};

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
