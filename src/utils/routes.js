import { Login, UserHome } from '../pages/index'
import { NotFound } from '../commponents'
import { Result } from '../pages/result'
import { SelectAddress } from '../pages/selectAddress'
const Routes = [
  {
    path: '/user',
    component: UserHome,
  },
  {
    path: '/selectaddress/:questionId',
    component: SelectAddress,
  },
  {
    path: '/result/:questionId/:finalSolutionId',
    component: Result,
  },
  {
    path: '/',
    component: Login,
    exact: true,
  },
  {
    path: '/*',
    component: NotFound,
  },
]

export default Routes
