import { FileService } from "../../service/file/file.service"

export const UploadFile = () => {
  const handleFileUpload = (event: any) => {
    console.log(event.target.files)
    const files = event.target.files
    Array.from(files)?.map((file: any) => {
      const fileName = file.name

      const reader = new FileReader()
      reader.onloadend = () => {
        const fileData = reader.result
        uploadFile(fileName, fileData)
      }
      reader.readAsArrayBuffer(file)
    })
  }

  const uploadFile = (fileName: string, fileData: any) => {
    if (!fileData) return

    FileService.uploadFile(fileName, fileData)
  }

  return (
    <div style={{ backgroundColor: "white", padding: "10px" }}>
      <div style={{ marginBottom: "5px" }}>Upload file raw</div>
      <input type="file" onChange={handleFileUpload} multiple />
    </div>
  )
}
