import '../../styles/dashboard/UserDeletePopUp.css';
import xclose from "../../assets/xclose.png";
interface PopupProps {
    onClose: () => void;
    // userData?:IUsers;
    updateEvents?:(userData:string) => void;
  }
export const UserDeletePopUp:React.FC<PopupProps>=({onClose,updateEvents}:PopupProps)=>{
 
     
   
      const handleSubmit = (e:any) => {
     
         updateEvents?.("delete")
        onClose();
      }
    
  return (
     <div>
      <div className="userPopUpDelete">
        
     
        <div className="userDeletePopup">
            <div style={{ display: 'flex', justifyContent: 'flex-end'}}>
            <img src={xclose} alt="closeIcon" onClick={()=>{onClose();
            }} width={24} height={24}></img>
            </div>
            <p>Are you sure you wantto delete this item?</p>
            <div className="user">
            <div className="ConfirmCancelButtons">
            <button className="addNew" onClick={handleSubmit}>Confirm</button>
            <button className="addNew" onClick={()=>onClose()}>Cancel</button>
            </div>
            </div>
           
           
        </div>
       
    
    </div>
    </div>
  )
}

// export default UserDeletePopUp
