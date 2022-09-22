import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Bus() {
  const [Bus, setBus] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://631418adfc9dc45cb4e9354a.mockapi.io/bus")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setBus(res);
      });
  }, []);

  const formatedBus = Bus.map((fac) => {
    return (
      // <Link to={"../Bus/" + fac.id}>
      <>
        {/* <div className="row"> */}
        {/* <div className="col-4"> */}
        <div className="card text-center">
          <div
            className="card-body text-centre"
            onClick={() => {
              navigate("../Bus/" + fac.id);
            }}
          >
            <div className="mt-3 mb-4">
              <img className="card-img-top" src={fac.BusImage}></img>
            </div>
            <h4 className="mb-2">{fac.BusName}</h4>
            <h6 className="mb-2 text-primary">{fac.BusDriverName}</h6>

            <span>--------------------</span>
            <h6 className="text-primary">{fac.BusRTONumber}</h6>
            <span>--------------------</span>
            <div className="row text-center no-gutters">
              <div className="col-6">
                <span>
                  <h6>Average</h6>
                </span>
                <span>
                  <h6 className="text-primary">{fac.BusAverage}</h6>
                </span>
              </div>
              <div className="col-6">
                <span className="">
                  <h6>No Of KM</h6>
                </span>
                <span>
                  <h6 className="text-primary">{fac.BusNoOfKM}</h6>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
        {/* </div> */}
      </>
      // </Link>
    );
  });
  return (
    <div className="container-fluid ">
      <div className="mx-4 mb-5 border-bottom border-danger">
        <h2 className="text-danger">Bus Details</h2>
      </div>
      <div className="krutik">{formatedBus} </div>
    </div>
  );
}
