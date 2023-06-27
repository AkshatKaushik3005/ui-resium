import React, { useState } from "react";
import {BiWorld} from "react-icons/bi";
import Link from "next/link";
import {IoIosInformationCircleOutline} from "react-icons/io";
//import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
// import Tab from "@material-ui/core/Tab";
// import Tabs from "@material-ui/core/Tabs";
import PropTypes from "prop-types";
//import { makeStyles } from "@material-ui/core/styles";
import { makeStyles, Theme, useTheme } from "@material-ui/core/styles";
//import AppBar from "@material-ui/core/AppBar";
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


  export default function Panel2(){
  var [label1,setlabel1]=useState(true);
  const[value,setValue]=useState(0);
  function handleChange(event, newValue) {
    setValue(newValue);
  }
  let tabStyle = {};
  let labelStyle = {};

  //Workaround
  tabStyle.minWidth = 50;
  // tabStyle.marginLeft = 3;
  tabStyle.marginTop=6,
  tabStyle.color="#b3ccdb";
  tabStyle.backgroundColor="#1e293b"
  tabStyle.paddingRight = 5;
  tabStyle.paddingLeft = 5;
  tabStyle.letterSpacing = "-.01em";
  tabStyle.fontSize=12,
  // "color":"FFFDFD",
  //  "backgroundColor":"#334155",
    
    labelStyle = { fontSize: "10px" };
    function tooltipcheck(a)
    {
      if(!a)
      { a=!a;
        setlabel1(a);
      }
    }
    return (
        <div className="  flex-col border-l-2 border-slate-200 bg-slate-800 h-screen w-80 "> 
                  <div className="flex pt-4 pb-1  w-80 border-b-2 border-slate-500" >
                          < BiWorld size={20} className="ml-3 fill-blue-500" />
                         <Link href="/" className="mr-16 ml-3 text-slate-300 hover:text-blue-500 ">3DTools</Link>
                          <div className="cursor-pointer">
                              <IoIosInformationCircleOutline size={20} className=" fill-blue-500 ml-24" onMouseOver={() => {setlabel1(!label1)}} onMouseOut={()=> {tooltipcheck(label1)}}/>
                          </div>
                     { !label1 && (<div class="z-10 mt-10 ml-24 w-64 absolute transition duration-150 ease-in-out  shadow-lg bg-indigo-500 p-1 rounded">
                          
                              <p class="text-sm font-bold text-white pb-1">3D Tools</p>
                              <p class="text-xs leading-4 text-white pb-3">A set of tools that operates on the 3D objects.</p>
                          </div> 
                         )}
                    
                  </div>
     
                <div>
                    
                  {/* <AppBar position="static" color=""> */}
                  <div className="bg-slate-700">
                  <Tabs
                   value={value}
                   onChange={handleChange}
                   indicatorColor="primary"
                  //variant="scrollable"
                  //scrollButtons="auto"
                  // aria-label="scrollable auto tabs example"
                  TabIndicatorProps={
                    { style:{
                       display:"none",
                    }}
                    }
                  >
                    <Tab label="LOS" {...a11yProps(0)} style={{
                      "minWidth":50,
                      "marginLeft":6,
                      "marginTop":6,
                      "borderRight":" solid black",
                      "borderWidth":0.5,
                      "color":"#b3ccdb",
                       "backgroundColor":"#1e293b",
                       "fontSize":12,
                       //"letterSpacing":0.0em

                    }} />
                    <Tab label="Blend and Swipe" {...a11yProps(1)} style={{
                      "borderRight":"solid black",
                      "borderWidth":0.5,
                       "minWidth" :50,
                       "marginTop":6,
                       "color":"#b3ccdb",
                       "backgroundColor":"#1e293b",
                       "paddingRight":6,
                       "paddingLeft":6,
                       "fontSize":12,
                      
                      }} />
                    <Tab label="Fly Through" {...a11yProps(2)} style={tabStyle} />
                    
                  </Tabs>
                  </div>
                  {/* </AppBar> */}
                  <div className="pt-4 pl-3 ">
                  <TabPanel value={value} index={0}>
                   <div className="text-slate-400 text-sm">
                   content of LOS
                    </div> 
                  </TabPanel>
                  <TabPanel value={value} index={1}>
                    <div className="text-slate-400 text-sm">content of Blend and swipe</div>
                  </TabPanel>
                  <TabPanel value={value} index={2}>
                    <div className="text-slate-400 text-sm">content of Fly Through</div>
                  </TabPanel>
                  </div>
               </div>
  
         
        </div>
    );
  }
  

 {/* <div >
     <Tabs variant='soft-rounded' colorScheme='green'>
        <TabList className="bg-slate-600 pt-4">
          <Tab  id='col1' className=" text-blue-600 bg-slate-700 ml-1 pt-2 pl-2  focus:border-r-2 border-slate-800 focus:border-t-2 border-slate-800 focus:border-l-2 border-slate-800 focus:text-slate-400" >LOS</Tab>
          <Tab id='col2' className=" text-blue-600 bg-slate-700 pl-2 pt-2  focus:border-r-2 border-slate-800 focus:border-t-2 border-slate-800 focus:border-l-2 border-slate-800 focus:text-slate-400 ">Blend and Swipe</Tab>
          <Tab id='col3' className=" text-blue-600 bg-slate-700 pl-2 pt-2 pr-2  focus:border-r-2 border-slate-800 focus:border-t-2 border-slate-800 focus:border-l-2 border-slate-800 focus:text-slate-400 ">Fly Through</Tab>
        </TabList>
        <TabPanels>
            <TabPanel>
                <p>Line of Sight</p>
            </TabPanel>
            <TabPanel>
                <p>Blend and Swipe</p>
            </TabPanel>
            <TabPanel>
                <p>Fly Through</p>
            </TabPanel>
       </TabPanels>
     </Tabs>
    

   </div>     */}
        {/* <div
       style={{
        marginLeft: "15%",
        marginRight: "15%",
      }}
        > */}
     
  //       <Tabs
  //       value={value}
  //       textColor="primary"
  //        indicatorColor="primary"
  //        variant="scrollable"
  //       onChange={(e, val) => {
  //         setValue(val);
  //       }}
  //     >
  //       {/* <Tab label="TAB One" />
  //       <Tab label="TAB Two" />
  //       <Tab label="Disabled TAB" disabled />
  //       <Tab label="TAB Four" /> */}
  //       <Tab  id='col1' className=" text-blue-600 bg-slate-700 ml-1 pt-2 pl-2 w-1   " label="LOS"/>
  //       <Tab id='col2' className=" text-blue-600 bg-slate-700 pl-2 pt-2  "label="Blend and Swipe"/>
  //       <Tab id='col3' className=" text-blue-600 bg-slate-700 pl-2 pt-2 pr-2  " label="Fly Through"/>
        
  //     </Tabs>
  //     <h3>TAB NO: {value + 1} </h3>
  // </div>

  