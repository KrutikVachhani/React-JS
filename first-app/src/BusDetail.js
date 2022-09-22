import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

export default function BusDetail() {
  let params = useParams();
  let navigate = useNavigate();
  const [Buses, setBuses] = useState([]);

  useEffect(() => {
    fetch("https://631418adfc9dc45cb4e9354a.mockapi.io/bus/" + params.id, {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setBuses(res);
      });
  }, []);

  return (
    <>
      <div className="container-detail">
        <table>
          <tr>
            <td className="">
              <div className="container ">
                <div className="col-md-3 mb-5 ">
                  <div className="card col-md-4">
                    <div className="card-body text-center">
                      <div className=" ">
                        <img
                          className="card-img-top"
                          src={Buses.BusImage}
                        ></img>
                      </div>
                      <h4 className="mb-2">{Buses.BusName}</h4>
                      <h6 className="mb-2 text-primary">
                        {Buses.BusDriverName}
                      </h6>

                      <span>--------------------</span>
                      <h6 className="text-primary">
                        {Buses.BusRTONumber}
                      </h6>
                      <span>--------------------</span>
                      <div className="row text-center">
                        <div className="col-6">
                          <span>
                            <h6>Average</h6>
                          </span>
                          <span>
                            <h6 className="text-primary">
                              {Buses.BusAverage}
                            </h6>
                          </span>
                        </div>
                        <div className="col-6">
                          <span className="d-block g-md-5">
                            <h6 className="">No Of KM</h6>
                          </span>
                          <span>
                            <h6 className="text-primary">
                              {Buses.BusNoOfKM}
                            </h6>
                          </span>
                        </div>
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </td>

            <td className="a1">
              <div className="">
                <div className="col-8 mx-md-5">
                  <div className="row text-danger border-bottom">
                    <h2>Details</h2>
                  </div>
                  <div className="row mt-md-4">
                    <h3><b>{Buses.BusName}</b></h3>
                  </div>

                  <div className="k2"></div>
                  <tr>
                    <td className="k1">
                  {/* <div className="row "> */}
                    {/* <div className="col-4 text-danger"> */}
                      <h5>Bus No:-</h5>
                    {/* </div> */}
                    </td>
                    <td>
                    {/* <div className="col-4 text-weight-light"> */}
                      <h5>{Buses.BusRTONumber}</h5>
                    {/* </div> */}
                    </td>
                    </tr>
                    
                    <div className="k2"></div>

                  {/* </div> */}
                  <tr>
                    <td className="k3">
                  {/* <div className="row"> */}
                    {/* <div className="col-8 text-danger"> */}
                      <h5>Driver Name:</h5>
                    {/* </div> */}
                    </td>
                    <td className="k4">
                    {/* <div className="col-4 text-weight-light"> */}
                      <h5>{Buses.BusDriverName}</h5>
                    {/* </div> */}
                    </td>
                    </tr>
                  {/* </div> */}
                </div>
              </div>
            </td>
          </tr>
        </table>
      </div>
      <button
        className="b11"
        onClick={() => {
          fetch(
            "https://631418adfc9dc45cb4e9354a.mockapi.io/bus/" + params.id,
            { method: "DELETE" }
          ).then((res) => {
            navigate("/Bus");
          });
        }}
      >
        Delete
      </button>
      <button
        className="b2 btn-primary"
        onClick={() => {
          navigate("../Bus/edit/" + params.id);
        }}
      >
        Edit
      </button>
    </>
  );
}
