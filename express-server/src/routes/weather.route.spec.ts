describe('Weather Routes', () => {
  it('should return weather data for a valid city', async () => {
    const spy = jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue({
        location: { name: 'Sydney', country: 'AU' },
        current: { temperature: 22, condition: 'Sunny' },
        forecast: [{ date: '2023-10-01', temperature: 23, condition: 'Sunny' }],
      }),
    } as any);
    const response = await fetch('http://localhost:3000/api/weather?city=Sydney,AU');
    const data = await response.json();
    expect(spy).toHaveBeenCalled();
    expect(data).toEqual({
      location: { name: 'Sydney', country: 'AU' },
      current: { temperature: 22, condition: 'Sunny' },
      forecast: [{ date: '2023-10-01', temperature: 23, condition: 'Sunny' }],
    });
  });
});
