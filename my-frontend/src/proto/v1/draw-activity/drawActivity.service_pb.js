// source: src/proto/v1/draw-activity/drawActivity.service.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() { return this || window || global || self || Function('return this')(); }).call(null);

goog.exportSymbol('proto.services.drawActivity.v1.Coordinate', null, global);
goog.exportSymbol('proto.services.drawActivity.v1.PreditRectangularCoordinateRequest', null, global);
goog.exportSymbol('proto.services.drawActivity.v1.PreditRectangularCoordinateResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.services.drawActivity.v1.PreditRectangularCoordinateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.services.drawActivity.v1.PreditRectangularCoordinateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.services.drawActivity.v1.PreditRectangularCoordinateRequest.displayName = 'proto.services.drawActivity.v1.PreditRectangularCoordinateRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.services.drawActivity.v1.PreditRectangularCoordinateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.services.drawActivity.v1.PreditRectangularCoordinateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.services.drawActivity.v1.PreditRectangularCoordinateResponse.displayName = 'proto.services.drawActivity.v1.PreditRectangularCoordinateResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.services.drawActivity.v1.Coordinate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.services.drawActivity.v1.Coordinate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.services.drawActivity.v1.Coordinate.displayName = 'proto.services.drawActivity.v1.Coordinate';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.services.drawActivity.v1.PreditRectangularCoordinateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.services.drawActivity.v1.PreditRectangularCoordinateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.services.drawActivity.v1.PreditRectangularCoordinateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.drawActivity.v1.PreditRectangularCoordinateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    startposition: (f = msg.getStartposition()) && proto.services.drawActivity.v1.Coordinate.toObject(includeInstance, f),
    endposition: (f = msg.getEndposition()) && proto.services.drawActivity.v1.Coordinate.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.services.drawActivity.v1.PreditRectangularCoordinateRequest}
 */
proto.services.drawActivity.v1.PreditRectangularCoordinateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.services.drawActivity.v1.PreditRectangularCoordinateRequest;
  return proto.services.drawActivity.v1.PreditRectangularCoordinateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.services.drawActivity.v1.PreditRectangularCoordinateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.services.drawActivity.v1.PreditRectangularCoordinateRequest}
 */
proto.services.drawActivity.v1.PreditRectangularCoordinateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.services.drawActivity.v1.Coordinate;
      reader.readMessage(value,proto.services.drawActivity.v1.Coordinate.deserializeBinaryFromReader);
      msg.setStartposition(value);
      break;
    case 2:
      var value = new proto.services.drawActivity.v1.Coordinate;
      reader.readMessage(value,proto.services.drawActivity.v1.Coordinate.deserializeBinaryFromReader);
      msg.setEndposition(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.services.drawActivity.v1.PreditRectangularCoordinateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.services.drawActivity.v1.PreditRectangularCoordinateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.services.drawActivity.v1.PreditRectangularCoordinateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.drawActivity.v1.PreditRectangularCoordinateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStartposition();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.services.drawActivity.v1.Coordinate.serializeBinaryToWriter
    );
  }
  f = message.getEndposition();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.services.drawActivity.v1.Coordinate.serializeBinaryToWriter
    );
  }
};


/**
 * optional Coordinate startPosition = 1;
 * @return {?proto.services.drawActivity.v1.Coordinate}
 */
proto.services.drawActivity.v1.PreditRectangularCoordinateRequest.prototype.getStartposition = function() {
  return /** @type{?proto.services.drawActivity.v1.Coordinate} */ (
    jspb.Message.getWrapperField(this, proto.services.drawActivity.v1.Coordinate, 1));
};


/**
 * @param {?proto.services.drawActivity.v1.Coordinate|undefined} value
 * @return {!proto.services.drawActivity.v1.PreditRectangularCoordinateRequest} returns this
*/
proto.services.drawActivity.v1.PreditRectangularCoordinateRequest.prototype.setStartposition = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.services.drawActivity.v1.PreditRectangularCoordinateRequest} returns this
 */
proto.services.drawActivity.v1.PreditRectangularCoordinateRequest.prototype.clearStartposition = function() {
  return this.setStartposition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.services.drawActivity.v1.PreditRectangularCoordinateRequest.prototype.hasStartposition = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Coordinate endPosition = 2;
 * @return {?proto.services.drawActivity.v1.Coordinate}
 */
proto.services.drawActivity.v1.PreditRectangularCoordinateRequest.prototype.getEndposition = function() {
  return /** @type{?proto.services.drawActivity.v1.Coordinate} */ (
    jspb.Message.getWrapperField(this, proto.services.drawActivity.v1.Coordinate, 2));
};


/**
 * @param {?proto.services.drawActivity.v1.Coordinate|undefined} value
 * @return {!proto.services.drawActivity.v1.PreditRectangularCoordinateRequest} returns this
*/
proto.services.drawActivity.v1.PreditRectangularCoordinateRequest.prototype.setEndposition = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.services.drawActivity.v1.PreditRectangularCoordinateRequest} returns this
 */
proto.services.drawActivity.v1.PreditRectangularCoordinateRequest.prototype.clearEndposition = function() {
  return this.setEndposition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.services.drawActivity.v1.PreditRectangularCoordinateRequest.prototype.hasEndposition = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.services.drawActivity.v1.PreditRectangularCoordinateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.services.drawActivity.v1.PreditRectangularCoordinateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.services.drawActivity.v1.PreditRectangularCoordinateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.drawActivity.v1.PreditRectangularCoordinateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.services.drawActivity.v1.PreditRectangularCoordinateResponse}
 */
proto.services.drawActivity.v1.PreditRectangularCoordinateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.services.drawActivity.v1.PreditRectangularCoordinateResponse;
  return proto.services.drawActivity.v1.PreditRectangularCoordinateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.services.drawActivity.v1.PreditRectangularCoordinateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.services.drawActivity.v1.PreditRectangularCoordinateResponse}
 */
proto.services.drawActivity.v1.PreditRectangularCoordinateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.services.drawActivity.v1.PreditRectangularCoordinateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.services.drawActivity.v1.PreditRectangularCoordinateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.services.drawActivity.v1.PreditRectangularCoordinateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.drawActivity.v1.PreditRectangularCoordinateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.services.drawActivity.v1.PreditRectangularCoordinateResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.drawActivity.v1.PreditRectangularCoordinateResponse} returns this
 */
proto.services.drawActivity.v1.PreditRectangularCoordinateResponse.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.services.drawActivity.v1.Coordinate.prototype.toObject = function(opt_includeInstance) {
  return proto.services.drawActivity.v1.Coordinate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.services.drawActivity.v1.Coordinate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.drawActivity.v1.Coordinate.toObject = function(includeInstance, msg) {
  var f, obj = {
    x: jspb.Message.getFieldWithDefault(msg, 1, 0),
    y: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.services.drawActivity.v1.Coordinate}
 */
proto.services.drawActivity.v1.Coordinate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.services.drawActivity.v1.Coordinate;
  return proto.services.drawActivity.v1.Coordinate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.services.drawActivity.v1.Coordinate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.services.drawActivity.v1.Coordinate}
 */
proto.services.drawActivity.v1.Coordinate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setX(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setY(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.services.drawActivity.v1.Coordinate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.services.drawActivity.v1.Coordinate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.services.drawActivity.v1.Coordinate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.drawActivity.v1.Coordinate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getX();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getY();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int32 x = 1;
 * @return {number}
 */
proto.services.drawActivity.v1.Coordinate.prototype.getX = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.services.drawActivity.v1.Coordinate} returns this
 */
proto.services.drawActivity.v1.Coordinate.prototype.setX = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 y = 2;
 * @return {number}
 */
proto.services.drawActivity.v1.Coordinate.prototype.getY = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.services.drawActivity.v1.Coordinate} returns this
 */
proto.services.drawActivity.v1.Coordinate.prototype.setY = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


goog.object.extend(exports, proto.services.drawActivity.v1);
