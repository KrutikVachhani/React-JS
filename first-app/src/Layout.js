import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <>
    {/* <div className="mx-3"> */}
    <div className="x1">
      <img src="https://www.darshan.ac.in/Content/media/DU_Logo.svg" alt="/" className="logo"/>
    <div className="xyz">
      
      <Link className="x" to="/">Home </Link>&nbsp;&nbsp;

      <Link className="y" to="/Bus">Bus </Link>&nbsp;&nbsp;

      <Link className="z" to="/Bus/add">AddBus </Link>&nbsp;&nbsp;
      </div>
      </div>
      {/* </div> */}
      <br/>
      <Outlet />
    </>
  );
}
