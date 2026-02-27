import axios from "axios"
import { useNavigate } from "react-router-dom"


function CreatePost() {
  const navigate=useNavigate()
  
  const submitHandler=async (e)=>{
    e.preventDefault()

    const formData=new FormData(e.target)
    await axios.post("http://localhost:3000/create-post",formData)
    navigate('/posts')
  }
  
  return (
    <div className="create-post-section">
      <h1>Create Post</h1>
      <form onSubmit={submitHandler}>
        <input type="file" name="image" accept="image"/>
        <input type="text" placeholder="Write Caption" name="caption" required/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default CreatePost