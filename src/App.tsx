import React from 'react';
import { Card } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { ListPhoto } from './components/ListPhoto';
import NavbarComponents from './components/NavbarComponents';
import { PhotosState } from './photosReducer';

function App() {
  const photos = useSelector<PhotosState, PhotosState['photos']>(
    (state) => state.photos
  );

  const dispatch = useDispatch();

  const addPhoto = (photo: string) => {
    dispatch({ type: 'ADD_PHOTO', payload: photo });
  };

  return (
    <div className="App">
      <NavbarComponents />
      <ListPhoto addPhoto={addPhoto} />
      {photos.map((photo) => {
        return (
          <div className="card-photo-list" key={photo}>
            <Card
              className="card-photo"
              style={{ width: '58rem', height: '10rem' }}
            >
              <Card.Img variant="top" src={'img/' + { photo }} />
              <Card.Body>
                <Card.Title>Link : {photo}</Card.Title>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
}

export default App;
