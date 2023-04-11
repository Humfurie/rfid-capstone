import * as React from 'react';
import { styled } from '@mui/material/styles';
import { destroyCookie } from "nookies";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from "next/link";
import { useRouter } from 'next/router';


// Rearrange date value to get the order you want... also replace / with a cooler separator like ⋅
const drawerWidth = 240;

interface AppBarProps extends MuiAppBarProps {
	open?: boolean;
}

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
	zIndex: theme.zIndex.drawer + 1,
	transition: theme.transitions.create(['width', 'margin'], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));



export default function Header(props: any) {

	const { open, handleDrawerOpen } = props
	const router = useRouter()

	const [drop, setDrop] = React.useState<null | HTMLElement>(null);
	const letDrop = Boolean(drop);
	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setDrop(event.currentTarget);
	};
	const handleClose = () => {
		setDrop(null);
	};

	return (
		<>
			<AppBar
				position="fixed"
				open={open}
				className="bg-white shadow"
			>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						edge="start"
						sx={{
							marginRight: 5,
							...(open && { display: 'none' }),
						}}
					>
						<MenuIcon className="text-gray-700 pr-50"  />
					</IconButton>

					<div className="grid justify-items-end ">
						<div>


							<Button
								className="flex justify-end  text-gray-700 hover:bg-gray-200 hover: rounded-lg"
								id="demo-positioned-button"
								aria-controls={open ? 'demo-positioned-menu' : undefined}
								aria-haspopup="true"
								aria-expanded={open ? 'true' : undefined}
								onClick={handleClick}
							>
								Image
							</Button>
							<Menu
								id="demo-positioned-menu"
								aria-labelledby="demo-positioned-button"
								anchorEl={drop}
								open={letDrop}
								onClose={handleClose}
								anchorOrigin={{
									vertical: 'bottom',
									horizontal: 'right',

								}}
								transformOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
							>
								<MenuItem>
									<Link
										href={'/admin/profile'}>
										Profile
									</Link>

								</MenuItem>
								<MenuItem
									onClick={e => {
										destroyCookie(null, 'Admin')
										router.push('/login')
									}}>
									Logout
								</MenuItem>
							</Menu>
						</div>
					</div>
				</Toolbar>
			</AppBar>
		</>
	)
}