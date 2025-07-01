import axios from "axios"
import {useState} from "react"
import {Container, Form} from "react-bootstrap"
const AITextToImage = () => {
  const [textGenerateToImage, setTextGenerateToImage] = useState("")
  const [textGenerateToImageList, setTextGenerateToImageList] = useState([])
  const generateTextToImage = async (e) => {
   setTextGenerateToImage(e?.target?.value)
   let key = "AIzaSyDEbPca9M5RWekOML-NFkD14puut4GrKi4"
   let res = await axios({
    method:"POST",
    url:"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-preview-image-generation:generateContent",
    headers:{
     "x-goog-api-key":key,
     "Content-Type":"application/json"
    },
    data:{
     "contents":[
       {
         "parts":[
           {
            "text":textGenerateToImage
           }
         ]
        }
       ],
       "generationConfig":{
         "responseModalities":["TEXT","IMAGE"]
        }
       }
     })
     setTextGenerateToImageList(res?.data?.candidates[0])
  }
  return (
   <Container className="p-2">
     <Form.Group className="mb-4">
       <div className="d-flex mt-1">
         <Form.Control 
           placeholder="Enter your text to image" 
           className="form-custom-control"
           onChange={generateTextToImage}
         />
       </div>
       <img 
        src={`data:image/png;base64,${textGenerateToImageList?.content?.parts[1]?.inlineData?.data}`}
        className="w-100 mt-2"
        alt=""
      />
     </Form.Group>
   </Container>
  )
}
export default AITextToImage
