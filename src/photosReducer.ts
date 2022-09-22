export interface PhotosState {
  photos: string[];
}

const initialState = {
  photos: []
};

type Action = { type: 'ADD_PHOTO'; payload: string };

export const photosReducer = (
  state: PhotosState = initialState,
  action: Action
) => {
  switch (action.type) {
    case 'ADD_PHOTO': {
      return { ...state, photos: [...state.photos, action.payload] };
    }
    default:
      return state;
  }
};
