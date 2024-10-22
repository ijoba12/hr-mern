import React from "react";
import { taskboard } from "../../Taskboard";
import { useState } from "react";
import { AdminTable } from "../../db";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import "../../Styles/Taskboard.css";
import plus from "../../assets/plus.svg";

const TaskBoard = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <main className="taskboard-admin">
        <div className="pt-4 ">
          <div className="">
            <h1 className="taskboard-h1">Taskboard</h1>
            <div className="d-flex justify-content-between taskboard ">
              <h3 className="taskboard-h3">Dashboard/Taskboard</h3>
              <h4 className="btn task-btn" onClick={handleShow}>
                <img src={plus} alt="plus" id="plus" /> New Task
              </h4>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Create New Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Task Title</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Name"
                        autoFocus
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                      >
                        <Form.Label>Task Description</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                      </Form.Group>
                      <Form.Label>Assigns Person</Form.Label>
                      <select name="" id="person" className="w-100 select-form">
                        <option className="select" value="select">
                          Select
                        </option>
                      </select>
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label className="d-flex justify-content-between flex-column">
                        <p className="d-flex flex-column">
                          Start Date <input type="date" />
                        </p>
                        <p className="d-flex flex-column">
                          End date <input type="date" />
                        </p>
                      </Form.Label>
                    </Form.Group>

                    <Form.Label>Task Status</Form.Label>
                    <select name="" id="status" className="w-100 select-form">
                      <option className="select" value="select">
                        Select
                      </option>
                    </select>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
          <div className="d-flex gap-3 justify-content-between dashboard-flexx">
            {taskboard.map((taskboard) => {
              const { id, name, number, Image } = taskboard;
              return (
                <div
                  key={id}
                  className=" gap-5 d-flex justify-content-between .dashboard-flexx "
                >
                  <div className=" summary-task-1">
                    <h4 className="summary-task-name">{name}</h4>
                    <h1 className="summary-task-number">{number}</h1>
                  </div>
                  <div className="">
                    <img src={Image} alt="" className="summary-task-img" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="Table admin-summary-2 mt-5">
          <div className="container">
            <h2 className="admin-summary-taskboard">Taskboard</h2>
          </div>
          <Table responsive="lg">
            <thead className="text-white">
              <tr>
                <th className="bg-light">#</th>
                <th className="bg-light">Task</th>
                <th className="bg-light">Team</th>
                <th className="bg-light">Duration</th>
                <th className="bg-light">Action</th>
              </tr>
            </thead>
            <tbody>
              {AdminTable.map((table) => {
                const { id, task, team, Start, end, action } = table;
                return (
                  <tr key={id}>
                    <td>
                      <input type="checkbox" className="checkbox mt-4"/>
                    </td>
                    <td><p className="word-input mt-4">{task}</p></td>
                    <td>
                      <img src={team} alt=""  className="mt-4"/>
                    </td>
                    <td>
                      <div className="txt-bold">
                      <p className="mt-0">{Start}</p>
                      <p className="mt-2 text-secondary">{end}</p>
                      </div>
                    </td>
                    <td><p
                          className={`action-status mt-4 text-center ${action
                            .replace(/\s+/, "-")
                            .toLowerCase()}`}
                        >
                          {action}
                        </p></td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </main>
    </>
  );
};

export default TaskBoard;
