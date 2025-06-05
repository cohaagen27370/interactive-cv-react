import { useState, useEffect } from 'react';
import { ExperienceComponent } from './components/experience-component';
import type { Experience } from '../../types';
import { Grid } from '@mui/material';

export function ExperiencesPage() {
  const [data, setData] = useState<Array<Experience> | null>(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const jsonUrl =
      'https://cohaagen.proxydns.com/services/datasCV/experiences.data.json';

    fetch(jsonUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((jsonData) => {
        setData(jsonData.experiences as Array<Experience>);
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
    {data && (data.map(element => <Grid size={{ xl: 4, lg: 6, md: 6, sm: 12, xs: 12 }}><ExperienceComponent data={element} /></Grid>))}
  </Grid>
}
