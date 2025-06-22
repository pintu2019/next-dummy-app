import React from 'react';

export default function Page({ params }) {
  const { studentdetails } = React.use(params);
  console.log('Student Details:', studentdetails);

  return <div>Student: {studentdetails}</div>;
}
