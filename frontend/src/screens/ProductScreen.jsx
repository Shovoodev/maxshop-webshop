import { useParams } from "react-router-dom"
import { Row , Col , Image, ListGroup, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import products from "../products"
import Rating from "../components/Rating";

const ProductScreen = () => {
    const { id: productId } = useParams() ;
    const product = products.find((p)=> p._id === productId)

  return (
    <>
         <Link className="btn btn-dark my-3" to="/"> go back </Link>
        <Row>
            <Col md={5}>
                <Image src={product.image} alt={product.name} fluid/>
            </Col>
            <Col md={4}>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <h3>{product.name}</h3>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Rating value={product.rating} text={product.description}/>
                    </ListGroup.Item>
                    <ListGroup.Item  as='h2'>
                        Price : £{product.price}
                    </ListGroup.Item>
                    <ListGroup.Item as='h5'>
                        Description : {product.description}
                    </ListGroup.Item>
                </ListGroup>
            </Col>
            <Col md={3}>
                <Card>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                    price :
                                </Col>
                                <Col>
                                <strong>
                                    £{product.price}
                                </strong>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                    Status :
                                </Col>
                                <Col>
                                <strong>
                                    {product.countInstock > 0 ? 'In stock' : 'Product not availeble'}
                                </strong>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item className=" d-flex justify-content-center mt-4">
                            <Button className="btn-dark"
                            type="button"
                            disabled= {product.countInstock === 0}>
                                        add to Card
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
    </>
  )
}

export default ProductScreen