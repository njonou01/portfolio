import React, { useEffect, useState } from "react";
import Home from "./pages/Home/Home";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const loadApp = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        setIsLoading(false);
      } catch (error) {
        console.error("Erreur de chargement:", error);
        setIsLoading(false);
      }
    };

    loadApp();
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }
  return <Home />;
};

export default App;
