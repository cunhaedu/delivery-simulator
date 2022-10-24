import { FormEvent, useCallback, useEffect, useState } from 'react';
import { Button, Grid, MenuItem, Select } from '@mui/material';

import { getCurrentPosition } from '../../helpers/geolocation';
import { Position, Route } from '../../interfaces/Route';
import { Map } from '../Map';

const API_URL = process.env.REACT_APP_API_URL;

export function Mapping() {
  const [routes, setRoutes] = useState<Route[]>([]);
  const [selectedRouteId, setSelectedRouteId] = useState('');
  const [currentPosition, setCurrentPosition] = useState<Position>({ lat: 0, lng: 0 });

  useEffect(() => {
    fetch(`${API_URL}/routes`)
      .then(response => response.json())
      .then(response => setRoutes(response))
  }, []);

  useEffect(() => {
    getCurrentPosition({ enableHighAccuracy: true }).then(position => {
      setCurrentPosition(position);
    })
  }, []);

  const handleStartRoute = useCallback((event: FormEvent) => {
    event.preventDefault();
    console.log(selectedRouteId);
  }, [selectedRouteId]);

  return (
    <Grid container style={{ width: '100%', height: '100%' }}>
      <Grid item xs={12} md={3}>
        <form onSubmit={handleStartRoute}>
          <Select
            fullWidth
            displayEmpty
            value={selectedRouteId}
            onChange={e => setSelectedRouteId(String(e.target.value))}
          >
            <MenuItem value="">
              <em>Selecione uma corrida</em>
            </MenuItem>
            {routes.map(route => (
              <MenuItem key={route._id} value={route._id}>
                {route.title}
              </MenuItem>
            ))}
          </Select>

          <Button type='submit' color='primary' variant='contained'>
            Iniciar corrida
          </Button>
        </form>
      </Grid>
      <Grid item xs={12} md={9}>
        <Map center={currentPosition} zoom={13} />
      </Grid>
    </Grid>
  )
}
