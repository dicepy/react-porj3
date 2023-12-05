import { ShoppingBasket } from "@mui/icons-material";
import {AppBar, IconButton, Toolbar, Typography} from "@mui/material"

const Header:React.FC = () => {
  return (
    <AppBar>
      <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <IconButton>
            <ShoppingBasket/>
          </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default Header;