import { collection, getDocs } from "firebase/firestore";
import React from "react";
import { NoContent } from "../../../components/app/NoContent/NoContent";
import { db } from "../../../shared/core/firebase";

const Counsellors = () => {
  const [counsellors, setCounsellors] = React.useState([]);

  React.useEffect(() => {
    getCounsellors();
  }, []);

  const getCounsellors = async () => {
    try {
      const resp = await getDocs(collection(db, "counsellors"));
      if (!resp) return;
      const data = resp.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setCounsellors(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full flex flex-wrap gap-5 overflow-y-auto pb-24">
      {counsellors.map((counsellor, index) => (
        <div
          className="h-40 md:h-60 bg-grey rounded-3xl p-5 w-full md:w-[30%] flex flex-col items-center gap-3 justify-center"
          key={index}
        >
          <h5 className="text-white font-medium text-2xl mb-2">
            {counsellor?.name}
          </h5>
          <p className="text-slate-300 mb-2">Fluent in Ga & Twi</p>
          <a
            className="text-muted text-sm"
            href={`https://wa.me/+233${counsellor?.phone.slice(1)}`}
            target="_blank"
          >
            {counsellor?.phone}
          </a>
        </div>
      ))}
      {counsellors.length === 0 && (
        <div className="w-full flex justify-center">
          <NoContent
            title="No Counsellors Found"
            description="No counsellors found in the database"
          />
        </div>
      )}
    </div>
  );
};

export default Counsellors;
