import React, { useEffect, useRef, useState } from "react";

const App = () => {
  const [userData, setUserData] = useState([]);
  const nameRef = useRef(null);
  const numberRef = useRef(null);
  const emailRef = useRef(null);

  useEffect(() => {
    const saved = localStorage.getItem("user");
    if (saved) {
      setUserData(JSON.parse(saved));
    }
  }, []);

  const submit = () => {
    const value = {
      name: nameRef.current.value,
      number: numberRef.current.value,
      email: emailRef.current.value,
    };

    if (!value.name || !value.number || !value.email) {
      alert("Please fill in all fields");
      return;
    }

    const updatedUserData = [...userData, value];
    setUserData(updatedUserData);
    localStorage.setItem("user", JSON.stringify(updatedUserData));

    nameRef.current.value = "";
    numberRef.current.value = "";
    emailRef.current.value = "";
  };

  const deleteCard = (index) => {
    const updatedUserData = userData.filter((_, i) => i !== index);
    setUserData(updatedUserData);
    localStorage.setItem("user", JSON.stringify(updatedUserData));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-700 py-8 px-4 font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">
            Contact Cards
          </h1>
          <p className="text-slate-300 text-lg">Create and manage your contacts</p>
        </div>

        {/* Input Form */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 mb-12 border border-white/20">
          <h2 className="text-2xl font-semibold text-white mb-6 text-center tracking-tight">
            Add New Contact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-slate-200 mb-2 tracking-tight">
                Name
              </label>
              <input
                className="w-full px-4 py-3 rounded-lg border border-slate-500 bg-slate-800/50 text-white placeholder-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 outline-none transition-all tracking-tight"
                ref={nameRef}
                type="text"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-200 mb-2 tracking-tight">
                Contact Number
              </label>
              <input
                className="w-full px-4 py-3 rounded-lg border border-slate-500 bg-slate-800/50 text-white placeholder-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 outline-none transition-all tracking-tight"
                ref={numberRef}
                type="tel"
                placeholder="1234567890"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-200 mb-2 tracking-tight">
                Email
              </label>
              <input
                className="w-full px-4 py-3 rounded-lg border border-slate-500 bg-slate-800/50 text-white placeholder-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 outline-none transition-all tracking-tight"
                ref={emailRef}
                type="email"
                placeholder="john@example.com"
              />
            </div>
          </div>
          <button
            className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 tracking-tight"
            onClick={submit}
          >
            Create Contact Card
          </button>
        </div>

        {/* Contact Cards Grid */}
        {userData.length > 0 && (
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-6 text-center tracking-tight">
              Your Contacts ({userData.length})
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {userData.map((data, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-white/20 hover:border-white/30"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-lg tracking-tight">
                        {data.name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <button
                      onClick={() => deleteCard(index)}
                      className="text-red-300 hover:text-red-100 transition-colors duration-200 p-1 hover:bg-red-500/20 rounded-lg"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                    {data.name}
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center text-slate-200">
                      <svg
                        className="w-4 h-4 mr-3 text-cyan-400 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <span className="font-medium tracking-tight truncate">{data.number}</span>
                    </div>
                    
                    <div className="flex items-center text-slate-200">
                      <svg
                        className="w-4 h-4 mr-3 text-emerald-400 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="font-medium tracking-tight truncate">{data.email}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {userData.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-4 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center border border-white/20">
              <svg
                className="w-12 h-12 text-slate-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-300 mb-2 tracking-tight">
              No contacts yet
            </h3>
            <p className="text-slate-400 tracking-tight">
              Create your first contact card using the form above
            </p>
          </div>
        )}
      </div>

      {/* Add Satoshi font via style tag */}
      <style jsx>{`
        @import url('https://api.fontshare.com/v2/css?f[]=satoshi@1,2&display=swap');
      `}</style>
    </div>
  );
};
export default App;