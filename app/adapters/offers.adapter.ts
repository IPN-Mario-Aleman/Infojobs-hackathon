export const offerAdapter = ({ data }: any) => {
  return data.map((offer: any, index: number) => {
    return {
      id: offer.id,
      title: offer.title,
      salMin: offer.salaryMin.value,
      salMax: offer.salaryMax.value
    }
  })
}
