import { useState, useEffect } from "react";
import type { Skill } from "../../types";
import { SkillComponent } from "./components/skill-component";
import { Grid } from "@mui/material";

export function SkillsPage() {

  const [data, setData] = useState<Array<Skill> | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const jsonUrl =
      'https://cohaagen.proxydns.com/services/datasCV/skills.data.json';

    fetch(jsonUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((jsonData) => {
        setData(jsonData.skills as Array<Skill>);
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
    {data && (data.map(element => <Grid size={{ xl:4, lg:6 ,md:6, sm:12, xs:12 }}><SkillComponent data={element} /></Grid>))}    
  </Grid>
  ;
}
