  var fundInfoDialog = document.getElementById("fundInfoDialog");
  if (!fundInfoDialog.showModal) {
    dialogPolyfill.registerDialog(fundInfoDialog);
  }
  //fundInfoDialog.showModal();
  fundInfoDialog.querySelector('#fundCloseDialog').addEventListener('click', function() {
    fundInfoDialog.close();
  });
  // Continue funding - Close current dialog - enter payment dialog
  fundInfoDialog.querySelector('#fundContinueDialog').addEventListener('click', function() {
    fundInfoDialog.close();
  });
  function initMap(gLat,gLong) {
    var uluru = {lat: gLat, lng: gLong};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 18,
      center: uluru,
      mapTypeId: 'roadmap'
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
    console.log(gLat);
    console.log(gLong);
  }
  function createDialog(imgUrl,projectStatus,ifRunning,projectName,projectDesc,projectAddr,ifOwner,ifInvestor,dailyPayout,weekPayout,monthPayout,canFund,totalneeded,totalfunded,projectlat,projectlong,co2Potential,co2Daily,co2Yearly,co2MeDaily,co2MeLifetime) {
    console.log("createDialog was called");
    document.querySelector('#dialogDescTxt').innerHTML = projectDesc;
    document.querySelector('#dialogAddress').innerHTML = projectAddr;
    document.querySelector('#dialogProjectName').innerHTML = projectName;
    document.querySelector('#dialogAvatar').src = imgUrl;
    document.querySelector('#status-chip-txt').innerHTML = projectStatus;
    if (projectstatus = "Currently Funding") {
      document.querySelector('#status-chip').style.background = "#2196f3";
      document.querySelector('#status-chip').style.color = "#000";
    }
    if (canFund = true) {} else {
      if(canFund = false) {} else {
        throw "canFund variable is not boolean";
      }
    }
    if (projectStatus = "funding") {
      document.querySelector('#amountmyCO2').innerHTML = co2Potential;
      document.querySelector('#co2txtbox1desc').innerHTML = "Annual CO2 Offset";
      document.querySelector('#ethansStupidButtons').innerHTML = '<div class="mdl-dialog__actions"><button type="button" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" online="fundInfoDialog.close();">Cancel</button><button type="button" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect colorfulEthanFund" onclick="fundInfoDialog.close(); fundDialog1.showModal();">Fund</button></div>';
    }
    fundInfoDialog.showModal();
    console.log(projectlat,projectlong);
    initMap(projectlat,projectlong);
  }
  function dialog2() {
    createDialog("/images/ethan-avatar.png","funding",false,"5.75 kW - Tesla","5.75 kW Panels | 5 kWh Batt, produced by Tesla. Expected Installation Date: Dec 17.","Redondo Beach, CA",false,false,null,null,null,true,513,290,33.834168,-118.380670,"2,200",null,null,null,null);
  }
  var ctx = document.getElementById("myChart").getContext('2d');
  var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [{
              label: 'Energy Usage',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }]
          }
      }
  });
