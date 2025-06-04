import {
  Stack,
  Card,
  CardContent,
  Typography,
  Box,
  CardMedia,
} from '@mui/material';
import { useEffect, useState } from 'react';
import type { Presentation } from '../../types';
import { differenceInYears } from 'date-fns';

export function PresentationPage() {
  const [data, setData] = useState<Presentation | null>(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const age: string = differenceInYears(
    new Date(),
    new Date(1980, 7, 11),
  ).toString();
  const anneesExperience: string = differenceInYears(
    new Date(),
    new Date(2001, 7, 1),
  ).toString();

  useEffect(() => {
    // URL de votre fichier JSON distant
    const jsonUrl =
      'https://cohaagen.proxydns.com/services/datasCV/presentation.data.json';

    fetch(jsonUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json(); // Convertit la réponse en objet JSON
      })
      .then((jsonData: Presentation) => {
        setData(jsonData);
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

  return (
    <Stack
      direction={'column'}
      sx={{ marginRight: '5px', width: '100%' }}
      spacing={5}
      justifyContent={'center'}
    >
      <Card>
        <CardMedia
          component="img"
          sx={{
            maxWidth: '10%',
            height: 'auto',
            display: 'block',
            objectFit: 'cover',
          }}
          image="images/me-real.jpg"
          alt="Me"
        />

        <Box
          sx={{
            width: {
              display: 'flex',
              flexDirection: 'column',
            },
            margin: 'auto',
            mt: 4,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <CardContent>
            <Typography variant="h5" component="div">
              Moi en quelques mots
            </Typography>
            <br />
            <Typography
              variant="body2"
              dangerouslySetInnerHTML={{
                __html: data?.description.replace('age', age),
              }}
            />
          </CardContent>
        </Box>
      </Card>

      <Card style={{ flexGrow: 1 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            Mon profil
          </Typography>
          <br />
          <Typography
            variant="body2"
            dangerouslySetInnerHTML={{
              __html: data?.profil.replace(
                'anneesExperience',
                anneesExperience,
              ),
            }}
          />
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Typography variant="h5" component="div">
            Mes coordonnées
          </Typography>
          <br />
          <Typography variant="body2">
            <Typography variant="body1">{data?.address.name}</Typography>
            <Typography variant="body1">{data?.address.street}</Typography>
            <Typography variant="body1">{data?.address.city}</Typography>
            <br />
            <Typography variant="body1">{data?.address.telephone}</Typography>
            <Typography variant="body1">{data?.address.email}</Typography>
          </Typography>
        </CardContent>
      </Card>
    </Stack>
  );
}
