import Item from "./Item";

const ItemList = ({ListProducts}) => {

  return (
    <section className="item_list col-xl-11 auto">
        {ListProducts.map(product => <Item key={product.id} product={product} />)}
    </section>
  ) 
}
export default ItemList