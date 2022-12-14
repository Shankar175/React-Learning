import { Paper } from '@mui/material'

const Item = ({item}) => {
    return (
        <Paper>
            <img src={item.image} alt={item.title} style={{width:"100%", height: "75vh"}} />
            <div style={{display:"flex", justifyContent: "center"}}>
                <h2>{item.title}</h2>
            </div>
        </Paper>
    )
}

export default Item