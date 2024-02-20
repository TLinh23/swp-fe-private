import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQueries } from "react-query";
import { getListCountry } from "../apis/tutor-module";

function CollectionPage() {
  const { slug } = useParams();
  const [listCountry, setListCountry] = useState();

  useQueries([
    {
      queryKey: ["getCountry"],
      queryFn: async () => {
        const response = await getListCountry();
        setListCountry(response?.data);
        return response?.data;
      },
    },
  ]);

  useEffect(() => {
    console.log("ENV: ", process.env.REACT_APP_BASE_URL);
  }, []);

  console.log("listCountry: ", listCountry);

  return (
    <div>
      <div>CollectionPage {slug}</div>
    </div>
  );
}

export default CollectionPage;
