import React, { useEffect, useState } from "react";
import { IUserData } from "./type";
let apiResponse: IUserData[];
apiResponse: [{ username, email, phone }];

function FetchData() {
  const [records, setRecords] = useState<IUserData[]>();
  useEffect(() => {
    setRecords(apiResponse);
  }, []);

  return (
    <>
      <div></div>
    </>
  );
}

export default FetchData;
