import React, { useEffect, useState } from "react";
import { IUserData } from "./type";
const apiUrl = "https://jsonplaceholder.typicode.com/users";
function FetchData() {
  const [records, setRecords] = useState<IUserData[]>([]);
  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setRecords(data))

      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div>
        {records.map((record, index) => (
          <div key={index}>
            <div className="id">{record.id}</div>

            <div>{record.address.street}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default FetchData;
