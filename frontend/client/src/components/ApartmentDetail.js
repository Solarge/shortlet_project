// import React from 'react';
// import { useParams } from 'react-router-dom';
// import Apartments from './Apartments'; // Correctly import the Apartments data

// const ApartmentDetail = () => {
//   const { id } = useParams();
//   const apartment = Apartments.find(apt => apt.id === parseInt(id));

//   if (!apartment) {
//     return <div>Apartment not found</div>;
//   }

//   return (
//     <div className="container mt-5">
//       <h2>{apartment.title}</h2>
//       <p>{apartment.description}</p>
//       <p><strong>Price:</strong> {apartment.price}</p>
//       <div className="row">
//         {apartment.images.map((image, index) => (
//           <div className="col-md-4 mb-3" key={index}>
//             <img src={image} alt={`Apartment view ${index + 1}`} className="img-fluid" />
//           </div>
//         ))}
//       </div>
//       <div className="video-container mb-5">
//         <h3>Apartment Tour</h3>
//         <iframe
//           width="100%"
//           height="400px"
//           src={apartment.videoUrl}
//           title="Apartment Tour Video"
//           frameBorder="0"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//           allowFullScreen
//         ></iframe>
//       </div>
//     </div>
//   );
// };

// export default ApartmentDetail;

import React from 'react';
import { useParams } from 'react-router-dom';
import Apartments from './Apartments';

const ApartmentDetail = () => {
  const { id } = useParams();
  const apartment = Apartments.find(apt => apt.id === parseInt(id));
  console.log("Found Apartment:", apartment);

  if (!apartment) {
    return <div>Apartment not found</div>;
  }

  console.log('Apartment:', apartment); // Debugging line
  return (
    <div className="container mt-5">
      <h2>{apartment.title}</h2>
      <p>{apartment.description}</p>
      <p><strong>Price:</strong> {apartment.price}</p>
      <div className="row">
        {apartment.images.map((image, index) => (
          <div className="col-md-4 mb-3" key={index}>
            <img src={image} alt={`Apartment view ${index + 1}`} className="img-fluid" />
          </div>
        ))}
      </div>
      <div className="video-container mb-5">
        <h3>Apartment Tour</h3>
        <iframe
          width="100%"
          height="400px"
          src={apartment.videoUrl}
          title="Apartment Tour Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default ApartmentDetail;
