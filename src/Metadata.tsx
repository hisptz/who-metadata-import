import React from 'react';
import './styling/metadata.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

interface MetadataProps {
  organizationName: string;
  logoUrl: string;
  description: string;
}

function Metadata(props: MetadataProps) {
  const leftMarginInPixels = 5 * 37.8;

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/details/${props.organizationName}`);
  }
  return (
    <div className="card mb-3 ml-2 mt-2" style={{ width: '500px', marginLeft: `${leftMarginInPixels}px` }} onClick={handleClick}>
      <div className="row no-gutters">
        <div className="col-md-4 p-3">
          <img src={props.logoUrl} alt={`${props.organizationName} Logo`} className="img-fluid" />
        </div>
        <div className="col-md-8">
          <div className="card-body p-3">
            <h5 className="card-title">{props.organizationName}</h5>
            <p className="card-text">{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Metadata;
