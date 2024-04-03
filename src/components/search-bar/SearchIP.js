import React, { useContext } from 'react';
import { IPContext } from '../../context/ip-context/IPContext';

const SearchIP = () => {
  const { ip, setIp, data, fetchData } = useContext(IPContext);

  return (
    <div className='searchIP'>
      <div className='search-section'>
        <h1>IP Address Tracker</h1>
        <div className='search-container'>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              fetchData();
            }}
          >
            <input
              type='text'
              placeholder='Search for any IP address or domain'
              name='search'
              value={ip}
              onChange={(e) => setIp(e.target.value)}
            />
          </form>
        </div>
      </div>
      <div className='result-section'>
        <div className='ip-address'>
          <h5>IP ADDRESS</h5>
          <p className={`${!data ? 'loader' : ''}`}>{data ? data.ip : ''}</p>
        </div>
        <div className='seperator'></div>
        <div className='location'>
          <h5>LOCATION</h5>
          <p className={`${!data ? 'loader' : ''}`}>
            {data ? `${data.location.region}, ${data.location.country}` : ''}
          </p>
        </div>
        <div className='seperator'></div>
        <div className='timezone'>
          <h5>TIMEZONE</h5>
          <p className={`${!data ? 'loader' : ''}`}>{data ? data.location.timezone : ''}</p>
        </div>
        <div className='seperator'></div>
        <div className='isp'>
          <h5>ISP</h5>
          <p className={`${!data ? 'loader' : ''}`}>{data ? data.isp : ''}</p>
        </div>
      </div>
    </div>
  );
};

export default SearchIP;
