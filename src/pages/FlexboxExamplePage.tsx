import React from 'react'
import FlexboxExample from '../components/samples/FlexboxExample'

import { Box } from '@mui/material'

function CenteredFlexbox() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 300,
        bgcolor: '#e0e0e0',
      }}
    >
      <Box sx={{ width: 100, height: 100, bgcolor: 'primary.main' }}>
        Elemento central
      </Box>
    </Box>
  )
}

function SpaceBetweenFlexbox() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        height: 200,
        bgcolor: '#e0e0e0',
      }}
    >
      <Box sx={{ width: 80, height: 80, bgcolor: 'primary.dark' }}>
        Elemento 1
      </Box>
      <Box sx={{ width: 80, height: 80, bgcolor: 'secondary.main' }}>
        Elemento 2
      </Box>
      <Box sx={{ width: 80, height: 80, bgcolor: 'success.light' }}>
        Elemento 3
      </Box>
    </Box>
  )
}

function EndAlignedWrapFlexbox() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        flexWrap: 'wrap',
        height: 300,
        bgcolor: '#e0e0e0',
      }}
    >
      <Box sx={{ width: 120, height: 120, bgcolor: 'info.main' }}>Caja 1</Box>
      <Box sx={{ width: 120, height: 120, bgcolor: 'warning.dark' }}>
        Caja 2
      </Box>
      <Box sx={{ width: 120, height: 120, bgcolor: 'error.light' }}>Caja 3</Box>
    </Box>
  )
}

function ColumnSpaceAroundFlexbox() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 400,
        bgcolor: '#e0e0e0',
      }}
    >
      <Box sx={{ width: 100, height: 100, bgcolor: 'success.dark' }}>
        Elemento 1
      </Box>
      <Box sx={{ width: 100, height: 100, bgcolor: 'error.main' }}>
        Elemento 2
      </Box>
      <Box sx={{ width: 100, height: 100, bgcolor: 'warning.light' }}>
        Elemento 3
      </Box>
    </Box>
  )
}

function FlexboxExamplePage() {
  return (
    <div>
      <h1>Flexbox Example</h1>
      <ColumnSpaceAroundFlexbox />
    </div>
  )
}

export default FlexboxExamplePage
