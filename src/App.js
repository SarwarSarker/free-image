import React, { useState,useEffect } from 'react';
import ImageCard from './components/ImageCard';
import ImageSearch from './components/ImageSearch'
import { Container,Row,Col } from 'react-bootstrap';
import './App.css';


function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_APP_API_KEY}&q=${search}&image_type=photo&pretty=true`)
    .then((res) => res.json())
    .then((data) => {
      setImages(data.hits);
      setIsLoading(false);
    })
    .catch(err => console.log(err))
  }, [search]);

  return (
    <Container fluid="md" >
         
      <ImageSearch searchText={(text) => setSearch(text)} />
  
  {!isLoading && images.length === 0 && <h2 className="text-center">No Images Found</h2>}
      {isLoading ? <h2 className="text-center">Loading...</h2> 
      : (<Row>
          {images.map((image)=> <Col> <ImageCard key={image.id} image={image} /> </Col>)}
          </Row>)}
  
</Container>
    
    
    
  );
}

export default App;
