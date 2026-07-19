import React from 'react';
// Step 8: Import the CSS Module
import styles from './CohortDetails.module.css';

function CohortDetails() {
  // Mock data representing the Cognizant Academy cohorts
  const cohorts = [
    { id: 1, name: 'Java Full Stack Developer', status: 'ongoing', platform: 'AWS', duration: '12 Weeks' },
    { id: 2, name: 'DotNet Core Specialist', status: 'completed', platform: 'Azure', duration: '8 Weeks' },
    { id: 3, name: 'Data Engineering Track', status: 'ongoing', platform: 'GCP', duration: '10 Weeks' }
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2 style={{ borderBottom: '2px solid #e5e7eb', paddingBottom: '10px' }}>
        Cognizant Academy - Cohort Dashboard
      </h2>
      
      <div>
        {cohorts.map((cohort) => {
          // Step 10: Dynamic inline color assignment based on status
          const statusHeaderStyle = {
            color: cohort.status === 'ongoing' ? 'green' : 'blue',
            margin: '0 0 10px 0',
            textTransform: 'capitalize'
          };

          return (
            // Step 9: Apply the scoped .box module class
            <div key={cohort.id} className={styles.box}>
              <h3 style={statusHeaderStyle}>{cohort.status} Cohort</h3>
              <dl>
                <dt>Program Name</dt>
                <dd>{cohort.name}</dd>
                
                <dt>Cloud Platform</dt>
                <dd>{cohort.platform}</dd>
                
                <dt>Timeline Duration</dt>
                <dd>{cohort.duration}</dd>
              </dl>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CohortDetails;