// // ApartmentsComponent.js
// import React from 'react';
// import Apartments from './Apartments';

// const ApartmentsComponent = () => {
//   return (
//     <div>
//       <h1>Available Apartments</h1>
//       <div className="apartment-list">
//         {Apartments.map(apartment => (
//           <div key={apartment.id} className="apartment-item">
//             <h2>{apartment.title}</h2>
//             <img src={apartment.imageUrl} alt={apartment.title} style={{ width: '200px', height: '150px' }} />
//             <p>{apartment.description}</p>
//             <p><strong>Price: </strong>{apartment.price}</p>
//             <a href={apartment.videoUrl} target="_blank" rel="noopener noreferrer">Watch Video Tour</a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ApartmentsComponent;

// ApartmentsComponent.js


//##################################################################


// import React from 'react';
// import Apartments from './Apartments'; // Import the array of apartment data
// import '../index.css'; // Import the CSS file

// const ApartmentsComponent = () => {
//   return (
//     <div className="container mt-5">
//       <h2>Available Apartments</h2>
//       <div className="apartment-list">
//         {Apartments.map(apartment => (
//           <div key={apartment.id} className="apartment-item">
//             <div className="card">
//               <img src={apartment.imageUrl} alt={apartment.title} className="card-img-top" />
//               <div className="card-body">
//                 <h5 className="card-title">{apartment.title}</h5>
//                 <p className="card-text">{apartment.description}</p>
//                 <p><strong>Price:</strong> {apartment.price}</p>
//                 <a href={`/apartment/${apartment.id}`} className="btn btn-primary">Learn more</a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ApartmentsComponent;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Apartments from './Apartments';
import '../index.css';

const ApartmentsComponent = () => {
  const [loading, setLoading] = useState(false);
  const [loadingId, setLoadingId] = useState(null); // To identify which button is loading
  const navigate = useNavigate();

  const handleViewDetails = (id) => {
    setLoading(true);
    setLoadingId(id);
    // Simulate a delay for fetching data
    setTimeout(() => {
      setLoading(false);
      setLoadingId(null);
      navigate(`/apartment/${id}`);
    }, 1000); // Simulate a network delay
  };

  return (
    <div className="container mt-5">
      <h2>Available Apartments</h2>
      <div className="apartment-list">
        {Apartments.map(apartment => (
          <div key={apartment.id} className="apartment-item">
            <div className="card">
              <img src={apartment.imageUrl} alt={apartment.title} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{apartment.title}</h5>
                <p className="card-text">{apartment.description}</p>
                <p><strong>Price:</strong> {apartment.price}</p>
                <button
                  onClick={() => handleViewDetails(apartment.id)}
                  className={`btn ${loading && loadingId === apartment.id ? 'brick-buffer' : 'btn-primary'}`}
                  disabled={loading && loadingId === apartment.id}
                >
                  {loading && loadingId === apartment.id ? 'Loading...' : 'Learn more'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ApartmentsComponent;
