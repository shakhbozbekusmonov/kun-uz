import {useState, useEffect} from 'react';
import axios from "axios";
import {API_PATH} from "../tools/contants";
import {FadeLoader} from "react-spinners";
import Header from "../components/Header";

const En = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(API_PATH + 'en/')
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
                    <div className="container">
                        <div className="row">
                            <div className="col-12 mt-5">
                                {news?.map((item, index) => {
                                    return (
                                        <div className="card">
                                            <h3>{item.title}</h3>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default En;
