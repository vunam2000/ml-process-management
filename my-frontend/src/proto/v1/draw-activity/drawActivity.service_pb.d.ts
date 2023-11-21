import * as jspb from 'google-protobuf'



export class PreditRectangularCoordinateRequest extends jspb.Message {
  getStartposition(): Coordinate | undefined;
  setStartposition(value?: Coordinate): PreditRectangularCoordinateRequest;
  hasStartposition(): boolean;
  clearStartposition(): PreditRectangularCoordinateRequest;

  getEndposition(): Coordinate | undefined;
  setEndposition(value?: Coordinate): PreditRectangularCoordinateRequest;
  hasEndposition(): boolean;
  clearEndposition(): PreditRectangularCoordinateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PreditRectangularCoordinateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PreditRectangularCoordinateRequest): PreditRectangularCoordinateRequest.AsObject;
  static serializeBinaryToWriter(message: PreditRectangularCoordinateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PreditRectangularCoordinateRequest;
  static deserializeBinaryFromReader(message: PreditRectangularCoordinateRequest, reader: jspb.BinaryReader): PreditRectangularCoordinateRequest;
}

export namespace PreditRectangularCoordinateRequest {
  export type AsObject = {
    startposition?: Coordinate.AsObject,
    endposition?: Coordinate.AsObject,
  }
}

export class PreditRectangularCoordinateResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): PreditRectangularCoordinateResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PreditRectangularCoordinateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PreditRectangularCoordinateResponse): PreditRectangularCoordinateResponse.AsObject;
  static serializeBinaryToWriter(message: PreditRectangularCoordinateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PreditRectangularCoordinateResponse;
  static deserializeBinaryFromReader(message: PreditRectangularCoordinateResponse, reader: jspb.BinaryReader): PreditRectangularCoordinateResponse;
}

export namespace PreditRectangularCoordinateResponse {
  export type AsObject = {
    message: string,
  }
}

export class Coordinate extends jspb.Message {
  getX(): number;
  setX(value: number): Coordinate;

  getY(): number;
  setY(value: number): Coordinate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Coordinate.AsObject;
  static toObject(includeInstance: boolean, msg: Coordinate): Coordinate.AsObject;
  static serializeBinaryToWriter(message: Coordinate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Coordinate;
  static deserializeBinaryFromReader(message: Coordinate, reader: jspb.BinaryReader): Coordinate;
}

export namespace Coordinate {
  export type AsObject = {
    x: number,
    y: number,
  }
}

