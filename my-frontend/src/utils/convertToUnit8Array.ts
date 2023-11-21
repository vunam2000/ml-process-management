export const convertToUint8Array = (objectOrValue: any) => {
  if (typeof objectOrValue === "string") {
    // Convert string to Uint8Array
    const encoder = new TextEncoder()
    return encoder.encode(objectOrValue)
  } else if (ArrayBuffer.isView(objectOrValue)) {
    // Convert TypedArray or ArrayBuffer to Uint8Array
    return new Uint8Array(objectOrValue.buffer)
  } else if (objectOrValue instanceof ArrayBuffer) {
    // Convert ArrayBuffer to Uint8Array
    return new Uint8Array(objectOrValue)
  } else {
    throw new Error("Cannot convert to Uint8Array: unsupported data type")
  }
}
