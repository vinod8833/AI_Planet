import React from "react";
import Logo from "./assets/logo.png";

const App = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-1/4 bg-white shadow-md p-4">
        <div className="text-2xl font-bold text-green-500 mb-8 flex items-center">
          <img src={Logo} alt="" />
        </div>
        <ul className="space-y-4">
          <li className="text-gray-700 font-medium hover:text-green-500 cursor-pointer flex  border-black border p-3 text-sm rounded-lg items-center justify-center">
            <span className="material-symbols-outlined mr-2">add</span>
            Start New Chat
          </li>

          <span className="text-gray-400 text-xs mt-10 font-bold">
            CHAT HISTORY
          </span>

          <li className="text-gray-700 font-medium hover:text-green-500 cursor-pointer flex items-center shadow-md p-3 text-sm rounded-lg">
            <span className="material-symbols-outlined mr-2">sms</span>
            New Conversation
          </li>
          <li className="text-gray-700 font-medium hover:text-green-500 cursor-pointer flex items-center p-3 text-sm rounded-lg">
            <span className="material-symbols-outlined mr-2">sms</span>
            Generate 10 poems
          </li>
          <li className="text-gray-700 font-medium hover:text-green-500 cursor-pointer flex items-center p-3 text-sm rounded-lg">
            <span className="material-symbols-outlined mr-2">sms</span>
            Create 5 line poem
          </li>
          <li className="text-gray-700 font-medium hover:text-green-500 cursor-pointer flex items-center p-3 text-sm rounded-lg">
            <span className="material-symbols-outlined mr-2">sms</span>
            Rich metaphor poem
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 border-4 border-white-400 flex  items-center flex-col justify-between ">
        <div className="flex items-center justify-center border-b-2 border-white-100 pb-2 mb-8">
          <span className="material-symbols-outlined bg-lime-100 p-2 rounded-full text-green-500 mr-4">
            edit
          </span>
          <span className="font-bold-text-3xl">AI Assistant</span>
        </div>
        <div className="text-center">
          <h3 className="text-4xl font-bold text-gray-900 mb-4">
            Ask the AI Assistant Anything
          </h3>
          <p className="text-gray-600 mb-8">
            <h2>Ask me anything, and I'll do my best to provide you with accurate</h2>
           <h2>and helpful information, whether you're looking for answers,</h2>
            <h2>guidance, or just curious about the world around you.</h2>
          </p>
        </div>
        <div className="flex justify-center w-full">
          <input
            type="text"
            placeholder="Write your message"
            className="w-2/3 p-4 border rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button className="-ml-12 w-9 bg-green-500 text-white px-2 py-0 rounded-lg shadow hover:bg-green-600 flex items-center">
            <span className="material-symbols-outlined">send</span>
          </button>
        </div>
      </main>
    </div>
  );
};

export default App;
