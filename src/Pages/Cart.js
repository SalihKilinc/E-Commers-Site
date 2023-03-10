import React from 'react'
import { Button, Container, Row, Table } from 'react-bootstrap';
import { useCart } from 'react-use-cart';
import { useThemeHook } from '../GlobalComponents/ThemeProvider'

const Cart = () => {
  const [theme] = useThemeHook();
  const {
    isEmpty,
    totalUniqueItems,
    totalItems,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  return (
    <Container className="py-4 mt-5">
      <h1 className={`${theme ? 'text-light' : 'text-light-primary'} my-5 text-center`}>
        {isEmpty ? 'Your Cart is Empty' : 'The Cart'}
      </h1>
      <Row className='justify-content-center'>
        <Table responsive="sm" striped bordered hover variant={theme ? "dark" : "light"} className="mb-5">
          <tbody>
            {items.map((item, index) => {
              return (
                <tr key={index}>

                  <td>
                    <div style={{
                      background: "white", height: "8rem", overflow: "hidden", display: "flex",
                      justifyContent: "center", alignItems: "center"
                    }}>
                      <div style={{ padding: ".5rem" }}>
                        <img src={item.image} style={{ width: "4rem" }} alt={item.title} />
                      </div>
                    </div>
                  </td>
                  <td>
                    <h6 style={{ whiteSpace: "nowrap", width: "14rem", overflow: "hidden", textOverflow: "ellipsis" }}>
                      {item.title}
                    </h6>
                  </td>
                  <td> Rs. {item.price}</td>
                  <td>Quantity ({item.quantity})</td>
                  <td>
                    <Button onClick={() => updateItemQuantity(item.id, item.quantity - 1)} className="ms-2"> - </Button>
                    <Button onClick={() => updateItemQuantity(item.id, item.quantity + 1)} className="ms-2"> + </Button>
                    <Button variant='danger' onClick={()=>removeItem(item.id)} className="ms-2">RemoveItem</Button>

                  </td>
                </tr>
              )
            })}

          </tbody>
        </Table>

      </Row>

    </Container>
  )
}

export default Cart