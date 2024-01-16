import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import Rating from "./Rating"

const Products = ({product}) => {
  return (
    <Card className="my-3 p-3 rounded">
        <Link to={`/product/${product._id}`}>
          <Card.Img src={product.image} variant="top" />

        </Link>
        <Card.Body>
        <Link className="text-decoration-none" to={`/product/${product._id}`}>
          <Card.Title as='div' >
            <strong className="d-flex justify-content-center text-decoration-none">{product.name}</strong>
            <p  className="d-flex justify-content-center">{product.description}</p>
          </Card.Title>
          </Link>
          <Card.Text>
            <Rating value={product.rating} text={product.category}/>
          </Card.Text>
          <Card.Text  className="d-flex justify-content-center" as='h4'>
            £{product.price}
          </Card.Text>
        </Card.Body>
    </Card>
  )
}

export default Products