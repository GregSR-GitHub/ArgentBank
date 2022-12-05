/**
 * Display the profil page
 * @return { HTMLElement }
 */

//  import icon_chat from '../../assets/icon-chat.png';
//  import icon_money from '../../assets/icon-money.png';
//  import icon_security from '../../assets/icon-security.png';
 import './features_item.css';
  
   function FeaturesItem({title, icon, text}) {

     return (
             <div className="feature-item" key={title}>
                <img key={title} src={icon} alt={title + " Icon"} className="feature-icon" />
                <h3 className="feature-item-title">{title}</h3>
                <p>{text}</p>
             </div>
     );
  }
  
  export default FeaturesItem;