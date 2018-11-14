import { Button,
  Container,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap'
import { withRouter } from 'next/router'
import { withState } from 'recompose'
import FormAttrs from '../../modules/formAttrs'

const enhance = withState('open', 'setOpen', false)

const IndexPage = enhance(
  withRouter(
    (props) => {
      const { open, setOpen, router } = props
      return (
        <Container fluid={false} className='mt-5'>
          <Row>
            <Col className='d-flex justify-content-center'>
              <Button color='primary' onClick={() => setOpen(true)}>提交</Button>
              <Modal isOpen={open} toggle={() => setOpen(!open)} className={null}>
                <ModalHeader>发布表单</ModalHeader>
                <ModalBody>
                  <FormAttrs url={`https://shimo.im/doc/${router.query.id}`} />
                </ModalBody>
                <ModalFooter>
                </ModalFooter>
              </Modal>
            </Col>
          </Row>
        </Container>
      )
    }
  )
)

export default IndexPage