import { Employee } from "@/pages";
import axios from "axios";
import React from "react";

type Props = {
  Employee: Employee;
  handleDelete: (id: number | string) => Promise<void>;
};

export default function EmployeeItem({ Employee, handleDelete }: Props) {
  return (
    <div className="p-2 rounded-md border-[1px] w-fit bg-[#181A1F] text-white">
      <h5>Employee name: {Employee.name}</h5>
      <h5>Employee department: {Employee.department}</h5>
      <h5>Employee phone: {Employee.phone}</h5>
      <button onClick={() => handleDelete(Employee.id)}>Xóa</button>
    </div>
  );
}
