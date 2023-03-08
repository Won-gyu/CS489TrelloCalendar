import React from 'react';

const DashboardHeader = ({year, month}) => {
    return (
        <div className={'row'}>
            <p className={'page-subheader'}>{month}, {year}</p>
        </div>
    );
};

export default DashboardHeader;