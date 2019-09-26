// import React from 'react';
// import { Redirect } from 'react-router-dom';

// export default ({context}) => {    //Signout, redirect to homepage
// //console.log('signoutReached');
//   return (
//     <Redirect to="/" />
//   );
// }

import React from 'react';
import { Redirect } from 'react-router-dom';

export default ({context}) => {
  context.actions.signOut();

  return (
    <Redirect to="/" />
  );
}