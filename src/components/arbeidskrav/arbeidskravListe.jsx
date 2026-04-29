import { useState, useEffect } from "react";
import { client } from "../../sanity/client";

const QUERY = `*[_type == "arbeidskrav"]{ _id, tittel, beskrivelse, status } | order(_createdAt desc)`;

export default function ArbeidskravListe() {
    //   const [arbeidskrav, setArbeidskrav] = useState([]);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    client.fetch(QUERY)
      .then(setData)
      .catch(() => setError("Kunne ikke hente data fra Sanity"));
  }, []);

  if (error) return <p>{error}</p>;
  if (!data) return <p>Laster arbeidskrav...</p>;
  if (data.length === 0) return <p>Ingen arbeidskrav funnet.</p>;

  return (
    <section>

            {/* <article id="tittel-info"> */}
            <h2>Arbeidskrav</h2>
             {/* </article> */}

      {data.map(({ _id, tittel, beskrivelse, status }) => (
        <article key={_id}>
          <h3>{tittel}</h3>
          <p>{beskrivelse}</p>
          <p><strong>Status:</strong> {status}</p>
        </article>
      ))}
    </section>
  );
}


// ChatGPT ble brukt som støtteverktøy til feilsøking og problemløsning underveis i prosjektet.
// https://chatgpt.com/share/69f1c0bd-719c-83ea-bb8c-45b6edbe2565
// Feilsøking i React og Git
// Strukturering av komponenter og feilretting.
// kI generlt hjelp er kritisk og vi sikret på og passet det til arbiedskrav