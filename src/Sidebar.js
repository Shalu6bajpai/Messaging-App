import React from 'react'
import "./Sidebar.css";
import {Avatar,IconButton} from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from '@material-ui/icons/MoreVert';

 function Sidebar() {
    return (
        <div className="sidebar">
               
                <div className="sidebar-header">
                    <Avatar src="https://lh3.googleusercontent.com/ogw/ADGmqu_84o7Thdm__fvzSAlJCr2two-6fNct-V3A7o7L=s83-c-mo" />
                    <div className="sidebar-headerRight">
                        
                        <IconButton>
                        <DonutLargeIcon />
                        </IconButton>
                        <IconButton>
                        <ChatIcon />
                        </IconButton>
                        <IconButton>
                        <MoreVertIcon/>
                        </IconButton>
                    </div>
                </div>
                
        </div>
    );
 }
    

export default Sidebar;
