import { Radio } from "@mui/material";

function PhotoRadio(props){
    return(
        <div>
            <Radio
                checked={props.selectedPhoto === 0}
                onChange={() => props.handleChange(0)}
                value="0"
                name="radio-buttons"
                inputProps={{ 'aria-label': '0' }}
            />
            <Radio
                checked={props.selectedPhoto === 1}
                onChange={() => props.handleChange(1)}
                value="1"
                name="radio-buttons"
                inputProps={{ 'aria-label': '1' }}
            />
            <Radio
                checked={props.selectedPhoto === 2}
                onChange={() => props.handleChange(2)}
                value="2"
                name="radio-buttons"
                inputProps={{ 'aria-label': '2' }}
            />
        </div>
    )
}

export default PhotoRadio