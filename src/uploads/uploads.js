import { useEffect, useState } from "react"
import Alluploads from "./alluploads";

export default function Uploads(){
    const [file, setfile] = useState(null);
    const [images, setimages] = useState([])

    const uploadfilechange = (e) => {
        setfile(e.target.files[0]);
    }

    const fetchallimages = () => {
        const email = localStorage.getItem('login')
        fetch(process.env.REACT_APP_SERVER_URL+'/getallimages/'+email)
        .then((res) => res.json())
        .then((images) => {
            setimages(images)
        })
    }

    useEffect(() =>{
        fetchallimages()
    },[])

    const uploadfilesubmit = async (e) => {
          e.preventDefault();
          const formData = new FormData();
          const email = localStorage.getItem('login')
          formData.append('file', file);
          formData.append('email', email);
      
          try{
              const resp = await fetch(process.env.REACT_APP_SERVER_URL+'/fileupload',{
                 method:'POST',
                 body: formData
              })
            if(resp.status === 200){
                fetchallimages()
            }
          }catch (err){
            console.error('Error uploading file', err);
          }
    }

    return(
        <div>
            <p>uploads</p>
            <form onSubmit={uploadfilesubmit}>
               <input type="file" onChange={uploadfilechange}/>
               <button type="submit">Upload</button>
            </form>
            {images && <Alluploads images= {images}></Alluploads>}
        </div>
    )
}