function getUrlParams() {
    var params = {};
    var search = window.location.search.substring(1);
    var urlParams = new URLSearchParams(search);
    
    for (var [key, value] of urlParams) {
      params[key] = value;
    }
    
    return params;
  }

let params = getUrlParams();
var startDate = params.startDate
var endDate = params.endDate
var tokenAuth = params.token
var endpoint = params.endpoint

async function fetchData(url_endpoint) {
    try {
      const url = url_endpoint;
      const token = tokenAuth
  
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      if (!response.ok) {
        throw new Error('Network response was not OK');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error.message);
    }
  }
  
  async function getDataVisitorShip() {
    try {
      const jsonData = await fetchData(endpoint+'/api/dashboard/getVisitorshipByDate?startDate='+startDate+'&endDate='+endDate);
      // Process the JSON data here
    //   console.log(jsonData.data);
      return jsonData.data
    } catch (error) {
      console.error('Error:', error.message);
    }
  }
  
  async function getSalesBreakdownVisitors() {
    try {
      const jsonData = await fetchData(endpoint+'/api/dashboard/getChannelByVisitors?startDate='+startDate+'&endDate='+endDate);
      // Process the JSON data here
    //   console.log(jsonData.data);
      return jsonData.data
    } catch (error) {
      console.error('Error:', error.message);
    }
  }
  
  async function getSalesBreakdownRevenue() {
    try {
      const jsonData = await fetchData(endpoint+'/api/dashboard/getChannelByRevenue?startDate='+startDate+'&endDate='+endDate);
      // Process the JSON data here
    //   console.log(jsonData.data);
      return jsonData.data
    } catch (error) {
      console.error('Error:', error.message);
    }
  }
  
  function getRandomColor() {
    const hue = Math.floor(Math.random() * 360); // Random hue (0 - 359)
    const saturation = Math.floor(Math.random() * 101); // Random saturation (0 - 100)
    const lightness = Math.floor(Math.random() * 101); // Random lightness (0 - 100)
    const alpha = 0.4; // Set the desired transparency value (0.0 - fully transparent, 1.0 - fully opaque)
    return `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`;
}