
import { useEffect ,useState } from 'react';
import { Row , Col } from 'react-bootstrap'
import Products from '../components/Products'
import Axios from 'axios'

const Homescreen = () => {
  const [product , setProduct] = useState([])
  useEffect(()=> {
    const fetchProducts = async () => {
      const {data} = await Axios.get('api/products')
      console.log(data)
      setProduct(data)
    }
    fetchProducts();
  }, [])

  return (
    <>
        <h1>latest products</h1>
        <Row>
            {product.map((product) => {
               return  <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Products  product={product}/>
                </Col>
            })}
        </Row>
    </>
  )
}

export default Homescreen