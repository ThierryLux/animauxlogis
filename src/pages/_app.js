import { ApolloProvider } from '@apollo/client';
import "@/styles/globals.css";
import "leaflet/dist/leaflet.css";
import MaintenancePage from "../components/Maintenance";
import client from '@/lib/apollo-clients';

export default function App({ Component, pageProps }) {
  const isMaintenance = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "true";

  if (isMaintenance) {
    return <MaintenancePage />
  }

  return (
    <>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  ) 
}

