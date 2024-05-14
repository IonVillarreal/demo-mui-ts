import React from 'react'
import { useForm } from 'react-hook-form'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormLabel from '@mui/material/FormLabel'
import Button from '@mui/material/Button'
import { FormularioType } from './FormWithController'
import { Card, Grid, Typography } from '@mui/material'

function FormWithoutController() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormularioType>({
    defaultValues: {
      firstName: '',
      lastName: '',
      country: null,
      birthDate: null,
      gender: '',
      hobbies: [],
      skills: [],
      maritalStatus: '',
      experience: 0,
    },
  })

  const onSubmit = (data: FormularioType) => {
    console.log(data)
  }

  return (
    <Grid
      container
      height={'100vh'}
      justifyContent="center"
      alignItems="center"
    >
      <Grid item>
        <Card sx={{ maxWidth: '600px', minWidth: '400px', p: 4, m: 2 }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              {...register('firstName', { required: 'First name is required' })}
              label="First Name"
              variant="outlined"
              fullWidth
              error={!!errors.firstName}
              helperText={errors.firstName?.message}
            />
            <TextField
              {...register('lastName', { required: 'Last name is required' })}
              label="Last Name"
              variant="outlined"
              fullWidth
              error={!!errors.lastName}
              helperText={errors.lastName?.message}
            />
            <Autocomplete
              options={[{ label: 'USA' }, { label: 'Canada' }]}
              getOptionLabel={(option) => option.label}
              fullWidth
              onChange={(_, value) => {
                setValue('country', value?.label)
              }}
              renderInput={(params) => (
                <TextField {...params} label="Country" variant="outlined" />
              )}
            />
            <FormControl variant="outlined" fullWidth>
              <InputLabel>Gender</InputLabel>
              <Select {...register('gender')} label="Gender" fullWidth>
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="outlined" fullWidth>
              <InputLabel>Hobbies</InputLabel>
              <Select
                {...register('hobbies')}
                label="Hobbies"
                renderValue={(selected: string) => selected}
              >
                <MenuItem value="reading">Reading</MenuItem>
                <MenuItem value="sports">Sports</MenuItem>
              </Select>
            </FormControl>
            <Typography>Skills</Typography>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox {...register('skills.0')} />}
                label="JavaScript"
              />
              <FormControlLabel
                control={<Checkbox {...register('skills.1')} />}
                label="React"
              />
            </FormGroup>
            <FormControl component="fieldset" fullWidth>
              <FormLabel component="legend">Marital Status</FormLabel>
              <RadioGroup {...register('maritalStatus')}>
                <FormControlLabel
                  value="single"
                  control={<Radio />}
                  label="Single"
                />
                <FormControlLabel
                  value="married"
                  control={<Radio />}
                  label="Married"
                />
              </RadioGroup>
            </FormControl>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </form>
        </Card>
      </Grid>
    </Grid>
  )
}

export default FormWithoutController
