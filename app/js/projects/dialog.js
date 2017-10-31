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
      document.querySelector('#ethansStupidButtons').innerHTML = '<div class="mdl-dialog__actions"><button type="button" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" online="fundInfoDialog.close()">Cancel</button><button type="button" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect colorfulEthanFund">Fund</button></div>';
    }
    fundInfoDialog.showModal();
    console.log(projectlat,projectlong);
    initMap(projectlat,projectlong);
  }
  function dialog2() {
    createDialog("https://solariot.nyc3.digitaloceanspaces.com/app/ethan-avatar.png","funding",false,"5.75 kW - Tesla","5.75 kW Panels | 5 kWh Batt, produced by Tesla. Expected Installation Date: Dec 17.","Redondo Beach, CA",false,false,null,null,null,true,513,290,33.834168,-118.380670,"2,200",null,null,null,null);
  }
