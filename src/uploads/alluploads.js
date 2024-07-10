import './upload.css';

export default function Alluploads({images}){
    const email = localStorage.getItem('login');

     return(
        <div>
            <h2>My  uploads</h2>
            <div className="container-fluid">
              <div className="image-gallery d-flex flex-wrap">
                    {images.allfiles && images.allfiles.map((result, index) => (
                        <div className="card col-md-3" key={index}>
                            <img src={`http://localhost:5000/uploads/${email}/${result}`} alt={`${result}`} className="upload-images"/>
                            <div className="card-body">
                            <h6 className="card-title">Card title</h6>
                        </div>
                    </div>
                    
                    ))}
             </div>
           </div>
        </div>
     )
}