import React from "react";
import { EmployeeSidebar } from "../../Employee";
import Logo from "../../assets/Hr logo.svg";
import UpImg from "../../assets/up.svg";
import DownImg from "../../assets/down.svg";
import { NavLink, Outlet } from "react-router-dom";
import "../../Styles/AdminDashBoard.css";
import Navbar from "../../Layout/Navbar";

const EmployeeDashboard = () => {
  return (
    <main className="container-fluid">
      {/* main section */}
      <section className="admin-dashboard-main">
        <section className="admin-dashboard-section-1">
          {/* section-1 */}
          <div className="d-flex gap-5 align-items-center">
            <div className="d-flex admin-dashboard-section-1-div-1 gap-2">
              <div className="">
                <img src={Logo} alt="app-logo" className="img-fluid" />
              </div>
              <div className="">
                <h1 className="mb-0">Hr Manager</h1>
                <p className="">Hrmanager@yahoo.com</p>
              </div>
              <div>
                <div>
                  <img src={UpImg} alt="" className="" />
                </div>
                <div>
                  <img src={DownImg} alt="" className="pb-5" />
                </div>
              </div>
            </div>
          </div>

          {/* ====================================== */}
          <div className="d-flex flex-column admin-dashboard-section-1-div-2 gap-4">
            <h3>MAIN MENU</h3>
            <div>
              {EmployeeSidebar.map((EmployeeSidebar) => {
                const { id, path, icon, name } = EmployeeSidebar;
                return (
                  <NavLink key={id} to={path} end>
                    {({ isActive, isPending }) => (
                      <span
                        className={`d-flex align-items-center gap-2 mb-3 isPending ? "Pending": ${
                          isActive ? "active" : ""
                        }`}
                      >
                        {" "}
                        <img src={icon} alt={name} />
                        <h6 className="pt-1 navlink-header">{name}</h6>
                      </span>
                    )}
                  </NavLink>
                );
              })}
            </div>
          </div>
        </section>

        <section className="admin-dashboard-section-2">
          {/* section-2 */}
          <Navbar />
          <Outlet />
        </section>
      </section>
    </main>
  );
};

export default EmployeeDashboard;
