import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useEffect, useState } from "react";
import type { HowTo } from "../../types";

export function BeingPage() {

    const [data, setData] = useState<HowTo | null>(null);
    const [error, setError] = useState<Error | null>(null);
    const [loading, setLoading] = useState(true);
  
    const maxLength: number[] = Array.from({ length: 20 }, (_, i) => i);
  
    useEffect(() => {
      const jsonUrl =
        'https://cohaagen.proxydns.com/services/datasCV/howto.data.json';
  
      fetch(jsonUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((jsonData) => {
          setData(jsonData as HowTo);
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
  
  
  return <TableContainer><Table>
            <TableHead>
          <TableRow>
            <TableCell>Qualités</TableCell>
        <TableCell>Défauts</TableCell>
      </TableRow>
    </TableHead>

    <TableBody>

      {data && maxLength.map((element) =>
        
        (data.defaults[element] || data.qualities[element]) && 
          <TableRow>
            <TableCell>
              {data.qualities[element]}
            </TableCell>            
            <TableCell>
              {data.defaults[element]}
            </TableCell>
        </TableRow>        
        )}


        </TableBody>
  </Table></TableContainer>;

}
