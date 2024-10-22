import React, { useState } from "react";
import { Employ } from "../../Taskboard";
import Table from "react-bootstrap/Table";
import { Outlet, Link, useMatch, useActionData } from "react-router-dom";
import plus from "../../assets/plus.svg";
import "../../Styles/Employees.css"


const Employees = () => {
  const match = useMatch("/admin-dashboard/employees");
  const [employeesActive, setEmployeesActive] = useState(true);
  const [teamsActive, setTeamsActive] = useState(false);
  return (
    <>
      {match ? (
        <main className="mt-lg-5 container summary-container">
          <div className="dashboard-flexx">
            <h1 className="">Employees</h1>
          <p className="title">Dashboard/Employee</p>
          </div>
          <div className="d-flex align-items-center justify-content-between gap-4">
            <div className="d-flex align-items-center gap-md-5 gap-3">
              <Link
                to="/admin-dashboard/employees"
                className={employeesActive ? "active-link" : "text-secondary"}
                onClick={() => {
                  setEmployeesActive(false);
                  setTeamsActive(!false);
                }}
              >
                All Employees
              </Link>
              <Link
                to="/admin-dashboard/employees/teams"
                className={teamsActive ? "active-link" : "text-secondary "}
                onClick={() => {
                  setEmployeesActive(!false);
                  setTeamsActive(!true);
                }}
              >
                Team
              </Link>
            </div>
            <Link to="/admin-dashboard/employees/personal-info">
              <button
                style={{
                  width: "100%",
                  color: "white",
                  backgroundColor: "#3439CA",
                  fontFamily: "Bricolage Grotesque, sans-serif",
                }}
                className="newEmployeebtn"
              >
                <img src={plus} className="me-1" />
                New Employee
              </button>
            </Link>
          </div>
          <hr />
          {/* Tables */}

          <div className="mt-5 border p-3 rounded-4 Table">
            <div>
              <Table responsive="lg">
                <thead className="text-white">
                  <tr className="title-tr">
                    <th className="bg-light hastag">Name</th>
                    <th className="bg-light">Email</th>
                    <th className="bg-light">Team</th>
                    <th className="bg-light">Supervisor</th>
                    <th className="text-center bg-light action-1">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {Employ.map((employe) => {
                    const { id, names, img, email, team, supervisor, status } =
                      employe;
                    return (
                      <tr key={id} className="title">
                        <td>
                          <div className="d-flex gap-2 align-items-center">
                            <img src={img} alt="" />
                            <p className="mt-3 word-input text-bold">{names}</p>
                          </div>
                        </td>
                        <td>
                          <p className="mt-3 word-input">{email}</p>
                        </td>
                        <td>
                          <p className="mt-3 word-input text-bold">{team}</p>
                        </td>
                        <td>
                          <p className="mt-3 word-input text-bold">{supervisor}</p>
                        </td>
                        <td><p
                          className={`action-status mt-3 text-center text-bold ${status
                            .replace(/\s+/, "-")
                            .toLowerCase()}`}
                        >
                          {status}
                        </p></td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          </div>
        </main>
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default Employees;