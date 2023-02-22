import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { useCart } from 'react-use-cart';
import { useThemeHook } from '../GlobalComponents/ThemeProvider';


const ProductCard = (props) => {
let {image , price , title} =props.data;
const [theme] = useThemeHook();
const {addItem} = useCart();

const addTodoCart = ()=>{
    addItem(props.data);
}

  return (
    <Card style={{ width: '18rem', height:"auto" }}
    className={
`   ${theme? "bg-light-black text-light": "bg-light text-black "} text-center p-0 overflow-hidden shadow mx-auto mb-4`
    }  /* fotolar arasindaki bosluk ve ternary ile renk degisimini yaptik */
    >
    <Card.Img variant="top" src={image}/>
    <Card.Body>
      <Card.Title>
        {title}
      </Card.Title>

      <Card.Title>
     Rs. <span className='h3' >{price}  </span>
      </Card.Title>
     
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
  )
}

export default ProductCard