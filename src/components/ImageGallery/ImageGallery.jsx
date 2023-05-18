import { useCallback, useEffect, useState } from 'react';
import css from './ImageGallery.module.css';
import getImages from '../../Api/api';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Loader from '../Loader/Loader';
import Button from '../Button/Button';

export const ImageGallery = ({ inputValue, loadMoreBtn, page, onClick }) => {
  const [images, setImages] = useState([])
    const[status,setStatus]= useState('idle')

  useEffect(() => {
     const fetchLoad = () => {


    getImages(inputValue, page)
      .then(response => {
     
        setImages(response.hits)
           setStatus('resolve')
      

      })
      .catch(error => this.setStatus('rejected'));
  };
    if (!inputValue) {
      return
    }
       fetchLoad();
    setStatus('pending')
  
  }, [inputValue, page])
  
 const fetchLoadMore = useCallback(() => {

    getImages(inputValue, page)
      .then(response => {
        setStatus('resolve')
        setImages([...images,...response.hits])

      })
      .catch(error => this.setStatus( 'rejected' ));
  },[ inputValue, page]);

  useEffect(() => {
    if (!inputValue) {
      return;
    }
     fetchLoadMore();
  },[fetchLoadMore, inputValue])

//  const fetchLoad = () => {


//     getImages(inputValue, page)
//       .then(response => {
     
//         setImages(response.hits)
//            setStatus('resolve')
      

//       })
//       .catch(error => this.setStatus('rejected'));
//   };






    if (status === 'pending') {
      return <Loader />;
    }

    if (status === 'resolve') {
      return (
        <>
          <ul className={css.gallery}>
            {images.map(({ id, largeImageURL, tags }) => (
              <ImageGalleryItem
                key={id}
                url={largeImageURL}
                tags={tags}
                onClick={onClick}
              />
            ))}
          </ul>
          {images.length !== 0 ? (
            <Button onClick={loadMoreBtn} />
          ) : (
            alert('No results')
          )}
        </>
      );
    
  }
}