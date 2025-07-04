import axios from "axios"
import {useState} from "react"
import {Button, Container, Form} from "react-bootstrap"
const AITextGenerate = () => {
  const [textGenerate, setTextGenerate] = useState("")
  const [textGenerateAIList, setTextGenerateAIList] = useState([])
  const generateText = async () => {
    let res = await axios({
     method:"POST",
     url:"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyDEbPca9M5RWekOML-NFkD14puut4GrKi4",
     data:{
      "contents":[
         {
           "parts":[
             {
              "text":textGenerate
             }
           ]
          }
        ]
      }
     })
     setTextGenerateAIList(res.data.candidates[0])
  }
  return (
   <Container className="p-2">
     <Form.Group className="mb-4">
      <div className="d-flex mt-1">
        <Form.Control 
          placeholder="Enter your text" 
          className="form-custom-control" 
          onChange={(e) => setTextGenerate(e?.target?.value)}
        />
        <Button type="button" onClick={generateText}>Generate</Button>
      </div>
      <p className="text-secondary">{textGenerateAIList?.content?.parts[0].text}</p>
     </Form.Group>
   </Container>
 )
}
export default AITextGenerate