import { Collapse, Label, FormGroup, Input } from 'reactstrap'
import Datetime from 'react-datetime'
import 'react-datetime/css/react-datetime.css'

const Deadline = ({ value, onChange }) => (
  <FormGroup check>
    <Label check>
      <Input type='checkbox' checked={!!value} onChange={e => {
        if (e.target.checked) {
          onChange(new Date())
        } else {
          onChange(null)
        }
      }} />{' '}
      限制表单提交日期
    </Label>
    <Collapse isOpen={!!value}>
      {value && <Datetime
        dateFormat='YYYY-MM-DD'
        timeFormat='HH:mm'
        locale='zh-cn'
        value={value}
        onChange={onChange}
        closeOnSelect
      />}
    </Collapse>
  </FormGroup>
)

export default Deadline