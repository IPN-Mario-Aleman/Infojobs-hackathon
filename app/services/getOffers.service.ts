export const getOffersService = async () => {
  try {
    const res = await fetch('https://api.infojobs.net/api/9/offer?maxResults=10&order=updated', {
      method: 'GET',
      headers: { Authorization: `Basic ${process.env.token}` }
    })
    return res
  } catch (err) {
    console.log('An error has ocurred try again: ', err)
  }
}
