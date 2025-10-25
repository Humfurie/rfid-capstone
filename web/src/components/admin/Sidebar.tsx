import { styled, Theme, CSSObject } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SpaceDashboardRoundedIcon from '@mui/icons-material/SpaceDashboardRounded';
import ArticleRoundedIcon from '@mui/icons-material/ArticleRounded';
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded';
import EscalatorWarningRoundedIcon from '@mui/icons-material/EscalatorWarningRounded';
import Face6RoundedIcon from '@mui/icons-material/Face6Rounded';
import AssignmentIndRoundedIcon from '@mui/icons-material/AssignmentIndRounded';
import BrandingWatermarkRoundedIcon from '@mui/icons-material/BrandingWatermarkRounded';
import RecentActorsRoundedIcon from '@mui/icons-material/RecentActorsRounded';
import React from 'react';
import Link from 'next/link';
import { BsUpcScan } from 'react-icons/bs';


const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));



const Sidebar = (props: any) => {

    const { open, theme, handleDrawerClose } = props

    return (
        <>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <BrandingWatermarkRoundedIcon /> : <BrandingWatermarkRoundedIcon />}
                    </IconButton>
                <span className={`font-bold text-center`}>A I S - R F T</span>
                
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>

                <Divider />
                <List>
                    {['Dashboard'].map((text, index) => (
                        <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                            <Link href={'/'}
                            // className={`${text === "Dashboard" ? 'bg-gray-200': ""}`}
                            >

                                <ListItemButton
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open ? 'initial' : 'center',
                                        px: 2.5,
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : 'auto',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        {index % 2 === 0 ? <SpaceDashboardRoundedIcon /> : ""}
                                    </ListItemIcon>
                                    <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />

                                </ListItemButton>
                            </Link>
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['Employees', 'Students', 'Parents'].map((text, index) => (
                        <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                            <Link href={`${text === "Employees" ? '/users/employee' : text === "Students" ? '/users/student' : text === "Parents" ? '/users/parent' : ""}`}>
                                <ListItemButton
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open ? 'initial' : 'center',
                                        px: 2.5,
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : 'auto',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        {text === "Employees" ? <AssignmentIndRoundedIcon /> : text === "Students" ?<AssignmentIndRoundedIcon /> : text === "Parents" ? <EscalatorWarningRoundedIcon /> : ""}
                                    </ListItemIcon>
                                    <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                                </ListItemButton>
                            </Link>

                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['Activities'].map((text, index) => (
                        <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                            <Link href={'/users/activities'}>
                                <ListItemButton
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open ? 'initial' : 'center',
                                        px: 2.5,
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : 'auto',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        {index % 4 === 0 ? <ArticleRoundedIcon /> : ""}
                                    </ListItemIcon>
                                    <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                                </ListItemButton>
                            </Link>
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['Positions', 'Year Levels',].map((text) => (
                        <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                            <Link href={`${text === "Positions" ? '/users/position' : text === "Year Levels" ? '/users/year-level' : ""}`}>
                                <ListItemButton
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open ? 'initial' : 'center',
                                        px: 2.5,
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : 'auto',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        {text === "Positions" ? <SpaceDashboardRoundedIcon /> : text === "Year Levels" ? <BarChartRoundedIcon /> : ""}
                                    </ListItemIcon>
                                    <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                                </ListItemButton>
                            </Link>
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['Scanner',].map((text) => (
                        <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                            <Link href={'/users/scan-here'}>
                                <ListItemButton
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open ? 'initial' : 'center',
                                        px: 2.5,
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : 'auto',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        {text === "Scanner" ? <RecentActorsRoundedIcon /> : ""}
                                    </ListItemIcon>
                                    <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                                </ListItemButton>
                            </Link>
                        </ListItem>
                    ))}
                </List>
            </Drawer>

        </>
    );
}

export default Sidebar;