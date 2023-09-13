import React,{useState,useEffect} from 'react'
import { DataQuery } from '@dhis2/app-runtime'
import Metadata from './Metadata'
import'./styling/metadata.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { metadataData } from './metadataConfigurations'; 
 


const MyApp = () => {
  const [metadataArray, setMetadataArray] = useState([]);

  useEffect(() => {
    // Use the imported metadata data directly
    setMetadataArray(metadataData);
  }, []);
  return (
    <div className="App">
      <div className="container">
      <div className="row">
      {metadataArray.map((metadata, index) => (
        <div key={index} className="col-md-5 mb-5">
        <Metadata
          key={index}
          organizationName={metadata.title}
          // You may need to update the property names here to match your data
          logoUrl={metadata.image}
          description={metadata.description}
        />
        </div>
      ))}
      </div>
      </div>
    </div>
  );
}
   

export default MyApp
