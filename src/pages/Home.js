import t1 from '../img/t1.png'
import t2 from '../img/t2.png'
import t3 from '../img/t3.png'
import t4 from '../img/t4.png'
import  './Home.css'
const Home = () => {
    return (
        <>
        <h1>Template</h1>
        Select a Template to get started
        <div className='homecontainer'>
            
            <div className='home-img'><img src={t1} alt="t1" /></div> 
            <div className='home-img'><img src={t2} alt="t2" /></div>
            <div className='home-img'><img src={t3} alt="t3" /></div>
            <div className='home-img'><img src={t4} alt="t4" /></div>

        </div>
        </>
    )
    
}

export default Home;