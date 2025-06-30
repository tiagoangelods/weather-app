/**
 * @swagger
 * /weather:
 *   get:
 *     summary: Get weather info for a city
 *     parameters:
 *       - in: query
 *         name: city
 *         schema:
 *           type: string
 *         required: true
 *         description: Name of the city
 *       - in: query
 *         name: provider
 *         schema:
 *           type: string
 *           enum: [openweather, accuweather]
 *         required: false
 *         description: Weather provider
 *     responses:
 *       200:
 *         description: Weather data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 current:
 *                   type: object
 *                 forecast:
 *                   type: object
 *       400:
 *         description: City required
 *       500:
 *         description: Server error
 */

import express from 'express';
import { openWeatherTranslator } from '../utils/openWeather.translator';
import { getWeatherAdapter } from '../services/weather.service';

const router = express.Router();

router.get('/weather', async (req, res) => {
  const { city, provider = 'openWeather' } = req.query;
  if (!city) {
    return res.status(400).json({ error: 'City required' });
  }

  try {
    const serviceProvider = getWeatherAdapter(String(provider));
    const current = await serviceProvider.getCurrentWeather(String(city));
    const forecast = await serviceProvider.getForecast(String(city));
    return res.json(openWeatherTranslator({ current, forecast }));
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
});

export default router;
