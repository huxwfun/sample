import { Button,
  InputGroup,
  Input,
  InputGroupAddon
} from 'reactstrap'
import QRCode from 'qrcode.react'
import { ToastContainer, toast, Zoom } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Deadline from './deadline'
import {connect} from 'react-redux'
import {setDeadline, setPassword, toggleOncePerIP, toggleOncePerDay} from './ducks'

const FormAttrs = ({url, deadline, setDeadline}) => {
  return (
    <div>
      <ToastContainer transition={Zoom} autoClose={1000} />
      <InputGroup>
        <Input readOnly value={url} />
        <InputGroupAddon addonType="append"><Button onClick={() => {
          toast('复制成功', {
            position: toast.POSITION.TOP_CENTER
          })
        }}>复制链接</Button></InputGroupAddon>
      </InputGroup>
      <div className={'mt-3 mx-4 d-flex'}>
        <QRCode value={url} size={96} />
        <div className='ml-3'>
          <p>扫一扫分享给朋友</p>
          <p>表单信息将汇总到关联的工作表</p>
        </div>
      </div>
      <div className='mt-3'>
        <Deadline value={deadline} onChange={value => {
          setDeadline(value)
          toast('设置成功', {
            position: toast.POSITION.TOP_CENTER
          })
        }} />
      </div>
    </div>
  )
}

export default connect(
  state => {
    const {formAttrs} = state as any
    return {...formAttrs}
  },
  {
    setDeadline, setPassword, toggleOncePerIP, toggleOncePerDay
  }
)(FormAttrs)