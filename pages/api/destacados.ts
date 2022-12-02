import { NextApiRequest, NextApiResponse } from "next";

//endpoint del front para seleccionar algunos productos como destacados
export default async function (req: NextApiRequest, res: NextApiResponse) {
  const response = await fetch(
    "https://api-m9-vercel-ige5.vercel.app/api/products"
  );
  const data = await response.json();
  const destacados = data.res.hits;
  // hay que agregar criterio de seleccion para productos destacados
  const selectToShow = destacados.slice(1, 3);
  res.status(200).send(selectToShow);
}
