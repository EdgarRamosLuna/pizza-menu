// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const products = [
  {
      "id": "1",
      "id_item": "e090376a-46b6-402e-b968-ed2f35a294a1",
      "size": "Individual",
      "price": "55.00",
      "exin": "10.00",
      "chstedm": "10.00",
      "chstedp": "15.00",
      "exch": "10.00",
      "fin": "0.00",
      "pas": "0.00",
      "is_deleted": "0",
      "date": "0000-00-00 00:00:00"
  },
  {
      "id": "2",
      "id_item": "643fe0d6-717f-4688-b204-c81d62f211b4",
      "size": "Chica",
      "price": "75.00",
      "exin": "10.00",
      "chstedm": "15.00",
      "chstedp": "20.00",
      "exch": "15.00",
      "fin": "0.00",
      "pas": "0.00",
      "is_deleted": "0",
      "date": "0000-00-00 00:00:00"
  },
  {
      "id": "3",
      "id_item": "aabc23fe-6e95-4ea3-b0a7-fae2a1d1fc6e",
      "size": "Mediana",
      "price": "110.00",
      "exin": "15.00",
      "chstedm": "20.00",
      "chstedp": "25.00",
      "exch": "20.00",
      "fin": "0.00",
      "pas": "10.00",
      "is_deleted": "0",
      "date": "0000-00-00 00:00:00"
  },
  {
      "id": "4",
      "id_item": "bdf494b9-b3d5-4145-ae5f-45b19a953c3c",
      "size": "Familiar",
      "price": "140.00",
      "exin": "15.00",
      "chstedm": "25.00",
      "chstedp": "30.00",
      "exch": "25.00",
      "fin": "50.00",
      "pas": "15.00",
      "is_deleted": "0",
      "date": "0000-00-00 00:00:00"
  },
  {
      "id": "5",
      "id_item": "c3d059d3-4d37-4dd8-b078-d5c548fa2baa",
      "size": "Mega",
      "price": "175.00",
      "exin": "20.00",
      "chstedm": "30.00",
      "chstedp": "35.00",
      "exch": "30.00",
      "fin": "55.00",
      "pas": "20.00",
      "is_deleted": "0",
      "date": "0000-00-00 00:00:00"
  },
  {
      "id": "6",
      "id_item": "6da6a924-c92d-43a9-8b6a-f3e76e002b4a",
      "size": "Jumbo",
      "price": "220.00",
      "exin": "20.00",
      "chstedm": "35.00",
      "chstedp": "40.00",
      "exch": "35.00",
      "fin": "60.00",
      "pas": "25.00",
      "is_deleted": "0",
      "date": "0000-00-00 00:00:00"
  },
  {
      "id": "7",
      "id_item": "294e1371-af02-49c4-a277-c83b99c7f203",
      "size": "Calzone",
      "price": "60.00",
      "exin": "0.00",
      "chstedm": "0.00",
      "chstedp": "0.00",
      "exch": "0.00",
      "fin": "0.00",
      "pas": "0.00",
      "is_deleted": "0",
      "date": "0000-00-00 00:00:00"
  },
  {
      "id": "8",
      "id_item": "33d932ea-92f8-4b72-932b-8f71487ad765",
      "size": "Bone Less",
      "price": "100.00",
      "exin": "0.00",
      "chstedm": "0.00",
      "chstedp": "0.00",
      "exch": "0.00",
      "fin": "0.00",
      "pas": "0.00",
      "is_deleted": "0",
      "date": "0000-00-00 00:00:00"
  }
]
export default function handler(req, res) {
  res.status(200).json(products)
}
