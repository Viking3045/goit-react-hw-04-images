import React from 'react';
// import { ToastContainer} from 'react-toastify';
// import css from './Searchbar/Searchbar.module.css'
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import Modal from "./Modal/Modal";

export class App extends React.Component {
  state = {
   inputValue: '',
    modalImg: '',
    showModal: false,
    page: 1,
}


  getInputValue = handleValue => {
    this.setState({ inputValue: handleValue, page: 1 })
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }))
  }

  getLargeImg = url => {
    this.toggleModal();
    this.setState({ modalImg: url });
  }

  loadMoreBtn = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
     const { modalImg, showModal ,page} = this.state;
    return (
      <>
        <Searchbar getInputValue={this.getInputValue}/>
        <ImageGallery inputValue={this.state.inputValue} onClick={this.getLargeImg} loadMoreBtn={this.loadMoreBtn} page={ page}/>
        {showModal && <Modal url={modalImg} onClose={this.toggleModal} />}
      </>
    )
 }
};



//  state = {
//     img: null,
//     loading:false,
//   }
//   componentDidMount() {
//   //   this.setState({ loading: true })
//   //   fetch(
//   //     'https://pixabay.com/api/?q=cat&page=1&key=34850803-a728da3cec220ddd15679bd1c&image_type=photo&orientation=horizontal&per_page=12'
//   //   )
//   //     .then(res => res.json())
//   //     .then(img => this.setState({ img })).finally(()=>{this.setState(({loading:false}))});
//   //   //  console.log(this.state.img.hits)
//   // }
//   render() {
//     // console.log(this.state.img.hits)
//     return (
//       <div>
//         {/* <header className={css.searchbar}>
//             <form className={css.form}>
//               <button type="submit" className={css.button}>
//                 <span className={css.buttonLabel}>Search</span>
//     </button>

//     <input
//                 className={css.input}
//       type="text"
//       // autocomplete="off"
//       // autofocus
//       placeholder="Search images and photos"
//     />
//   </form>
//         </header>
//         {this.state.loading && <h1>Завантажуємо</h1>}
//         {this.state.img && (
//           <ul className={css.gallery}>
//             <li>likes:{this.state.img.total}</li>
//       </ul>
//         )}
//         */}
//          <Searchbar/>
//         {/* <ImageGallery/>  */}
//       </div>
//     );
//   }