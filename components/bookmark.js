import React, { useState } from "react";
import {IoIosBookmarks,IoIosAlbums,IoIosInformationCircleOutline} from "react-icons/io";
import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`
  };
}
  export default function Panel6(){
   
    // function tooltipcheck(a)
    // {
    //   if(!a)
    //   { a=!a;
    //     setlabel1(a);
    //   }
    // }
    const[value,setValue]=useState(0);
    function handleChange(event, newValue) {
      setValue(newValue);
    }
    return (
        <div className=" flex-col border-l-2 border-slate-200 bg-slate-800 h-screen w-80">
        <div className="flex pt-4  border-b-2 border-slate-200" >
                  <IoIosBookmarks size={20} className="ml-3 fill-blue-500" />
                  <p className="mr-14 ml-3  text-slate-100 text-sm pb-2">Bookmarks</p>
               </div>
               <div>
        <div className="bg-slate-700">
                  <Tabs
                   value={value}
                   onChange={handleChange}
                   indicatorColor="primary"
                   //textColor="black"
                   TabIndicatorProps={
                   { style:{
                      display:"none",
                   }}
                   }
                  
                  >
                    <Tab label="Save BookMark" {...a11yProps(0)} style={{
                      "minWidth":50,
                      "marginLeft":6,
                      "marginTop":8,
                      "borderRight":" solid black",
                      "borderWidth":0.5,
                      "color":"#b3ccdb",
                       "backgroundColor":"#1e293b",
                       "fontSize":12,
                       

                    }} />
                    <Tab label="My BookMarks" {...a11yProps(1)} style={{
                       "minWidth" :50,
                       "marginTop":8,
                       "color":"#b3ccdb",
                       "backgroundColor":"#1e293b",
                       "paddingRight":12,
                       "paddingLeft":12,
                       "fontSize":12,
                      
                      }} />
                    
                    
                  </Tabs>
                  </div>
                  {/* </AppBar> */}
                  <div className="pt-4 pl-3 ">
                  <TabPanel value={value} index={0}>
                    <div className="text-slate-400">
                    content1
                    </div>
                    
                  </TabPanel>
                  <TabPanel value={value} index={1}>
                  <div className="text-slate-400">
                    content2
                    </div>
                  </TabPanel>
                  
                  </div>

     </div>
      </div>
    
    );
  }
  



