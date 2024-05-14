import React from 'react'
import { Box } from '@mui/material'
import GridExample from '../components/samples/GridExample'
import FlexboxExample from '../components/samples/FlexboxExample'
import FlexboxExamplePage from './FlexboxExamplePage'
import MaterialUIExamples from '../components/samples/MuiExamples'
import FormExample from './FormLoginExample'
import FormWithController from './FormWithController'
import FormWithoutController from './FormWithoutController'

function MainPage() {
  return (
    <Box>
      {/*<GridExample />*/}
      {/*<FlexboxExamplePage />*/}
      {/*<MaterialUIExamples />*/}
      {/*<FormExample />*/}
      {/*<FormWithoutController />*/}
      <FormWithController />
    </Box>
  )
}

export default MainPage
