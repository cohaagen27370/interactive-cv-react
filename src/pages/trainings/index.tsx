import { Grid } from "@mui/material";
import { useState, useEffect } from "react";
import type { Training } from "../../types";
import { TrainingComponent } from "../trainings/components/training-component";

export function TrainingPage() {
  const [data, setData] = useState<Array<Training> | null>(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const jsonUrl =
      'https://cohaagen.proxydns.com/services/datasCV/trainings.data.json';

    fetch(jsonUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((jsonData) => {
        setData(jsonData.trainings as Array<Training>);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);
  
  if (loading) {
    return <div>Chargement des données...</div>;
  }

  if (error) {
    return <div>Erreur : {error.message}</div>;
  }

  return <Grid container spacing={2}>
    {data && (data.map(element => <Grid size={{ xl: 6, lg: 12, md: 12, sm: 12, xs: 12 }}><TrainingComponent data={element} /></Grid>))}
  </Grid>
}
