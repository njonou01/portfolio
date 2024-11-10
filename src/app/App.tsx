import React, { useEffect, useState } from "react";
import Home from "./pages/Home/Home";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simule le chargement des ressources de ton application
    const loadApp = async () => {
      try {
        // Ici, tu peux mettre ton vrai code de chargement
        // Par exemple : charger des données, vérifier l'authentification, etc.
        await new Promise((resolve) => setTimeout(resolve, 2000));

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
