import React, { useEffect, useRef } from 'react';

const ReportModal = ({ show, handleClose }) => {
      const modalRef = useRef();
      useEffect(() => {
            const handleClickOutside = (event) => {
              if (modalRef.current && !modalRef.current.contains(event.target)) {
                handleClose();
              }
            };
        
            document.addEventListener('mousedown', handleClickOutside);
            return () => {
              document.removeEventListener('mousedown', handleClickOutside);
            };
          }, [handleClose]);
  return (
      <div >
 <div className={`modal ${show ? 'd-block' : 'd-none'}` } tabIndex="-1">
      <div className="modal-dialog ">
        <div className="modal-content border-0 shadow rounded-2" ref={modalRef}>
        <div className="modal-header border-0">
      <button type="button" className="btn-close" aria-label="Close" onClick={handleClose}></button>
    </div>
          <div className="modal-body d-flex justify-content-center align-items-center">
         
            <div className=' ps-5 pe-5'>
            <i style={{fontSize:'65px', color:'lightblue'}} class="fa p-4 d-flex justify-content-center align-items-center">&#xf2b7;</i>
            <h3>
            Subscribe to our newsletter  
            </h3>
          <p class="d-flex justify-content-center" >
         Receive new articles and resources directly on your inbox.  Fill your email below to join our email newsletter today.
         </p>
         <form>
          <div class="mb-5">
          <div class="d-flex justify-content-between gap-2">
          <div class="input-group">
  <input type="text" class="form-control" placeholder="Enter your email" id="recipient-name" />
  <button class="btn btn-primary ms-1 rounded-pill " style={{fontSize:'13px', fontWeight:'600'}} type="button">Subscribe</button>
</div>

</div>
           
          
          </div>
         
        </form>
            </div>
            
         

          </div>
         
        </div>
      </div>
    </div>
      </div>
   
  );
};

export default ReportModal;
