import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full border-t-4 border-gray-800 border-opacity-25 h-16 w-16"></div>
    </div>
  );
};

export default Loader;
