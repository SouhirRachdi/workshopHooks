import React from 'react';
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import{Button,Modal} from 'react-bootstrap';


const Add = ({handelAdd}) => {
const [movieAdd, setMovieAdd] = useState({
  Title:'',
  description:'',
  posterURL:'',
  rating:0
});
const handelChange=(e)=>{
  setMovieAdd({...movieAdd,[e.target.name]:e.target.value})
}
const handelSubmit=(e)=>{
  if(movieAdd.Title===""|| movieAdd.description==="" ||movieAdd.posterURL ==="" ){
    return alert("ecrire un titre")
  }
  handelAdd(movieAdd)
  setMovieAdd({
    Title:'',
    description:'',
    posterURL:'',
    rating:0
  })
  handleClose()
}
 
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
  <div>

      <Button variant="primary" onClick={handleShow}>
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body><input type="text" placeholder='Title' onChange={handelChange} name='Title'  value={movieAdd.Title}  />
                    <input type="text" placeholder='description' onChange={handelChange} name='description'   value={movieAdd.description}    />
                    <input type='url' placeholder='image' onChange={handelChange} name='posterURL'  value={movieAdd.posterURL}  />
                    <input type='text' placeholder='rating' onChange={handelChange} name='rating' value={movieAdd.rating}  />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handelSubmit}>
            Sumbit
          </Button>
        </Modal.Footer>
      </Modal>


  </div>
    
    ) ;
};

export default Add;


 
