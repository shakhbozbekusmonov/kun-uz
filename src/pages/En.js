import {useState, useEffect} from 'react';
import axios from "axios";
import {API_PATH} from "../tools/contants";

const En = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        axios.get(API_PATH + 'en/')
            .then((res) => {
                setNews(res.data.top);
            })
    }, [])
    return (
        <div>

            <div className="col-12 mt-3">
                {news?.map((item, index) => {
                    return (
                        <div className="card">
                            <h3>{item.title}</h3>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default En;
