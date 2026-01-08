import { TextField } from '@mui/material'

export default function Input({ label, placeholder }) {
    return (


        <TextField sx={{ label: { color: "gray" }, input: { '::placeholder': { color: "gray" } }, input: { color: "white" } }} id="standard-basic" label={label} variant="standard" placeholder={placeholder} />


    )
}
