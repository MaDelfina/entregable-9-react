import { useEffect, useState } from "react";
import { customFetch } from "../CustomFetch";
import { productos } from "../productos/productos";
import ItemList from "./ItemList";
import Page from "../componetes/Page"

const ItemListContainer = () => {

  const [ListProducts, SetListProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    customFetch(productos)
    .then(data => SetListProducts(data))
    setLoading(false)
  }, [])

  return (
    <>
      {
        loading
          ?
          <div>Loading...</div>
          :
          <Page titulo="Home">
            <ItemList ListProducts={ListProducts} />
          </Page>
      }
    </>
  )
}

export default ItemListContainer