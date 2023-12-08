import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import axios from "axios";
import EmployeeItem from "@/components/EmployeeItem";

const inter = Inter({ subsets: ["latin"] });

export interface Employee {
  id: string | number;
  name: string;
  department: string;
  phone: string;
}
export default function Home() {
  const [data, setData] = useState<Employee[]>();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://6553722e5449cfda0f2eb53b.mockapi.io/employees"
      );
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id: string | number) => {
    const response = await axios.delete(
      `https://6553722e5449cfda0f2eb53b.mockapi.io/employees/${id}`
    );
    fetchData();
    console.log(response);
  };

  return (
    <div>
      {data?.map((emp) => (
        <EmployeeItem Employee={emp} key={emp.id} handleDelete={handleDelete} />
      ))}
    </div>
  );
}
