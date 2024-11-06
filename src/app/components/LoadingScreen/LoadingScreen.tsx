import React from "react";

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-gray-900 z-50 flex items-center justify-center">
      <div className="text-center">
        <div
          className="w-24 h-24 border-4 border-primary-500 border-t-transparent rounded-full 
                  animate-spin mb-8"
        ></div>
        <div className="text-white text-xl font-light">Chargement...</div>
      </div>
    </div>
  );
};

export default LoadingScreen;
