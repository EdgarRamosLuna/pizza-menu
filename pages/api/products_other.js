export default function handler(req, res) {
  const products_other = [
    {
      id: "1",
      id_item: "2863a0ca-e081-459a-8a4e-a479902634a8",
      product: "Calzone",
      price: "60.00",
      ha: "0.00",
      sal: "0.00",
      doca: "0.00",
      is_deleted: "1",
      date: "0000-00-00 00:00:00",
    },
    {
      id: "2",
      id_item: "569cc0e5-c048-4e36-9986-985e0d2c1c26",
      product: "Boneless",
      price: "100.00",
      ha: "0.00",
      sal: "0.00",
      doca: "0.00",
      is_deleted: "1",
      date: "0000-00-00 00:00:00",
    },
    {
      id: "3",
      id_item: "3dd4b800-c574-429e-841f-4baa4199d57d",
      product: "Hamburguesa",
      price: "60.00",
      ha: "70.00",
      sal: "70.00",
      doca: "80.00",
      is_deleted: "0",
      date: "0000-00-00 00:00:00",
    },
    {
      id: "4",
      id_item: "affb92f8-952c-4bf5-93b0-fc5ca2d4871f",
      product: "Papas francesas",
      price: "40.00",
      ha: "0.00",
      sal: "0.00",
      doca: "0.00",
      is_deleted: "0",
      date: "0000-00-00 00:00:00",
    },
    {
      id: "5",
      id_item: "75acb17e-eb99-4dc3-bb43-bf4d8a2871bf",
      product: "Spaguetti",
      price: "20.00",
      ha: "0.00",
      sal: "0.00",
      doca: "0.00",
      is_deleted: "0",
      date: "0000-00-00 00:00:00",
    },
    {
      id: "6",
      id_item: "d6dca593-3c63-41e0-9f6d-8019e933e125",
      product: "Lonche Pierna",
      price: "60.00",
      ha: "0.00",
      sal: "0.00",
      doca: "0.00",
      is_deleted: "1",
      date: "0000-00-00 00:00:00",
    },
  ];
  res.status(200).json(products_other);
}
