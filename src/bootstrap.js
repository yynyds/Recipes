import Vue from 'vue'
import './assets/element2.0/element-variables.scss'
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'

import {
  Pagination,
  Dialog,
  Input,
  Radio,
  RadioGroup,
  RadioButton,
  Checkbox,
  CheckboxGroup,
  Switch,
  Select,
  Option,
  OptionGroup,
  Button,
  DatePicker,
  TimeSelect,
  TimePicker,
  Popover,
  Tooltip,
  Form,
  FormItem,
  Icon,
  Row,
  Col,
  Spinner,
  Scrollbar,
  Loading,
  MessageBox,
  Message,
  Notification,
  Card,
  Autocomplete,
  Tabs,
  TabPane,
  ButtonGroup,
  Badge,
  Table,
  TableColumn,
  Tag,
  Alert,
  InputNumber,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Steps,
  Step,
  Tree,
  Collapse,
  CollapseItem,
  Progress,
  Upload,
  Slider,
  Transfer
} from 'element-ui'

import CollapseTransition from 'element-ui/lib/transitions/collapse-transition'

// Require Froala Editor js file.

// Require Froala Editor css files.


locale.use(lang)

Vue.use(Transfer)
Vue.use(Slider)
Vue.use(Upload)
Vue.use(Tree)
Vue.use(Steps)
Vue.use(Step)
Vue.use(Dropdown)
Vue.use(DropdownItem)
Vue.use(DropdownMenu)
Vue.use(Badge)
Vue.use(Tag)
Vue.use(Alert)
Vue.use(Tag)
Vue.use(Pagination)
Vue.use(Dialog)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Input)
Vue.use(InputNumber)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(RadioButton)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(Switch)
Vue.use(Select)
Vue.use(Option)
Vue.use(OptionGroup)
Vue.use(Button)
Vue.use(DatePicker)
Vue.use(TimeSelect)
Vue.use(TimePicker)
Vue.use(Popover)
Vue.use(Tooltip)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Icon)
Vue.use(Row)
Vue.use(Col)
Vue.use(Spinner)
Vue.use(Scrollbar)
Vue.use(Card)
Vue.use(Autocomplete)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(ButtonGroup)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(Progress)

Vue.component(CollapseTransition.name, CollapseTransition)
Vue.use(Loading.directive)

Vue.prototype.$loading = Loading.service
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$notify = Notification
Vue.prototype.$message = Message
