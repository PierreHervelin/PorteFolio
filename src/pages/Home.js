import react,{useEffect} from "react";
import NavigationHome from "../components/NavigationHome";
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";

const Home=()=>{
    return(
        <main>
            <div className='home'>
                <NavigationHome/>
                <div className='col' style={{position:"relative"}}>
                    <Header id='head' headerNumber='0'/>
                    <Paragraph paragraphNumber='0'/>
                    <Paragraph paragraphNumber='1'/>
                </div>
            </div>
        </main>
    );
};

export default Home;