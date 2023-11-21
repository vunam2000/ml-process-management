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

export const protobufPackage = "services.drawActivity.v1";

export interface PreditRectangularCoordinateRequest {
  startPosition: Coordinate | undefined;
  endPosition: Coordinate | undefined;
}

export interface PreditRectangularCoordinateResponse {
  message: string;
}

export interface Coordinate {
  x: number;
  y: number;
}

function createBasePreditRectangularCoordinateRequest(): PreditRectangularCoordinateRequest {
  return { startPosition: undefined, endPosition: undefined };
}

export const PreditRectangularCoordinateRequest = {
  encode(message: PreditRectangularCoordinateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.startPosition !== undefined) {
      Coordinate.encode(message.startPosition, writer.uint32(10).fork()).ldelim();
    }
    if (message.endPosition !== undefined) {
      Coordinate.encode(message.endPosition, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PreditRectangularCoordinateRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePreditRectangularCoordinateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.startPosition = Coordinate.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.endPosition = Coordinate.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PreditRectangularCoordinateRequest {
    return {
      startPosition: isSet(object.startPosition) ? Coordinate.fromJSON(object.startPosition) : undefined,
      endPosition: isSet(object.endPosition) ? Coordinate.fromJSON(object.endPosition) : undefined,
    };
  },

  toJSON(message: PreditRectangularCoordinateRequest): unknown {
    const obj: any = {};
    if (message.startPosition !== undefined) {
      obj.startPosition = Coordinate.toJSON(message.startPosition);
    }
    if (message.endPosition !== undefined) {
      obj.endPosition = Coordinate.toJSON(message.endPosition);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PreditRectangularCoordinateRequest>, I>>(
    base?: I,
  ): PreditRectangularCoordinateRequest {
    return PreditRectangularCoordinateRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PreditRectangularCoordinateRequest>, I>>(
    object: I,
  ): PreditRectangularCoordinateRequest {
    const message = createBasePreditRectangularCoordinateRequest();
    message.startPosition = (object.startPosition !== undefined && object.startPosition !== null)
      ? Coordinate.fromPartial(object.startPosition)
      : undefined;
    message.endPosition = (object.endPosition !== undefined && object.endPosition !== null)
      ? Coordinate.fromPartial(object.endPosition)
      : undefined;
    return message;
  },
};

function createBasePreditRectangularCoordinateResponse(): PreditRectangularCoordinateResponse {
  return { message: "" };
}

export const PreditRectangularCoordinateResponse = {
  encode(message: PreditRectangularCoordinateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PreditRectangularCoordinateResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePreditRectangularCoordinateResponse();
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

  fromJSON(object: any): PreditRectangularCoordinateResponse {
    return { message: isSet(object.message) ? globalThis.String(object.message) : "" };
  },

  toJSON(message: PreditRectangularCoordinateResponse): unknown {
    const obj: any = {};
    if (message.message !== "") {
      obj.message = message.message;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PreditRectangularCoordinateResponse>, I>>(
    base?: I,
  ): PreditRectangularCoordinateResponse {
    return PreditRectangularCoordinateResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PreditRectangularCoordinateResponse>, I>>(
    object: I,
  ): PreditRectangularCoordinateResponse {
    const message = createBasePreditRectangularCoordinateResponse();
    message.message = object.message ?? "";
    return message;
  },
};

function createBaseCoordinate(): Coordinate {
  return { x: 0, y: 0 };
}

export const Coordinate = {
  encode(message: Coordinate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.x !== 0) {
      writer.uint32(8).int32(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(16).int32(message.y);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Coordinate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCoordinate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.x = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.y = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Coordinate {
    return {
      x: isSet(object.x) ? globalThis.Number(object.x) : 0,
      y: isSet(object.y) ? globalThis.Number(object.y) : 0,
    };
  },

  toJSON(message: Coordinate): unknown {
    const obj: any = {};
    if (message.x !== 0) {
      obj.x = Math.round(message.x);
    }
    if (message.y !== 0) {
      obj.y = Math.round(message.y);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Coordinate>, I>>(base?: I): Coordinate {
    return Coordinate.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Coordinate>, I>>(object: I): Coordinate {
    const message = createBaseCoordinate();
    message.x = object.x ?? 0;
    message.y = object.y ?? 0;
    return message;
  },
};

export type DrawActivityGrpcService = typeof DrawActivityGrpcService;
export const DrawActivityGrpcService = {
  preditRectangularCoordinate: {
    path: "/services.drawActivity.v1.DrawActivityGrpc/PreditRectangularCoordinate",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: PreditRectangularCoordinateRequest) =>
      Buffer.from(PreditRectangularCoordinateRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => PreditRectangularCoordinateRequest.decode(value),
    responseSerialize: (value: PreditRectangularCoordinateResponse) =>
      Buffer.from(PreditRectangularCoordinateResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => PreditRectangularCoordinateResponse.decode(value),
  },
} as const;

export interface DrawActivityGrpcServer extends UntypedServiceImplementation {
  preditRectangularCoordinate: handleUnaryCall<PreditRectangularCoordinateRequest, PreditRectangularCoordinateResponse>;
}

export interface DrawActivityGrpcClient extends Client {
  preditRectangularCoordinate(
    request: PreditRectangularCoordinateRequest,
    callback: (error: ServiceError | null, response: PreditRectangularCoordinateResponse) => void,
  ): ClientUnaryCall;
  preditRectangularCoordinate(
    request: PreditRectangularCoordinateRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: PreditRectangularCoordinateResponse) => void,
  ): ClientUnaryCall;
  preditRectangularCoordinate(
    request: PreditRectangularCoordinateRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: PreditRectangularCoordinateResponse) => void,
  ): ClientUnaryCall;
}

export const DrawActivityGrpcClient = makeGenericClientConstructor(
  DrawActivityGrpcService,
  "services.drawActivity.v1.DrawActivityGrpc",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): DrawActivityGrpcClient;
  service: typeof DrawActivityGrpcService;
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
