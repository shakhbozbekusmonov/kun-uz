import {useState, useEffect} from 'react';
import axios from "axios";
import {API_PATH} from "../tools/contants";
import {FadeLoader} from "react-spinners";
import Header from "../components/Header";

const Uz = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(API_PATH + 'uz/')
            .then((res) => {
                setNews(res.data.top);
                setLoading(false);
            })
    }, [])
    return (
        <>
            {loading ? (
                <div style={{width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <FadeLoader color="#17206a" size={200}/>
                </div>
            ) : (
               <>
                   <Header/>
                   <div className="home-news">
                       <div className="row">
                           <div className="col-9">
                               <div className="row">
                                   {news?.map((item, index) => {
                                       return (
                                           <div className="col-4">
                                               <h3>{item.title}</h3>
                                           </div>
                                       )
                                   })}
                               </div>
                           </div>
                       </div>
                   </div>
               </>
            )}
        </>
    );
};

export default Uz;
