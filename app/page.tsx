import Layout from '@src/components/Layout'
import { getOffersService } from './services/getOffers.service'

const urlAuth = 'https://www.infojobs.net/api/oauth/user-authorize/index.xhtml?scope=CANDIDATE_PROFILE_WITH_EMAIL&client_id=a2c0f457a9074876ada3000cfb651c76&redirect_uri=http://localhost:3000&response_type=code&state=OPTIONAL_CLIENT_LOCAL_STATE'

async function getOffers () {
  const res = await getOffersService()
  return res?.json()
}

export default async function Home () {
  const offers = await getOffers()

  return (
    <Layout>
      <h1>Hola este es la página web para infojobs - hackathon</h1>
      {offers.items.map((data: any, index: number) => {
        return (
          <div key={data.id}>
            <h1>
              {data.title} {index}
            </h1>
          </div>
        )
      })}
      <a href={urlAuth}>Iniciar sesion</a>
    </Layout>
  )
}
