import { useEffect, useState } from "react";
import Loading from "../Components/Loading";
import EmployeeTable from "../Components/EmployeeTable";

const fetchSuperheroes = () => {
  return fetch("/api/employees-superheroes").then((res) => res.json());  
    //abszolút hivatkozással megelőzhető a bug(!), viszont relatív hivatkozással elkerülhető,
    //hogy a server elköltözésével meghaljon a program => '/api'-t érdemes elé tenni 
    //vagy valamilyen különböző nevet adni neki
};

/* const deleteEmployee = (id) => {
  return fetch(`/api/employees/${id}`, { method: "DELETE" }).then((res) =>
    res.json()
  );
};
 */
const SuperheroList = () => {
  const [loading, setLoading] = useState(true);
  const [superheroes, setSuperheroes] = useState(null);

/*   const handleDelete = (id) => {
    deleteEmployee(id);

    setEmployees((employees) => {
      return employees.filter((employee) => employee._id !== id);
    });
  };
 */
  useEffect(() => {
    fetchSuperheroes()
      .then((superheroes) => {
        setLoading(false);
        setSuperheroes(superheroes);
      })
  }, []);

  if (loading) {
    return <Loading />;
  }

  return <EmployeeTable employees={superheroes} />;
};

export default SuperheroList;