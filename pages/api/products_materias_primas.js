export default function handler(req, res) {
    const products_materias_primas = [
        {
            "id": "1",
            "id_item": "20477c07-0d56-442f-a4fb-94142727e8d4",
            "is_ing": "1",
            "name": "Peperoni",
            "price": "0.00",
            "cant": "100",
            "is_deleted": "0",
            "date": "0000-00-00 00:00:00",
            "is_esp": "0"
        },
        {
            "id": "2",
            "id_item": "391f4aaa-855b-462b-82e2-41c2eef1c14b",
            "is_ing": "1",
            "name": "Jamon",
            "price": "0.00",
            "cant": "100",
            "is_deleted": "0",
            "date": "0000-00-00 00:00:00",
            "is_esp": "0"
        },
        {
            "id": "3",
            "id_item": "feb9f7d1-3df8-4e9f-9076-0a5aa69342f4",
            "is_ing": "1",
            "name": "Piña",
            "price": "0.00",
            "cant": "100",
            "is_deleted": "0",
            "date": "0000-00-00 00:00:00",
            "is_esp": "0"
        },
        {
            "id": "4",
            "id_item": "3a8f3f8e-f2ff-46b0-ac80-8c7888d5fa11",
            "is_ing": "1",
            "name": "Tocino",
            "price": "0.00",
            "cant": "100",
            "is_deleted": "0",
            "date": "0000-00-00 00:00:00",
            "is_esp": "0"
        },
        {
            "id": "5",
            "id_item": "622cafe4-09a1-4761-82bb-815f79043b3b",
            "is_ing": "1",
            "name": "Chorizo",
            "price": "0.00",
            "cant": "100",
            "is_deleted": "0",
            "date": "0000-00-00 00:00:00",
            "is_esp": "0"
        },
        {
            "id": "6",
            "id_item": "9e3945a3-aed7-4e85-b89a-0641b25bfae6",
            "is_ing": "1",
            "name": "Champiñones",
            "price": "0.00",
            "cant": "100",
            "is_deleted": "0",
            "date": "0000-00-00 00:00:00",
            "is_esp": "0"
        },
        {
            "id": "7",
            "id_item": "0f874956-3bdf-4226-bf22-f8a6c393525e",
            "is_ing": "1",
            "name": "Salchicha",
            "price": "0.00",
            "cant": "100",
            "is_deleted": "0",
            "date": "0000-00-00 00:00:00",
            "is_esp": "0"
        },
        {
            "id": "8",
            "id_item": "d8f3f472-0928-49a1-b86f-adf313de5f87",
            "is_ing": "1",
            "name": "Salchicha para asar",
            "price": "0.00",
            "cant": "100",
            "is_deleted": "0",
            "date": "0000-00-00 00:00:00",
            "is_esp": "0"
        },
        {
            "id": "9",
            "id_item": "95150f25-f11e-40d9-bf19-7ce4a24955ae",
            "is_ing": "1",
            "name": "Salami",
            "price": "0.00",
            "cant": "100",
            "is_deleted": "0",
            "date": "0000-00-00 00:00:00",
            "is_esp": "0"
        },
        {
            "id": "10",
            "id_item": "b1946ca4-fa15-403f-89f4-0eecaf116cae",
            "is_ing": "1",
            "name": "Aceitunas",
            "price": "0.00",
            "cant": "100",
            "is_deleted": "0",
            "date": "0000-00-00 00:00:00",
            "is_esp": "0"
        },
        {
            "id": "11",
            "id_item": "899766a0-19b9-4789-958f-e8233223479c",
            "is_ing": "1",
            "name": "Pimiento",
            "price": "0.00",
            "cant": "100",
            "is_deleted": "0",
            "date": "0000-00-00 00:00:00",
            "is_esp": "0"
        },
        {
            "id": "12",
            "id_item": "05a189a8-6b8a-46ea-885d-a7534308f685",
            "is_ing": "1",
            "name": "Carne",
            "price": "0.00",
            "cant": "100",
            "is_deleted": "0",
            "date": "0000-00-00 00:00:00",
            "is_esp": "0"
        },
        {
            "id": "13",
            "id_item": "0bed5e2c-98b0-4629-b627-699b26302d12",
            "is_ing": "1",
            "name": "Parmesano",
            "price": "0.00",
            "cant": "100",
            "is_deleted": "0",
            "date": "0000-00-00 00:00:00",
            "is_esp": "0"
        },
        {
            "id": "14",
            "id_item": "8d5948da-5200-4b79-8b01-b8971e77e1e0",
            "is_ing": "1",
            "name": "Atun",
            "price": "0.00",
            "cant": "100",
            "is_deleted": "0",
            "date": "0000-00-00 00:00:00",
            "is_esp": "0"
        },
        {
            "id": "15",
            "id_item": "9d0c2503-9088-490c-bb18-cace59320dbf",
            "is_ing": "1",
            "name": "Elote",
            "price": "0.00",
            "cant": "100",
            "is_deleted": "0",
            "date": "0000-00-00 00:00:00",
            "is_esp": "0"
        },
        {
            "id": "16",
            "id_item": "f5003326-69d9-4ab9-9b33-4e3437f73a42",
            "is_ing": "2",
            "name": "Cajas",
            "price": "0.00",
            "cant": "174",
            "is_deleted": "1",
            "date": "0000-00-00 00:00:00",
            "is_esp": "0"
        },
        {
            "id": "17",
            "id_item": "8168976f-8591-48f8-a7aa-69ae82019b67",
            "is_ing": "1",
            "name": "HAWAIIANNA",
            "price": "0.00",
            "cant": "0",
            "is_deleted": "0",
            "date": "0000-00-00 00:00:00",
            "is_esp": "0"
        },
        {
            "id": "18",
            "id_item": "645dae9c-d360-4466-a610-ed50493da0d1",
            "is_ing": "1",
            "name": "ITALIANA",
            "price": "0.00",
            "cant": "0",
            "is_deleted": "0",
            "date": "0000-00-00 00:00:00",
            "is_esp": "0"
        },
        {
            "id": "19",
            "id_item": "fe39f0a5-9a40-4676-9958-1212ddb5b04f",
            "is_ing": "1",
            "name": "MEXICANA",
            "price": "0.00",
            "cant": "0",
            "is_deleted": "0",
            "date": "0000-00-00 00:00:00",
            "is_esp": "0"
        },
        {
            "id": "20",
            "id_item": "6c6d436a-5a14-45e6-af5a-67845b62d141",
            "is_ing": "1",
            "name": "RANCHERA",
            "price": "0.00",
            "cant": "0",
            "is_deleted": "0",
            "date": "0000-00-00 00:00:00",
            "is_esp": "0"
        },
        {
            "id": "21",
            "id_item": "17dd82a4-ef00-49c7-b8be-b6c539d04185",
            "is_ing": "1",
            "name": "VEGETARIANA",
            "price": "0.00",
            "cant": "0",
            "is_deleted": "0",
            "date": "0000-00-00 00:00:00",
            "is_esp": "0"
        },
        {
            "id": "22",
            "id_item": "6f7d86e3-a3f6-41a1-987e-6f30dca75843",
            "is_ing": "1",
            "name": "ESCABECHES",
            "price": "0.00",
            "cant": "0",
            "is_deleted": "0",
            "date": "0000-00-00 00:00:00",
            "is_esp": "0"
        },
        {
            "id": "23",
            "id_item": "4f468317-ceb8-4b0e-aa01-dd0d0145e4dd",
            "is_ing": "1",
            "name": "CEBOLLA",
            "price": "0.00",
            "cant": "0",
            "is_deleted": "0",
            "date": "0000-00-00 00:00:00",
            "is_esp": "0"
        },
        {
            "id": "24",
            "id_item": "b12cc35d-9da0-4223-935f-acfdb25a8e59",
            "is_ing": "1",
            "name": "BBQ",
            "price": "0.00",
            "cant": "0",
            "is_deleted": "0",
            "date": "0000-00-00 00:00:00",
            "is_esp": "0"
        },
        {
            "id": "25",
            "id_item": "badca196-e5f1-4885-896b-6acd090a545e",
            "is_ing": "1",
            "name": "BUFALO",
            "price": "0.00",
            "cant": "0",
            "is_deleted": "0",
            "date": "0000-00-00 00:00:00",
            "is_esp": "0"
        },
        {
            "id": "26",
            "id_item": "145d1823-0d40-445c-99e6-257e7dee5315",
            "is_ing": "1",
            "name": "M. HABANERO",
            "price": "0.00",
            "cant": "0",
            "is_deleted": "0",
            "date": "0000-00-00 00:00:00",
            "is_esp": "0"
        }
    ];
    res.status(200).json(products_materias_primas);
  }
  