import React from "react";
import Table from "react-bootstrap/Table";
import { Dashboard } from "../../db";
import "../../Styles/AdminSummary.css";
import { AdminTable } from "../../db";
const AdminSummary = () => {
  return (
    <>
      <main className="summary-container">
        <section className="pt-4">
          <h1 className="dash">Dashboard</h1>
          <div className="d-flex justify-content-between d-md-block dashboard-flexx gap-2 d-lg-flex">
            {Dashboard.map((Dashboard) => {
              const { id, names, number, Icons } = Dashboard;
              return (
                <div
                  key={id}
                  className="d-flex justify-content-between dashboard-flex"
                >
                  <div className="total">
                    <h4>{names}</h4>
                    <h1>{number} </h1>
                  </div>
                  <div>
                    <img src={Icons} alt="dashbaord-images" />
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        <section className="Table mt-5">
          <h2>Taskboard</h2>
          <div className="Table border rounded-2 p-2">
            <Table responsive="lg">
              <thead className="text-white">
                <tr className="tr">
                  <th className="bg-light text-bold">#</th>
                  <th className="bg-light">Task</th>
                  <th className="bg-light">Team</th>
                  <th className="bg-light">Duration</th>
                  <th className="bg-light text-center ">Action</th>
                </tr>
              </thead>
              <tbody className="Table">
                {AdminTable.map((table) => {
                  const { id, task, team, Start, end, action } = table;
                  return (
                    <tr key={id}>
                      <td>
                        <input type="checkbox" className="checkbox mt-4" />
                      </td>
                      <td>
                        <p className="word-input mt-4">{task}</p>
                      </td>
                      <td>
                        <div className="mt-4">
                          <img src={team} alt="" />
                        </div>
                      </td>
                      <td>
                        <div className="text-bold">
                          <p className="mt-0">{Start}</p>
                          <p className="text-secondary">{end}</p>
                        </div>
                      </td>

                      <td>
                        <p
                          className={`action-btn mt-4 text-center text-bold ${action
                            .replace(/\s+/, "-")
                            .toLowerCase()}`}
                        >
                          {action}
                        </p>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </section>
      </main>
    </>
  );
};

export default AdminSummary;
