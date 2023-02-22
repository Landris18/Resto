import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import "../assets/scss/tab-menu.scss";


export default function CardMenu(
    { name, price, image }: { name: string; price: string; image: any }
) {
    return (
        <Card sx={{ maxWidth: 345 }} className="card-menu">
            <CardMedia
                component="img"
                height="250"
                image={image}
                alt="menu"
            />
            <CardContent>
                <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                    <Typography variant="body1" sx={{ fontFamily: "circular", color: "#333" }}>
                        {name}
                    </Typography>
                    <Typography sx={{ fontFamily: "circular", color: "#fff", fontSize: 13, py: 0.2, px: 1, width: 28, backgroundColor: "#fc0330", borderRadius: 50 }}>
                        {price}
                    </Typography>
                </Stack>
            </CardContent>
        </Card>
    );
};