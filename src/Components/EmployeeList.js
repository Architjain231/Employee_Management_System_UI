import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import EmployeeService from "../Services/EmployeeService";

const EmployeeList = () => {
  const [employee, setEmployee] = useState([
    {
      id: "",
      firstName: "",
      lastName: "",
      emailId: "",
    },
  ]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await EmployeeService.getAllEmployee();
      setEmployee(response.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  const deleteEmployee = (e, id) => {
    EmployeeService.deleteEmployee(id)
      .then((res) => {
        if (employee) {
          setEmployee((prevElement) => {
            return prevElement.filter((emp) => {
              return emp.id !== id;
            });
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateEmployee = (e, id) => {
    e.preventDefault();
    navigate(`/employee/${id}`);
  };

  return (
    <>
      <div className="my-5 mx-5">
        <button
          onClick={() => {
            navigate("/addEmployee");
          }}
          type="button"
          className="btn btn-primary"
        >
          Create Employee
        </button>
      </div>
      <div className="container">
        <table className="table">
          <thead className="table-dark">
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email Id</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {!loading && employee
              ? employee.map((emp) => {
                  return (
                    <tr key={emp.id}>
                      <td>{emp.firstName}</td>
                      <td>{emp.lastName}</td>
                      <td>{emp.emailId}</td>
                      <td>
                        <button
                          type="button"
                          onClick={(e, id) => {
                            updateEmployee(e, emp.id);
                          }}
                          className="btn btn-success "
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          onClick={(e, id) => {
                            deleteEmployee(e, emp.id);
                          }}
                          className="btn btn-danger mx-3"
                          style={{ hover: "cursor-pointer" }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })
              : ""}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default EmployeeList;
