import React from 'react';

import './style.css';
import DesignBuild from '../components/designBuild/designBuild';



function DesignBuildPage (){
 
  return (
    <section className='designBuildPageSection'> 
      <div className="designBuildPageText">
          <DesignBuild/>
      </div>
    </section>
  )
}
export default DesignBuildPage;