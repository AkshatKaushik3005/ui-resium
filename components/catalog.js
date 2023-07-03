import React, { useState } from "react";
import Link from "next/link";
import {IoIosInformationCircleOutline,IoIosAlbums} from "react-icons/io";
//import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import PropTypes from "prop-types";
import { makeStyles, Theme, useTheme } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Table1 from "./table1";
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

  export default function Panel3({info}){
    var [label1,setlabel1]=useState(true);
    const[value,setValue]=useState(0);
    //console.log(info);
    function handleChange(event, newValue) {
      setValue(newValue);
    }
    
    function tooltipcheck(a)
    {
      if(!a)
      { a=!a;
        setlabel1(a);
      }
    }
    
    return (
        <div className="  flex-col border-l-2 border-slate-200 bg-slate-800 h-screen w-80 overflow-auto"> 
        <div className="flex pt-4 pb-1  border-b-2 border-slate-200" >
           < IoIosAlbums size={20} className="ml-3 fill-blue-500 -mt-0.5 " />
           <Link href="/" className="mr-16 ml-3  text-slate-300 text-sm hover:text-blue-500 ">Geospatial Catalog</Link>
           <div className="cursor-pointer">
                <IoIosInformationCircleOutline size={20} className=" fill-blue-500 ml-8" onMouseOver={() => {setlabel1(!label1)}} onMouseOut={()=> {tooltipcheck(label1)}}/>
            </div>
                     { !label1 && (<div class="z-10 mt-10 ml-20 w-64 absolute transition duration-150 ease-in-out  shadow-lg bg-indigo-500 p-1 rounded">
                          
                              <p class="text-sm font-bold text-white pb-1">Geospatial Catalog</p>
                              <p class="text-xs leading-4 text-white pb-3">A Geospatial repository of cataloged datasets.</p>
                          </div> 
                         )}
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
                    <Tab label="WMS" {...a11yProps(0)} style={{
                      "minWidth":50,
                      "marginLeft":6,
                      "marginTop":6,
                      "borderRight":" solid black",
                      "borderWidth":0.5,
                      "color":"#b3ccdb",
                       "backgroundColor":"#1e293b",
                       "fontSize":12,
                       

                    }} />
                    <Tab label="WCS" {...a11yProps(1)} style={{
                       "minWidth" :50,
                       "marginTop":6,
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
                    <div>
                      
                    <Table1 info={info.filter((x)=>x.sp_category=='Vector')}/>
                    </div>
                    
                  </TabPanel>
                  <TabPanel value={value} index={1}>
                  <div>
                      
                  <Table1 info={info.filter((x)=>x.sp_category=='Raster')}/>
                      </div>
                      
                    
                  </TabPanel>
                  
                  </div>

     </div>
     </div>
    


    );
  }
  

