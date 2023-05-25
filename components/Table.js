/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
export default function Table() {
  const [happyMoments, setHappyMoments] = useState([]);
  const [sadMoments, setSadMoments] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://api.airtable.com/v0/appgdNuvoyvr4lJJe/Showwcase24",
        {
          headers: {
            Authorization: "Bearer " + process.env.NEXT_PUBLIC_AIRTABLE_API_KEY,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Data received:", data);

        const records = data.records;
        console.log("Records:", records);

        const happyMomentsData = records.filter(
          (record) => record.fields.Status === "Happy"
        );
        const sadMomentsData = records.filter(
          (record) => record.fields.Status === "Sad"
        );

        setHappyMoments(happyMomentsData);
        setSadMoments(sadMomentsData);
      } else {
        console.error("Error fetching data:", response.status);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const renderMessage = (message) => {
    // Decode HTML entities
    const decodedMessage = new DOMParser().parseFromString(message, "text/html")
      .documentElement.textContent;

    return decodedMessage.length > 50
      ? `${decodedMessage.substring(0, 50)}...`
      : decodedMessage;
  };
  return (
    <div className="container mx-auto py-8 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-2xl font-bold mb-4">Happy Moments</h2>
          <table className="min-w-full bg-green-100 rounded">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-green-200 text-left text-gray-800 font-bold">
                  User
                </th>
                <th className="px-6 py-3 bg-green-200 text-left text-gray-800 font-bold">
                  Message
                </th>
              </tr>
            </thead>
            <tbody>
              {happyMoments.map((moment) => (
                <tr key={moment.id} className="border-b">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <img
                        src={moment.fields.ImageLink}
                        alt={moment.fields.Name}
                        className="w-10 h-10 rounded-full mr-4"
                      />
                      <p className="text-gray-800">{moment.fields.Name}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <a
                      href={`https://www.showwcase.com/thread/${moment.fields.ThreadId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >
                      {renderMessage(moment.fields.Notes)}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Sad Moments</h2>
          <table className="min-w-full bg-red-100 rounded">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-red-200 text-left text-gray-800 font-bold">
                  User
                </th>
                <th className="px-6 py-3 bg-red-200 text-left text-gray-800 font-bold">
                  Message
                </th>
              </tr>
            </thead>
            <tbody>
              {sadMoments.map((moment) => (
                <tr key={moment.id} className="border-b">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <img
                        src={moment.fields.ImageLink}
                        alt={moment.fields.Name}
                        className="w-10 h-10 rounded-full mr-4"
                      />
                      <p className="text-gray-800">{moment.fields.Name}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <a
                      href={`https://www.showwcase.com/thread/${moment.fields.ThreadId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >
                      {renderMessage(moment.fields.Notes)}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
