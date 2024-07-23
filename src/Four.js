import { useState } from "react";
//import F5 from "./Five";
import Three from "./Three";
function Four(){
    //const reviews=[];
    const [review,setReview]=useState("");
    const [submittedReview,setSumbittedreview]=useState([]);
    const value=(event)=>{
        console.log("Input Changed");
        setReview(event.target.value);
        console.log(event.target.value);
    }
    const addReview=()=>{
        console.log("Adding Review");
        setSumbittedreview([...submittedReview,review]);
        setReview("");
        //document.getElementById("submittedReview").innerText = review;
    }
    //reviews.push({submittedReview});
    return(
        <div className="card">
            <div className="card-body">
                <h1>iPhone 14</h1>
                 <div >
                 <p>
                 The iPhone, designed and marketed by Apple Inc., has been a trailblazer in the smartphone industry since its initial release in 2007. Renowned for its sleek design, high-quality materials, and seamless integration with Apple's ecosystem, the iPhone consistently sets trends in technology and design. Its premium build features a blend of glass and aluminum or stainless steel, and the device offers a range of display sizes with Retina and Super Retina XDR technologies for vibrant colors and sharp images.               
                  </p>
                    <h6>$199.00</h6>
                    <Three/>
                </div>
            </div>
            <div className="card-body">
                <h6>
                    Product Specification
                </h6>
                <p>
                The iPhone 14, features an aerospace-grade aluminum frame with a glass front and back, offering a premium feel and durability. Measuring 146.7 x 71.5 x 7.8 mm and weighing 174 grams, it is designed for comfortable handling. It comes in various colors, including Midnight, Starlight, Product Red, Blue, and Purple. The device boasts an IP68 rating, making it water-resistant up to 6 meters for 30 minutes and dust-resistant. Its 6.1-inch Super Retina XDR display has a resolution of 2532 x 1170 pixels at 460 ppi, delivering sharp and vibrant visuals.                
                </p>
            </div>
            <h5 style={{marginLeft:"5px"}}>Reviews </h5>
            <div className="card-body">
            
            <div>
            <input type="text" placeholder="Enter a Review" value={review} onChange={value} style={{width:"84rem",margin:"5px"}}/>
            
            <button className="btn btn-dark"onClick={addReview}>Submit</button>
            
            </div>
            <h5 style={{margin:"10px"}}>Reviews</h5>
         
            <div style={{margin:"5px"}}>
            
                {
                    submittedReview.map((rev,index)=>(<div key={index}><h6>Reviewer Name</h6>{rev}</div>))
                }
            
            
            </div>
            
            </div>
        </div>
    );

}
export default Four;