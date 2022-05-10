import React, { Fragment, useEffect,useState } from "react";
import Carousel from "react-material-ui-carousel";
import "./ProductDetails.css";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import MetaData from "../layout/MetaData";
// import ReactStars from "react-rating-stars-component";
import { Dialog, DialogActions, DialogContent, DialogTitle, Button} from "@material-ui/core";
import { clearErrors, getProductDetails, newReview } from "../../actions/productAction";
import { Rating } from "@material-ui/lab";
import  ReviewCard from "./ReviewCard";
import { addItemsToCart } from '../../actions/cartAction';
import { NEW_REVIEW_RESET } from "../../constants/productConstants";

const ProductDetails = ({match}) => {

  const [quantity,setQuantity] = useState(1);
  const [rating,setRating] = useState(0);
  const [comment,setComment] = useState("");
  const [open, setOpen] = useState(false);
  const { products,loading,error } = useSelector((state) => state.productDetails)
  const { success, error:reviewError } = useSelector((state) => state.newReview)
  const dispatch = useDispatch();
  const alert = useAlert();

  const options = {
    size:"large",
    value: products.ratings,
    // isHalf:true
    readOnly: true,
    precision: 0.5,
  };

  const increaseQuantity = () =>{
    if(products.Stock <= quantity) return; 
    const qty = quantity + 1;
    setQuantity(qty);
  };

  const decreaseQuantity = () =>{
    if(1 >= quantity) return; 
    const qty = quantity - 1;
    setQuantity(qty)
  }

  const addToCartHandler = () => {
     dispatch(addItemsToCart(match.params.id,quantity));
     alert.success("Item Add To cart");
  }

  const submitReviewToggle = () => {
    open ? setOpen(false) : setOpen(true)
  };

  const reviewSubmitHandler = () => {
    const myForm = new FormData();
    myForm.set("rating",rating);
    myForm.set("comment",comment);
    myForm.set("productId",match.params.id);

    dispatch(newReview(myForm));
    setOpen(false)
  };

  useEffect(()=>{
    if(error){
      alert.error(error)
      dispatch(clearErrors())
    }
    if(reviewError){
      alert.error(reviewError)
      dispatch(clearErrors())
    }
    if(success){
      alert.success("Review Submitted Successfully");
      dispatch({type:NEW_REVIEW_RESET})
    }
     dispatch(getProductDetails(match.params.id))
  },[dispatch,match.params.id,error,alert,success,reviewError])

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ):(
        <Fragment>
          <MetaData title={`${products.name} -- ECOMMERCE`} />
          <div className="ProductDetails">
            <div>
              <Carousel>
                {products.images &&
                  products.images.map((item, i) => (
                    <img
                      className="CarouselImage"
                      key={i}
                      src={item.url}
                      alt={`${i} Slide`}
                    />
                  ))}
              </Carousel>
            </div>

            <div>
              <div className="detailsBlock-1">
                <h2>{products.name}</h2>
                <p>Product # {products._id}</p>
              </div>
              <div className="detailsBlock-2">
                <Rating {...options} />{" "}  
                <span className="detailsBlock-2-span">
                  {" "}
                  ({products.numOfReviews} Reviews)
                </span>
              </div>
              <div className="detailsBlock-3">
                <h1>{`$ ${products.price}`}</h1>
                <div className="detailsBlock-3-1">
                  <div className="detailsBlock-3-1-1">
                    <button onClick={decreaseQuantity}>-</button>
                    <input readOnly type="number" value={quantity} />
                    <button onClick={increaseQuantity}>+</button>
                  </div>
                  <button
                    disabled={products.Stock < 1 ? true : false} onClick={addToCartHandler}>
                    Add to Cart
                  </button>
                </div>

                <p>
                  Status:
                  <b className={products.Stock < 1 ? "redColor" : "greenColor" }>
                  {products.Stock < 1 ? "OutOfStock" : "InStock" }
                  </b>
                </p>
              </div>

              <div className="detailsBlock-4">
                Description : <p>{products.description}</p>
              </div>

              <button onClick={submitReviewToggle} className="submitReview">
                Submit Review
              </button>
            </div>
          </div>

          
         {/*   Review  */}
         <Dialog
            aria-labelledby="simple-dialog-title"
            open={open}
            onClose={submitReviewToggle}
          >
            <DialogTitle>Submit Review</DialogTitle>
            <DialogContent className="submitDialog">
              <Rating
                onChange={(e) => setRating(e.target.value)}
                value={rating}
                size="large"
              />

              <textarea
                className="submitDialogTextArea"
                cols="30"
                rows="5"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
            </DialogContent>
            <DialogActions>
              <Button onClick={submitReviewToggle} color="secondary">
                Cancel
              </Button>
              <Button onClick={reviewSubmitHandler} color="primary">
                Submit
              </Button>
            </DialogActions>
          </Dialog>

          <h3 className="reviewsHeading">REVIEWS</h3>
          {products.reviews && products.reviews[0] ? (
            <div className="reviews">
              {products.reviews &&
                products.reviews.map((review) => (
                  <ReviewCard key={review._id} review={review} />
                ))}
            </div>
          ) : (
            <p className="noReviews">No Reviews Yet</p>
          )}


        </Fragment>
      )}        
    </Fragment>
  );
};

export default ProductDetails;
