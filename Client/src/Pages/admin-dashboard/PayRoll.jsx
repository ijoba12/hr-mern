import React from "react";
import Table from "react-bootstrap/Table";
import { PayrollTable, payRollgraph } from "../../Taskboard";
import PayrollModal from "./PayRollModal";

const PayRoll = () => {
  return (
    <>
      <main className="summary-container">
        <section>
          <div className="pt-4 ">
            <div className="">
              <h1 className="taskboard-h1">Payroll</h1>
              <div className="d-flex justify-content-between ">
                <h3 className="taskboard-h3 mb-4">Dashboard/Payroll</h3>
                <PayrollModal />
              </div>
            </div>
            <div
              className="d-lg-flex gap-2 justify-content-between align-items-center  payroll-summary mb-3"
              responsive
            >
              {payRollgraph.map((payRollgraph) => {
                const { id, name, number, graph, time } = payRollgraph;
                return (
                  <div key={id} className="container  payroll-summary-div-1 ">
                    <div className=" summary-payroll-1">
                      <h6 className="summary-payroll-name">{name}</h6>
                      <h2 className="summary-payroll-number text-bold">
                        {number}
                      </h2>
                      <p>{time}</p>
                    </div>
                    <div className="">
                      <img src={graph} alt="" className="summary-payroll-img" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section className="mt-5 border p-3 rounded-4 Table">
          <div className="">
            <h2>Table</h2>
            <Table responsive="lg">
              <thead className="text-white">
                <tr className="title-tr">
                  <th className="bg-light">Employee</th>
                  <th className="bg-light">Salary</th>
                  <th className="bg-light">Allowance</th>
                  <th className="bg-light">Deduction</th>
                  <th className="bg-light">Tax</th>
                  <th className="bg-light text-center">Net Salary </th>
                </tr>
              </thead>
              <tbody>
                {PayrollTable.map((Pay) => {
                  const {
                    id,
                    tosin,
                    name,
                    salary,
                    allowance,
                    deductions,
                    task,
                    NetSalary,
                  } = Pay;
                  return (
                    <tr key={id} className="title">
                      <td> 
                      <div className="d-flex gap-2 align-items-center mt-1">
                            <img src={tosin} alt="" />
                            <p className="mt-3 word-input text-bold">{name}</p>
                          </div>
                      </td>
                      <td>
                        <p className="word-input mt-4"> {salary} </p>
                      </td>
                      <td>
                        <p className="word-input mt-4">{allowance}</p>
                      </td>
                      <td>
                        <p className="word-input mt-4">
                          {deductions}
                        </p>{" "}
                      </td>
                      <td>
                        <p className="word-input mt-4">{task}</p>{" "}
                      </td>
                      <td>
                        <p className="word-input mt-4">{NetSalary}</p>{" "}
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

export default PayRoll;
