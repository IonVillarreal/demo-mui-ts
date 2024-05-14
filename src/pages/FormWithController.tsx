import React from 'react'
import { useForm } from 'react-hook-form'
import Button from '@mui/material/Button'
import {
  FormInputDate,
  FormInputDropdown,
  FormInputDropdownMultiple,
  FormInputMultiCheckbox,
  FormInputRadio,
  FormInputSlider,
  FormInputText,
} from '../components/form'
import { FormInputAutocomplete } from '../components/form/FormInputAutocomplete'
import { Card, Grid } from '@mui/material'

export interface FormularioType {
  firstName: string
  lastName: string
  country?: string | null
  birthDate?: string | null
  gender: string
  hobbies: Array<string>
  skills: Array<string>
  maritalStatus: string
  experience: number
}

function ExampleFormWithController() {
  const { control, handleSubmit, setValue } = useForm<FormularioType>({
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
            <FormInputText
              id={'firstName'}
              name="firstName"
              control={control}
              label="First Name"
              rules={{ required: 'First name is required' }}
            />
            <FormInputText
              id={'lastName'}
              name="lastName"
              control={control}
              label="Last Name"
              rules={{ required: 'Last name is required' }}
            />
            <FormInputAutocomplete
              id={'country'}
              name="country"
              control={control}
              label="Country"
              freeSolo
              options={[
                { key: '1', label: 'USA' },
                { key: '2', label: 'Canada' },
              ]}
              getOptionLabel={(option) => option.label}
              renderOption={(option) => <>{option.label}</>}
            />
            <FormInputDate
              id={'birthDate'}
              name="birthDate"
              control={control}
              label="Birth Date"
            />
            <FormInputDropdown
              id={'gender'}
              name="gender"
              control={control}
              label="Gender"
              options={[
                { key: '1', value: 'male', label: 'Male' },
                { key: '2', value: 'female', label: 'Female' },
              ]}
            />
            <FormInputDropdownMultiple
              id={'hobbies'}
              name="hobbies"
              control={control}
              label="Hobbies"
              options={[
                { key: '1', value: 'reading', label: 'Reading' },
                {
                  key: '2',
                  value: 'sports',
                  label: 'Sports',
                },
              ]}
            />
            <FormInputMultiCheckbox
              id="skills"
              name="skills"
              control={control}
              options={[
                { key: '1', value: 'javascript', label: 'JavaScript' },
                {
                  key: '2',
                  value: 'react',
                  label: 'React',
                },
              ]}
              label={'skills'}
              setValue={setValue}
            />
            <FormInputRadio
              id="maritalStatus"
              name="maritalStatus"
              control={control}
              label="Marital Status"
              options={[
                { value: 'single', label: 'Single' },
                { value: 'married', label: 'Married' },
              ]}
            />
            <FormInputSlider
              id="experience"
              name="experience"
              control={control}
              label={'experience'}
              setValue={setValue}
            />
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </form>
        </Card>
      </Grid>
    </Grid>
  )
}

export default ExampleFormWithController
