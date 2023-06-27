import React,{useEffect,useState} from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
//import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import TablePagination from "@mui/material/TablePagination";
//import TableContainer from "@mui/material/TableContainer";
//import SearchBar from "material-ui-search-bar";
import SearchBar from "material-ui-search-bar";
//import GrFormAdd from "react-icons/gr";
import{GrFormAdd} from "react-icons/gr";
import {BiExpandHorizontal,BiFullscreen,BiAddToQueue} from "react-icons/bi";

export default function Table1() {
  const [users, setUsers] = useState([])
  const [rows, setRows] = useState(users);
  const [loading, setLoading] = useState(false)
  const [searched, setSearched] = useState("");
  var filteredRows=[];
  useEffect(() => {
    setLoading(true)
    fetch("http://65.0.15.182:8081/catalogapi/v1/getDatasets")
      .then(response => response.json())
      .then(json => setUsers(json['data']))
      .finally(() => {
        setLoading(false)
       // var [rows, setRows] = useState(users)
        setRows(users)
        setSearched("")
        requestSearch("")
        
        // cancelSearch()
      })
  }, [])
  const [pg, setpg] = React.useState(0);
    const [rpg, setrpg] = React.useState(2);
    
    function handleChangePage(event, newpage) {
        setpg(newpage);
    }
  
    function handleChangeRowsPerPage(event) {
        setrpg(parseInt(event.target.value, 10));
        setpg(0);
    }
   
  
    const requestSearch = (searchedVal) => {
      // if(!loading)
     // {
      filteredRows = users.filter((row) => {
        return (row.sp_name).toLowerCase().includes(searchedVal.toLowerCase());
      });
      setRows(filteredRows);
      //console.log(Rows);
    //}
    };
  
    const cancelSearch = () => {
      if(!loading){
        setSearched("");
        requestSearch(searched);
        setUsers
      }
      
    };
  
  return (
    <div >
      {(loading && rows)?(<p className="text-slate-400" >Loading...</p>
            ) :
      (
        <div>
               {/* <Paper> */}
      <div className="mb-2">
         <SearchBar
          value={searched}
          onChange={(searchVal) => requestSearch(searchVal)}
          onCancelSearch={() => cancelSearch()}
          style={{
            maxWidth: '100 px',
            float:'left',
            maxHeight:'30px',
            backgroundColor:'#CACEE0',
            margin:"2"
          }}
        />  
      </div>
        <div className="pt-8">
      <Table className="overflow-y-scroll pt-4 mt-4" sx={{ minWidth: 650 }}  >
        <TableBody>
          
        {rows.slice(pg * rpg, pg * rpg + rpg).map((row) => (
                    <TableRow key={row.sp_id}>
                      <Accordion 
           style={
            {
                marginRight:12,
            }
           }
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              //id="panel1a-header"
              style={
                {
                    backgroundColor:"#3B82F6",
                    height:'0px',
                    minHeight: '28px',
                                   }
              }
            >
              
              <TableRow className="w-48">
                <p className="truncate">{row.sp_name}</p></TableRow>
            </AccordionSummary>
            <AccordionDetails className="bg-slate-800 pl-5 justify-center  border border-slate-400 text-slate-400" >
              <div className="flex-col">
              <div>
                <p className="text-xs ">{row.sp_name}</p>
                <p className="text-sm text-green-600">{row.sp_datatype}</p>
                <p className="text-xs">{row.sp_id} </p>
                <p className="text-xs">{row.sp_crs}</p>
                
              </div>
              <div>
                <button className="border border-slate-400 pl-2 pr-2 pt-2 pb-2"><BiAddToQueue/></button>
                <button className="border border-slate-400 pl-2 pr-2 pt-2 pb-2"><BiExpandHorizontal /></button>
                <button className="border border-slate-400 pl-2 pr-2 pt-2 pb-2"><BiFullscreen/></button>
                </div>
                </div>
            </AccordionDetails>
          </Accordion>
                    </TableRow>
                  ))}
        </TableBody>
        </Table>
        <div>
        <TablePagination className="text-slate-400  "
                rowsPerPageOptions={[2,5,15]}
                component="div"
                count={users.length}
                rowsPerPage={rpg}
                page={pg}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                
            />
            </div>
      {/* </Paper> */}
      {/* {" "} */}
    </div>


        </div>
      )
         
      }
      

    </div>
  );


  
}

//rowsPerPageOptions={[2,5,25]}