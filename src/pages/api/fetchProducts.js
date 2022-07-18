import products from "./products.json";

const handler = (req, res) => {
  if (req.method == "GET") {
    const productsNoHashes = products.map((product) => {
      const { hash, filename, ...rest } = product;
      return rest;
    });
    res.status(200).json(productsNoHashes);
  } else {
    res.status(405).send(`Method ${req.method} not allowed`);
  }
};

export default handler;
