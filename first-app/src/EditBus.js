import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function EditBus() {
  const params = useParams();
  const navigate = useNavigate();

  const [Buses, setBuses] = useState([]);
  useEffect(() => {
    fetch("https://631418adfc9dc45cb4e9354a.mockapi.io/bus/" + params.id)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setBuses(res);
      });
  }, []);

  return (
    <>
      <div className="row">
        <div className="leftpart">
          <div className="row">
            <div className="col-1 text-right">Bus Name:</div>
            <div className="col text-left">
              <input
                type="text"
                value={Buses.BusName}
                onChange={(e) => {
                  setBuses({ ...Buses, BusName: e.target.value });
                }}
              />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-1 text-right">Driver Name:</div>
            <div className="col text-left">
              <input
                type="text"
                value={Buses.BusDriverName}
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
                value={Buses.BusImage}
                onChange={(e) => {
                  setBuses({ ...Buses, BusImage: e.target.value });
                }}
              />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-1 text-right"> RTO Number:</div>
            <div className="col-6 text-left">
              <input
                type="text"
                value={Buses.BusRTONumber}
                onChange={(e) => {
                  setBuses({
                    ...Buses,
                    BusRTONumber: e.target.value,
                  });
                }}
              />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-1 text-right"> Average:</div>
            <div className="col-6 text-left">
              <input
                type="text"
                value={Buses.BusAverage}
                onChange={(e) => {
                  setBuses({ ...Buses, BusAverage: e.target.value });
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
                value={Buses.BusNoOfKM}
                onChange={(e) => {
                  setBuses({
                    ...Buses,
                    BusNoOfKM: e.target.value,
                  });
                }}
              />
            </div>
          </div>
          <br />
        </div>
      </div>

      <button
        className="b1"
        onClick={() => {
          console.log("start fetch");
          fetch(
            "https://631418adfc9dc45cb4e9354a.mockapi.io/bus/" + params.id,
            {
              method: "PUT",
              body: JSON.stringify(Buses),
              headers: {
                "Content-Type": "application/json",
              }
            }
          ).then((res) => {
            
            navigate("/Bus");
          });
        }}
      >
        Edit
      </button>
    </>
  );
}
