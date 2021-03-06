import React from "react";  
import elon from "../src/Images/elon_musk.jpg";
import jeff from "../src/Images/jeff_bezos.jpg";
import bill from "../src/Images/bill_gates.jpg";
import mark from "../src/Images/Mark_Zuckerberg.jpg";
import pat from "../src/Images/patrick.jpg";
import Card from "./Card";


import ServicesData from './ServicesData';


const Service = () => {
    return (
        <>            
            <div className="my-5">
                <h1 className="text-center">Our Services</h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                            {
                                ServicesData.map( (val) => {
                                    return <Card title={val.title} imgsrc={val.imgsrc} id={val.id} />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Service;