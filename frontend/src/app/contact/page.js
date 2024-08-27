export default function Page() {
     return (
       <section className="container my-5">
         <div className="row">
           <div className="col-10 offset-1">
             <div className="row">
               <div className="col-md-6 col-12">
                 <img src="/images/thumbs/1.jpg" className="img-fluid" />
               </div>
               <div className="col-md-6 col-12">
                 <h3 className="mb-4">Contact</h3>
   
                 <div class="row">
                   <div class="col-md-6 col-12 my-3">
                     <label for="yourname" className="form-label">
                       Your Name
                     </label>
                     <input
                       id="yourname"
                       type="text"
                       class="form-control"
                       placeholder="Name"
                     />
                   </div>
                   <div class="col-md-6 col-12 my-3">
                     <label for="youremail" className="form-label">
                       Your Email
                     </label>
                     <input
                       id="youremail"
                       type="text"
                       class="form-control"
                       placeholder="Email"
                     />
                   </div>
                   <div class="container w-50">
                     <label for="mobile" className="form-label">
                       Your Mobile
                     </label>
                     <input
                       id="mobile"
                       type="text"
                       class="form-control"
                       placeholder="mobile"
                     />
                   </div>
                   <div class="col-12 my-3">
                     <label for="yourmessage" className="form-label">
                       Your Message
                     </label>
                     <textarea class="form-control"></textarea>
                   </div>
                   
   
                   <div className="d-flex flex-column align-items-center my-3 gap-3">
                     <button type="submit" class="btn hms-btn-dark w-75">
                       Send
                     </button>
                     <button type="submit" class="btn btn-warning w-25">
                       Reset
                     </button>
                   </div>
   
                   
                 </div>
               </div>
             </div>
           </div>
         </div>
       </section>
     );
   }
   