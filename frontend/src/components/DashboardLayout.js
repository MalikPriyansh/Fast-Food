import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Menu from './Menu'

function DashboardLayout(props) {
  //console.log("dashLayout rendered");
    const matchPath = props.match.path;  
  return (
        <div className="dashboardLayout"> 
        <Routes>
        <Route 
        exact path={`${matchPath}`} 
        render={(props) => (matchPath === "/" ? 
        (<Menu {...props} />) :
        (<Menu></Menu>)
        )}/>
        </Routes>
        </div>
        
    )
}

export default DashboardLayout;
