import React from "react"
import { DrawActivityService } from "../../service/draw-activity/drawActivity.service"

export const Canvas = () => {
  const canvasRef = React.useRef(null)
  const isDrawingRef = React.useRef(false)
  const startPositionRef = React.useRef({ x: 0, y: 0 })
  const endPositionRef = React.useRef({ x: 0, y: 0 })

  React.useEffect(() => {
    const canvas: any = canvasRef.current

    if (!canvas) return

    const context = canvas.getContext("2d")

    const handleMouseDown = (event: any) => {
      isDrawingRef.current = true
      startPositionRef.current = getMousePosition(canvas, event)
    }

    const handleMouseMove = (event: any) => {
      if (!isDrawingRef.current) return
      endPositionRef.current = getMousePosition(canvas, event)
      drawRect(context)
    }

    const handleMouseUp = () => {
      isDrawingRef.current = false
      // Do something with the selected rectangular area
      console.log(
        "Selected area:",
        startPositionRef.current,
        endPositionRef.current
      )

      DrawActivityService.preditRectangularCoordinate(
        startPositionRef.current,
        endPositionRef.current
      )
    }

    canvas.addEventListener("mousedown", handleMouseDown)
    canvas.addEventListener("mousemove", handleMouseMove)
    canvas.addEventListener("mouseup", handleMouseUp)

    return () => {
      canvas.removeEventListener("mousedown", handleMouseDown)
      canvas.removeEventListener("mousemove", handleMouseMove)
      canvas.removeEventListener("mouseup", handleMouseUp)
    }
  }, [])

  const getMousePosition = (canvas: any, event: any) => {
    const rect = canvas.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    return { x, y }
  }

  const drawRect = (context: any) => {
    const { x: startX, y: startY } = startPositionRef.current
    const { x: endX, y: endY } = endPositionRef.current

    context.clearRect(0, 0, context.canvas.width, context.canvas.height)
    context.strokeStyle = "red"
    context.lineWidth = 2
    context.strokeRect(startX, startY, endX - startX, endY - startY)
  }

  return (
    <div
      style={{ marginTop: "10px", backgroundColor: "white", padding: "10px" }}>
      <div style={{ marginBottom: "10px" }}>Draw rectangular</div>
      <div>
        <canvas
          style={{ border: "solid" }}
          ref={canvasRef}
          width={800}
          height={400}
        />
      </div>
    </div>
  )
}
