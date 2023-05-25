import { useState } from "react";
import Airtable from "airtable";

export default function UserFeedback() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    // Initialize Airtable base
    const base = new Airtable({
      apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY,
    }).base("appgdNuvoyvr4lJJe");
    const tableName = "Reports";

    try {
      await base(tableName).create({
        Name: formData.name,
        Email: formData.email,
        Message: formData.message,
      });

      setSubmitted(true);
      setLoading(false);
    } catch (error) {
      console.error("Error creating record in Airtable:", error);
      setLoading(false);
    }
  };

  return (
    <section className="bg-gradient-to-r from-purple-500 to-indigo-500 py-8">
      <div className="container mx-auto flex items-center justify-between">
        <div className="w-1/2 pr-4">
          <div>
            <h3 className="text-4xl font-bold mb-4 text-white">
              Your feedback matters.
            </h3>
            <p className="text-3xl text-gray-200">
              We value your input and strive to improve.
            </p>
          </div>
        </div>
        <div className="w-1/2 pl-4">
          <div className="bg-white shadow-lg rounded px-8 py-6 h-96 flex flex-col justify-center items-center">
            {submitted ? (
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">
                  Thanks for submitting!
                </h2>
                <p className="text-gray-600">We appreciate your feedback.</p>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">
                  User Feedback & Reports
                </h2>
                <form onSubmit={handleSubmit}>
                  <div className="flex mb-4">
                    <div className="mr-2 w-1/2">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="name"
                      >
                        Name
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="ml-2 w-1/2">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="feedback"
                    >
                      Feedback/Report
                    </label>
                    <textarea
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
                      id="feedback"
                      name="message"
                      placeholder="Enter your feedback or report"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      disabled={loading}
                    >
                      {loading ? (
                        <svg
                          className="animate-spin h-5 w-5 mr-3"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                      ) : null}
                      Submit
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
