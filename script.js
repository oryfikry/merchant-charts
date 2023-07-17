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
      const jsonData = await fetchData('https://uat-api.globaltix.com/api/dashboard/getVisitorshipByDate?startDate='+startDate+'&endDate='+endDate);
      // Process the JSON data here
    //   console.log(jsonData.data);
      return jsonData.data
    } catch (error) {
      console.error('Error:', error.message);
    }
  }
  
  async function getSalesBreakdownVisitors() {
    try {
      const jsonData = await fetchData('https://uat-api.globaltix.com/api/dashboard/getChannelByVisitors?startDate='+startDate+'&endDate='+endDate);
      // Process the JSON data here
    //   console.log(jsonData.data);
      return jsonData.data
    } catch (error) {
      console.error('Error:', error.message);
    }
  }
  
  async function getSalesBreakdownRevenue() {
    try {
      const jsonData = await fetchData('https://uat-api.globaltix.com/api/dashboard/getChannelByRevenue?startDate='+startDate+'&endDate='+endDate);
      // Process the JSON data here
    //   console.log(jsonData.data);
      return jsonData.data
    } catch (error) {
      console.error('Error:', error.message);
    }
  }
  

  

let datatest = [
    {
        "attraction": "Adventure Cove Waterpark™",
        "date": "2023-07-16T00:00:00",
        "total_redeemed_qty_by_date": 17
    },
    {
        "attraction": "Dolphin Encounter and Discovery",
        "date": "2023-07-16T00:00:00",
        "total_redeemed_qty_by_date": 3
    },
    {
        "attraction": "S.E.A. Aquarium + Behind The Panel",
        "date": "2023-07-16T00:00:00",
        "total_redeemed_qty_by_date": 20
    },
    {
        "attraction": "S.E.A. Aquarium™",
        "date": "2023-07-16T00:00:00",
        "total_redeemed_qty_by_date": 205
    },
    {
        "attraction": "Universal Studios Singapore",
        "date": "2023-07-16T00:00:00",
        "total_redeemed_qty_by_date": 555
    },
    {
        "attraction": "Universal Studios Singapore Express Pass",
        "date": "2023-07-16T00:00:00",
        "total_redeemed_qty_by_date": 2
    },
    {
        "attraction": "Van Gogh Exhibition (Within Universal Studios Singapore or S.E.A.A.)",
        "date": "2023-07-16T00:00:00",
        "total_redeemed_qty_by_date": 9
    },
    {
        "attraction": "Adventure Cove Waterpark™",
        "date": "2023-07-15T00:00:00",
        "total_redeemed_qty_by_date": 26
    },
    {
        "attraction": "Dolphin Encounter and Discovery",
        "date": "2023-07-15T00:00:00",
        "total_redeemed_qty_by_date": 5
    },
    {
        "attraction": "S.E.A. Aquarium + Behind The Panel",
        "date": "2023-07-15T00:00:00",
        "total_redeemed_qty_by_date": 21
    },
    {
        "attraction": "S.E.A. Aquarium™",
        "date": "2023-07-15T00:00:00",
        "total_redeemed_qty_by_date": 278
    },
    {
        "attraction": "Universal Studios Singapore",
        "date": "2023-07-15T00:00:00",
        "total_redeemed_qty_by_date": 437
    },
    {
        "attraction": "Universal Studios Singapore Express Pass",
        "date": "2023-07-15T00:00:00",
        "total_redeemed_qty_by_date": 0
    },
    {
        "attraction": "Van Gogh Exhibition (Within Universal Studios Singapore or S.E.A.A.)",
        "date": "2023-07-15T00:00:00",
        "total_redeemed_qty_by_date": 18
    },
    {
        "attraction": "Adventure Cove Waterpark™",
        "date": "2023-07-14T00:00:00",
        "total_redeemed_qty_by_date": 9
    },
    {
        "attraction": "Dolphin Encounter and Discovery",
        "date": "2023-07-14T00:00:00",
        "total_redeemed_qty_by_date": 4
    },
    {
        "attraction": "S.E.A. Aquarium + Behind The Panel",
        "date": "2023-07-14T00:00:00",
        "total_redeemed_qty_by_date": 22
    },
    {
        "attraction": "S.E.A. Aquarium™",
        "date": "2023-07-14T00:00:00",
        "total_redeemed_qty_by_date": 359
    },
    {
        "attraction": "Universal Studios Singapore",
        "date": "2023-07-14T00:00:00",
        "total_redeemed_qty_by_date": 951
    },
    {
        "attraction": "Universal Studios Singapore Express Pass",
        "date": "2023-07-14T00:00:00",
        "total_redeemed_qty_by_date": 0
    },
    {
        "attraction": "Van Gogh Exhibition (Within Universal Studios Singapore or S.E.A.A.)",
        "date": "2023-07-14T00:00:00",
        "total_redeemed_qty_by_date": 11
    },
    {
        "attraction": "Adventure Cove Waterpark™",
        "date": "2023-07-13T00:00:00",
        "total_redeemed_qty_by_date": 22
    },
    {
        "attraction": "Dolphin Encounter and Discovery",
        "date": "2023-07-13T00:00:00",
        "total_redeemed_qty_by_date": 5
    },
    {
        "attraction": "S.E.A. Aquarium + Behind The Panel",
        "date": "2023-07-13T00:00:00",
        "total_redeemed_qty_by_date": 22
    },
    {
        "attraction": "S.E.A. Aquarium™",
        "date": "2023-07-13T00:00:00",
        "total_redeemed_qty_by_date": 314
    },
    {
        "attraction": "Universal Studios Singapore",
        "date": "2023-07-13T00:00:00",
        "total_redeemed_qty_by_date": 1026
    },
    {
        "attraction": "Universal Studios Singapore Express Pass",
        "date": "2023-07-13T00:00:00",
        "total_redeemed_qty_by_date": 4
    },
    {
        "attraction": "Van Gogh Exhibition (Within Universal Studios Singapore or S.E.A.A.)",
        "date": "2023-07-13T00:00:00",
        "total_redeemed_qty_by_date": 6
    },
    {
        "attraction": "Adventure Cove Waterpark™",
        "date": "2023-07-12T00:00:00",
        "total_redeemed_qty_by_date": 9
    },
    {
        "attraction": "Dolphin Encounter and Discovery",
        "date": "2023-07-12T00:00:00",
        "total_redeemed_qty_by_date": 4
    },
    {
        "attraction": "S.E.A. Aquarium + Behind The Panel",
        "date": "2023-07-12T00:00:00",
        "total_redeemed_qty_by_date": 20
    },
    {
        "attraction": "S.E.A. Aquarium™",
        "date": "2023-07-12T00:00:00",
        "total_redeemed_qty_by_date": 334
    },
    {
        "attraction": "Universal Studios Singapore",
        "date": "2023-07-12T00:00:00",
        "total_redeemed_qty_by_date": 726
    },
    {
        "attraction": "Universal Studios Singapore Express Pass",
        "date": "2023-07-12T00:00:00",
        "total_redeemed_qty_by_date": 0
    },
    {
        "attraction": "Van Gogh Exhibition (Within Universal Studios Singapore or S.E.A.A.)",
        "date": "2023-07-12T00:00:00",
        "total_redeemed_qty_by_date": 13
    },
    {
        "attraction": "Adventure Cove Waterpark™",
        "date": "2023-07-11T00:00:00",
        "total_redeemed_qty_by_date": 7
    },
    {
        "attraction": "Dolphin Encounter and Discovery",
        "date": "2023-07-11T00:00:00",
        "total_redeemed_qty_by_date": 8
    },
    {
        "attraction": "S.E.A. Aquarium + Behind The Panel",
        "date": "2023-07-11T00:00:00",
        "total_redeemed_qty_by_date": 22
    },
    {
        "attraction": "S.E.A. Aquarium™",
        "date": "2023-07-11T00:00:00",
        "total_redeemed_qty_by_date": 222
    },
    {
        "attraction": "Universal Studios Singapore",
        "date": "2023-07-11T00:00:00",
        "total_redeemed_qty_by_date": 759
    },
    {
        "attraction": "Universal Studios Singapore Express Pass",
        "date": "2023-07-11T00:00:00",
        "total_redeemed_qty_by_date": 0
    },
    {
        "attraction": "Van Gogh Exhibition (Within Universal Studios Singapore or S.E.A.A.)",
        "date": "2023-07-11T00:00:00",
        "total_redeemed_qty_by_date": 14
    },
    {
        "attraction": "Adventure Cove Waterpark™",
        "date": "2023-07-10T00:00:00",
        "total_redeemed_qty_by_date": 7
    },
    {
        "attraction": "Dolphin Encounter and Discovery",
        "date": "2023-07-10T00:00:00",
        "total_redeemed_qty_by_date": 2
    },
    {
        "attraction": "S.E.A. Aquarium + Behind The Panel",
        "date": "2023-07-10T00:00:00",
        "total_redeemed_qty_by_date": 23
    },
    {
        "attraction": "S.E.A. Aquarium™",
        "date": "2023-07-10T00:00:00",
        "total_redeemed_qty_by_date": 237
    },
    {
        "attraction": "Universal Studios Singapore",
        "date": "2023-07-10T00:00:00",
        "total_redeemed_qty_by_date": 754
    },
    {
        "attraction": "Universal Studios Singapore Express Pass",
        "date": "2023-07-10T00:00:00",
        "total_redeemed_qty_by_date": 0
    },
    {
        "attraction": "Van Gogh Exhibition (Within Universal Studios Singapore or S.E.A.A.)",
        "date": "2023-07-10T00:00:00",
        "total_redeemed_qty_by_date": 9
    }
]

let datatest2 =  [
    {
        "attraction": "Treasure Bay Bintan",
        "date": "2023-07-10T00:00:00",
        "total_redeemed_qty_by_date": 13
    },
    {
        "attraction": "Treasure Bay Bintan",
        "date": "2023-07-09T00:00:00",
        "total_redeemed_qty_by_date": 41
    },
    {
        "attraction": "Treasure Bay Bintan",
        "date": "2023-07-08T00:00:00",
        "total_redeemed_qty_by_date": 79
    },
    {
        "attraction": "Treasure Bay Bintan",
        "date": "2023-07-07T00:00:00",
        "total_redeemed_qty_by_date": 18
    },
    {
        "attraction": "Treasure Bay Bintan",
        "date": "2023-07-06T00:00:00",
        "total_redeemed_qty_by_date": 43
    },
    {
        "attraction": "Treasure Bay Bintan",
        "date": "2023-07-05T00:00:00",
        "total_redeemed_qty_by_date": 5
    },
    {
        "attraction": "Treasure Bay Bintan",
        "date": "2023-07-04T00:00:00",
        "total_redeemed_qty_by_date": 45
    }
]