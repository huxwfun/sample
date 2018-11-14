import Router from 'next/router'
import { Button, Container, Row, Col } from 'reactstrap';
import { generateDynamicKey } from '../lib/utils'

const id = generateDynamicKey()

const IndexPage = () => (
  <Container fluid={false}>
    <Row>
      <Col>
        <h1>
          Testing Next.js App written in TypeScript with Jest
        </h1>
      </Col>
    </Row>
    <Row>
      <Col className='d-flex justify-content-center'>
        <Button color='primary' onClick={() => {
          Router.push({
            pathname: '/doc', query: { id }
          })
        }}>进入Demo</Button>
      </Col>
    </Row>
  </Container>
)


export default IndexPage