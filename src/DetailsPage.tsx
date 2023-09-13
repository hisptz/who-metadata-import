import React from 'react';
import { useParams } from 'react-router-dom';
import { metadataData } from './metadataConfigurations';
import { Button } from '@dhis2/ui'

const DetailsPage = () => {
  const { title } = useParams();

  // Now, based on the title, you can find the corresponding category details
  // from your metadataData file.
  const categoryDetails = metadataData.find((category) => category.title === title);

  return (
    <div className="container mt-4" style={{ paddingLeft: '150px', paddingRight: '150px' }}>
      <div className="row">
        <div className="col-md-6">
          <h1>{categoryDetails?.title}</h1>
          <p>{categoryDetails?.description}</p>
        </div>
        <div className="col-md-6">
          <img src={categoryDetails?.image} alt={categoryDetails?.title} className="img-fluid" />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-12">
          <h2>Packages</h2>
          {categoryDetails?.packages.map((pkg, index) => (
            <div key={index} className="mb-3">
              <h3>{pkg.title}</h3>
              <p>{pkg.description}</p>
        
 <table className="table table-bordered">
  <thead>
    <tr>
      <th scope="col"><p>DHIS2 Version</p></th>
      <th scope="col"><p>Package Version</p></th>
      <th scope="col"><p>Resources</p></th>
    </tr>
  </thead>
  <tbody>
                  {pkg.config.map((config, configIndex) => (
                    <tr key={configIndex}>
                      <td>{config.dhis2Version}</td>
                      <td>{config.packageVersion}</td>
                      <td><a href={config.resources}><Button>Resources</Button></a></td>
                    </tr>
                  ))}
                </tbody>
  </table>
              {/* Add more details about the package if needed */}
            </div>
          ))}
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-12 text-center">
      <Button
    name="Primary button"
    onClick={() => window.alert('It works!')}
    primary
    value="default"
>
    Begin Alignment
</Button>
    </div>
    </div>
    <div className="mt-4"></div>
    </div>
  );
};

export default DetailsPage;
