import { collection, getDocs } from "firebase/firestore";
import React from "react";
import { NoContent } from "../../../components/app/NoContent/NoContent";
import {
  Accordion,
  AccordionItem,
} from "../../../components/ui/Accordion/Accordion";
import { db } from "../../../shared/core/firebase";

const Events = () => {
  const [events, setEvents] = React.useState([]);

  React.useEffect(() => {
    getEvents();
  }, []);

  const getEvents = async () => {
    try {
      const resp = await getDocs(collection(db, "events"));
      if (!resp) return;
      const data = resp.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setEvents(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full overflow-y-auto">
      <Accordion className="flex flex-wrap gap-5">
        {events.map((event, index) => (
          <AccordionItem
            value={index + 1}
            trigger={event?.name}
            className="md:max-w-[30%] mb-5"
            key={index}
          >
            <p className="text-slate-400 text-sm">
              <table className="table-auto w-full">
                <tbody>
                  <tr>
                    <td className="font-bold pr-10">Name</td>
                    <td>{event?.name}</td>
                  </tr>
                  <tr>
                    <td className="font-bold pr-10">Date</td>
                    <td>{event?.date}</td>
                  </tr>
                  <tr>
                    <td className="font-bold pr-10">Location</td>
                    <td>{event?.location}</td>
                  </tr>
                  <tr>
                    <td className="font-bold align-top pr-10">Description</td>
                    <td>{event?.description}</td>
                  </tr>
                </tbody>
              </table>
            </p>
          </AccordionItem>
        ))}
      </Accordion>
      {events?.length === 0 && (
        <div className="w-full flex justify-center h-screen">
          <NoContent
            title="No Events Found"
            description="No events found in the database"
          />
        </div>
      )}
    </div>
  );
};

export default Events;
