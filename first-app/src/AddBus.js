import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function AddBus() {
  const navigate = useNavigate();

  const [Buses, setBuses] = useState([]);
  useEffect(() => {
    fetch("https://631418adfc9dc45cb4e9354a.mockapi.io/bus")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        res.SetBuses(res);
      });
  }, []);

  return (
    <>
      <div className="d1">
        <div>
          {/* <div className="row"> */}
          {/* <div className="leftpart"> */}
          <div className="row">
            <div className="col-1 text-right">Bus Name:</div>
            <div className="col text-left">
              <input
                type="text"
                onChange={(e) => {
                  setBuses({ ...Buses, BusesName: e.target.value });
                }}
              />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-1 text-right">DriverName:</div>
            <div className="col text-left">
              <input
                type="text"
                onChange={(e) => {
                  setBuses({
                    ...Buses,
                    BusDriverName: e.target.value,
                  });
                }}
              />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-1 text-right">Bus Image:</div>
            <div className="col-6 text-left">
              <input
                type="text"
                onChange={(e) => {
                  setBuses({ ...Buses, BusImage: e.target.value });
                }}
              />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-1 text-right">RTO Number:</div>
            <div className="col-6 text-left">
              <input
                type="text"
                onChange={(e) => {
                  setBuses({...Buses, BusRTONumber: e.target.value});
                }}
              />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-1 text-right">Average:</div>
            <div className="col-6 text-left">
              <input
                type="text"
                onChange={(e) => {
                  setBuses({
                    ...Buses,
                    BusAverage: e.target.value,
                  });
                }}
              />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-1 text-right">Total Km:</div>
            <div className="col-6 text-left">
              <input
                type="text"
                onChange={(e) => {
                  setBuses({
                    ...Buses,
                    BusNoOfKM: e.target.value,
                  });
                }}
              />
            </div>
          </div>
        </div>
        <br />
        
        {/* <div className="rightpart"> */}
        
        
        {/* </div> */}
        {/* </div> */}
        {/* </div> */}
      </div>
      <br />
      <button
        className="b1"
        onClick={() => {
          fetch("https://631418adfc9dc45cb4e9354a.mockapi.io/bus", {
            method: "POST",
            body: JSON.stringify(Buses),
            headers: {
              "Content-Type": "application/json",
            },
          }).then((res) => {
            navigate("/Bus");
          });
        }}
      >
        Add
      </button>
    </>
  );
}
