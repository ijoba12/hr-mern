import React from "react";
import Table from "react-bootstrap/Table";
import { LeaveTable } from "../../db";
import { leavelist } from "../../db";
import "../../Styles/Employees.css";

const LeaveBoard = () => {
  return (
    <>
      <main>
        <section className="d-lg-flex justify-content-between mt-3 leave-section">
          {leavelist.map((leavelist) => {
            const { id, name, number } = leavelist;
            return (
              <div key={id} className=" leave">
                <div className="">
                  <h6 className="text-secondary">{name}</h6>
                  <h2 className="text-bold">{number}</h2>
                </div>
              </div>
            );
          })}
        </section>
        <section className="mt-5 border p-3 rounded-4 Table">
          <div>
            <h1 className="text-bold">Tables</h1>
            <Table responsive="lg">
              <thead>
                <tr>
                  <th className="bg-light">Name</th>
                  <th className="bg-light">Leave Type</th>
                  <th className="bg-light">Duration</th>
                  <th className="bg-light">Days</th>
                  <th className="bg-light">Status</th>
                  <th className="bg-light"> </th>
                </tr>
              </thead>
              <tbody>
                {LeaveTable.map((leaveT) => {
                  const {
                    id,
                    image,
                    name,
                    LeaveType,
                    days,
                    Start,
                    end,
                    action,
                    stop,
                  } = leaveT;
                  return (
                    <tr key={id}>
                      <td>
                        <div className="d-flex gap-2 align-items-center">
                            <img src={image} alt="" />
                            <p className="mt-4 word-input text-bold">{name}</p>
                          </div>
                      </td>
                      <td>
                        <p className="word-input mt-4">{LeaveType}</p>
                      </td>
                      <td>
                      <div className="text-bold">
                          <p className="mt-0">{Start}</p>
                          <p className="text-secondary">{end}</p>
                        </div>
                      </td>
                      <td>
                        <p className="word-input mt-4">{days}</p>
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
                      <td><img src={stop} alt="" className="word-input mt-4" /></td>
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

export default LeaveBoard;
