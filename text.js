let getRacersData = async offset => {
  let limit = 10;

  let drivers = Array();
  const F1Drivers = await axios
    .get(`/drivers.json?limit=${limit}&offset=${offset}`)
    .then(res => {
      drivers = res.data["MRData"]["DriverTable"]["Drivers"];
      console.log(drivers);
    });
};
getRacersData(10);
