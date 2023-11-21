export class CreatePreditCoordinateDto {
  startPosition?: Position
  endPosition?: Position
}

class Position {
  x: number
  y: number
}
