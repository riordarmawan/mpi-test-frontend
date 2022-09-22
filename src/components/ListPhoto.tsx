import React, { ChangeEvent } from 'react';
import { Button } from 'react-bootstrap';
// import { useSelector } from 'react-redux';
// import { PhotosState } from '../photosReducer';

interface ListPhotoProps {
  addPhoto(photo: string): void;
}

export const ListPhoto: React.FC<ListPhotoProps> = ({ addPhoto }) => {
  const [photo, setPhoto] = React.useState('');

  const updatePhoto = (event: ChangeEvent<HTMLInputElement>) => {
    setPhoto(event.target.value);
  };

  const addPhotoClick = () => {
    addPhoto(photo);
    setPhoto('');
  };

  // const photos = useSelector<PhotosState, PhotosState['photos']>(
  //   (state) => state.photos
  // );

  // const dispatch = useDispatch()

  // const addPhoto = (photo)

  return (
    <div className="list-photo">
      <h5>
        List Photo
        <input
          onChange={updatePhoto}
          value={photo}
          type="file"
          name="photo"
          placeholder="Unggah Foto"
        />
        <Button onClick={addPhotoClick}>
          {' '}
          <img src="../img/plus.png" alt=""></img> Tambah
        </Button>
      </h5>
    </div>
  );
};
