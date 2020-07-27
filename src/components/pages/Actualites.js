import React, { useEffect } from "react";

function Actualites() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <h1>Page d'Actualités</h1>
    </div>
  );
}

export default Actualites;
