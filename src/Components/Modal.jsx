import visa from "../svg/visa.svg"
import checkbox from "../svg/checkbox.svg"
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Modal() {
  const [hide,setHide]=useState(false)
  return (
    <>
    
  
    <div className={hide ? "modal hide_modal":"modal"}>
       
   
         
       
         <form>
         <h1>Add a new Card       <AiOutlineClose className="modal_close" onClick={()=>setHide(!hide)}/></h1>
         <AiOutlineClose className="modal_close" onClick={()=>setHide(!hide)}/>
         <fieldset>
         
            <legend>Card Number</legend>
            <input type="text"  placeholder="4321 4321 4321 4321"/>
              <img src={visa} alt="" />
            </fieldset>
            <div>
            <fieldset>
            <legend>Exp. Date</legend>
            <input type="text"    placeholder="02/27"/>
            
            </fieldset>
            <fieldset>
            <legend>CVC</legend>
            <input type="number"  placeholder="123"/>
            </fieldset>
            </div>

            <fieldset>
            <legend>Name on Card</legend>
            <input type="text"  placeholder="John Doe"/>
            </fieldset>

            <fieldset>
            <legend>Country or Region</legend>
            <input type="text"  placeholder="United States"/>
            </fieldset>
            <h4><img src={checkbox} alt="" />Securely save my information for 1-click checkout</h4>
            <NavLink to="/booking-detailsCard">Add Card</NavLink>
            <p>By confirming your subscription, you allow The Outdoor Inn Crowd Limited to charge your card for this payment and future payments in accordance with their terms. You can always cancel your subscription.</p>
         </form>
       
    </div>

    </>
  )
}

export default Modal