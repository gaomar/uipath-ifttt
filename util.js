const axios = require('axios');

module.exports.sendRPA = async function sendRPA(message) {
  // UiPathに渡すパラメータ
  const data = 
  {
    "message": message
  };

  // オプションを定義
  const jsonData =
  {
    "startInfo": {
      "ReleaseKey": process.env.RPA_RELEASEKEY,
      "Strategy": "All",
      "RobotIds": [],
      "NoOfRobots": 0,
      "InputArguments": JSON.stringify(data)
    }
  };

  return new Promise(function (resolve, reject) {
    axios.post(`https://platform.uipath.com/${process.env.RPA_ACCOUNT_NAME}/${process.env.RPA_TENANT_NAME}/odata/Jobs/UiPath.Server.Configuration.OData.StartJobs`, jsonData, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.RPA_TOKEN}`,
        'X-UIPATH-TenantName': `${process.env.RPA_TENANT_NAME}`
      }
    }).then(res => {
      resolve(true);
    }).catch(error => {
      reject(error.response);
    });
  });
};