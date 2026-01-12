import { TextField } from '@mui/material'

export default function Input({ label, placeholder, value }) {
    return (


        <TextField sx={{ label: { color: "gray" }, input: { '::placeholder': { color: "gray" } }, input: { color: "white" }, width: "100%" }} id="standard-basic" label={label} variant="standard" placeholder={placeholder} />


    )
}
