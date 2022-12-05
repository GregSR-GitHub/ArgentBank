/**
 * Display the profil page
 * @return { HTMLElement }
 */

import FeaturesItem from '../../components/FeaturesItem';
import icon_chat from '../../assets/icon-chat.png';
import icon_money from '../../assets/icon-money.png';
import icon_security from '../../assets/icon-security.png';

//  import './home.css';
    const featuresItem = [
        {title: 'You are our #1 priority',
        icon: icon_chat,
        text: 'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.'},
        {title: 'More savings means higher rates',
        icon: icon_money,
        text: 'The more you save with us, the higher your interest rate will be!'},
        {title: 'Security you can trust',
        icon: icon_security,
        text: 'We use top of the line encryption to make sure your data and money is always safe.'}
    ]; 

  function Home() {

    return (
        <main>
        <div className="hero">
            <section className="hero-content">
            <h2 className="sr-only">Promoted Content</h2>
            <p className="subtitle">No fees.</p>
            <p className="subtitle">No minimum deposit.</p>
            <p className="subtitle">High interest rates.</p>
            <p className="text">Open a savings account with Argent Bank today!</p>
            </section>
        </div>
        <section className="features">
            <h2 className="sr-only">Features</h2>
            {featuresItem.map((item, index) =>(
                <FeaturesItem key={index} title={item.title} icon={item.icon} text={item.text}/>
            ))}
        </section>
        </main>
    );
 }
 
 export default Home;