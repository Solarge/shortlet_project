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
import React from 'react';
import Apartments from './Apartments'; // Import the array of apartment data
import '../index.css'; // Import the CSS file

const ApartmentsComponent = () => {
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
                <a href={`/apartment/${apartment.id}`} className="btn btn-primary">View Details</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ApartmentsComponent;
