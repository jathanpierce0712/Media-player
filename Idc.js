<canvas id="plotting_canvas" width="428" height="683" style="cursor: crosshair; position: fixed;"></canvas>
      
<script src="./js/main.js"></script><canvas width="11px" height="781px" id="renderCanvas" style="display:none;"></canvas>
<script src="./node_modules/jquery/dist/jquery.min.js"></script>
<script src="./js/calibration.js"></script>
<script src="./js/precision_calculation.js"></script>
<script src="./js/precision_store_points.js"></script>
<script src="./node_modules/sweetalert/dist/sweetalert.min.js"></script> 
<nav id="webgazerNavbar" class="navbar navbar-default navbar-fixed-top">
  <div class="container-fluid">
    <div class="navbar-header">
      <!-- The hamburger menu button -->
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
        <!-- Accuracy -->
        <li id="Accuracy"><a>Not yet Calibrated</a></li>
        <li onclick="Restart()"><a href="#">Recalibrate</a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li><button class="helpBtn" data-toggle="modal" data-target="#helpModal"><a href="#" data-toggle="modal" data-targert="#"><span class="glyphicon glyphicon-cog"></span> Help</a></button></li>
      </ul>
    </div>
  </div>
</nav>
<!-- Calibration points -->
<div class="calibrationDiv">
    <input class="Calibration" id="Pt1" style="display: block; background-color: rgb(255, 0, 0); opacity: 0.2;" type="button">
    <input class="Calibration" id="Pt2" style="display: block; background-color: rgb(255, 0, 0); opacity: 0.2;" type="button">
    <input class="Calibration" id="Pt3" style="display: block; background-color: rgb(255, 0, 0); opacity: 0.2;" type="button">
    <input class="Calibration" id="Pt4" style="display: block; background-color: rgb(255, 0, 0); opacity: 0.2;" type="button">
    <input class="Calibration" id="Pt5" style="display: none; background-color: rgb(255, 0, 0); opacity: 0.2;" type="button">
    <input class="Calibration" id="Pt6" style="display: block; background-color: rgb(255, 0, 0); opacity: 0.2;" type="button">
    <input class="Calibration" id="Pt7" style="display: block; background-color: rgb(255, 0, 0); opacity: 0.2;" type="button">
    <input class="Calibration" id="Pt8" style="display: block; background-color: rgb(255, 0, 0); opacity: 0.2;" type="button">
    <input class="Calibration" id="Pt9" style="display: block; background-color: rgb(255, 0, 0); opacity: 0.2;" type="button">
</div>

<!-- Modal -->
<div id="helpModal" class="modal fade" role="dialog" style="display: none;">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-body">
        <img src="images/webgazer.png" alt="webgazer demo instructions" width="100%" height="100%">
      </div>
      <div class="modal-footer">
        <button id="closeBtn" type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" data-dismiss="modal" onclick="Restart()">Calibrate</button>
      </div>
    </div>

  </div>
</div>

<!-- Latest compiled JavaScript -->
<script src="./js/resize_canvas.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bo"use strict";var sampleSizeCalculator=angular.module("SampleSizeCalculator",[]).controller("ConversionRateController",["$scope",function(a){var b;a.tipText={confidenceLevel:"The confidence level is the probability of not making a Type I error (false positive) if there is no difference in conversion rate between the offers being compared. The minimum value recommended is 95%.",statisticalPower:"The statistical power is the probability that the test will detect a certain lift if it is present. For example, for the pre-populated values there is a 80% chance of detecting a lift of 5% if one has 47,942 visitors in each group. If the actual lift is lower than 5% there is a lower than 80% probability of detecting it and if the actual lift is higher than 5% the probability of detecting it is larger than 80%. We recommend a statistical power of 80%.",baselineConversionRate:"The baseline conversion rate is the approximate conversion rate of the control offer. If it is not known in advance based on experience, one can run the test for a day or so and use the conversion rate over this timeperiod.",weeksToComplete:"The weeks to complete test is rounded up to the nearest whole week because it is a best practice to run tests for whole weeks to avoid day-of-week effects influencing the results.",bonferroniCorrection:"More than 1 alternative offer: If the Bonferroni correction is activated the confidence level for each offer comparison is adjusted such that the total effective confidence level for all the offer comparisons is equal to the specified confidence level. When evaluating the test results the Bonferroni corrected confidence level should be used instead of the original confidence level."},a.inputs={confidenceLevel:95,statisticalPower:80,baselineConversionRate:11.8,totalDailyVisitors:1e4,numberOfOffers:5,isBonferroniCorrected:!1,customLift:17.5},a.inputsAsDecimal={confidenceLevel:a.inputs.confidenceLevel/100,statisticalPower:a.inputs.statisticalPower/100,baselineConversionRate:a.inputs.baselineConversionRate/100,customLift:a.inputs.customLift/100},a.$watch("inputs.confidenceLevel",function(){a.inputsAsDecimal.confidenceLevel=a.inputs.confidenceLevel/100}),a.$watch("inputs.statisticalPower",function(){a.inputsAsDecimal.statisticalPower=a.inputs.statisticalPower/100}),a.$watch("inputs.baselineConversionRate",function(){a.inputsAsDecimal.baselineConversionRate=a.inputs.baselineConversionRate/100}),a.$watch("inputs.customLift",function(){a.inputsAsDecimal.customLift=a.inputs.customLift/100}),a.liftValues=[.05,.1],a.bonferroniCorrection=function(){return a.inputs.isBonferroniCorrected?1-(1-a.inputsAsDecimal.confidenceLevel)/(a.inputs.numberOfOffers-1):0},b=function(a){var b,c,d,e=-39.6968302866538,f=220.946098424521,g=-275.928510446969,h=138.357751867269,i=-30.6647980661472,j=2.50662827745924,k=-54.4760987982241,l=161.585836858041,m=-155.698979859887,n=66.8013118877197,o=-13.2806815528857,p=-.00778489400243029,q=-.322396458041136,r=-2.40075827716184,s=-2.54973253934373,t=4.37466414146497,u=2.93816398269878,v=.00778469570904146,w=.32246712907004,x=2.445134137143,y=3.75440866190742,z=.02425,A=1-z;return 0>a||a>1?d=0:z>a?(b=Math.sqrt(-2*Math.log(a)),d=(((((p*b+q)*b+r)*b+s)*b+t)*b+u)/((((v*b+w)*b+x)*b+y)*b+1)):A>=a?(b=a-.5,c=b*b,d=(((((e*c+f)*c+g)*c+h)*c+i)*c+j)*b/(((((k*c+l)*c+m)*c+n)*c+o)*c+1)):(b=Math.sqrt(-2*Math.log(1-a)),d=-(((((p*b+q)*b+r)*b+s)*b+t)*b+u)/((((v*b+w)*b+x)*b+y)*b+1)),d},a.confidenceLevelThreshold=function(){return b(a.inputs.isBonferroniCorrected?1-(1-a.bonferroniCorrection())/2:1-(1-a.inputsAsDecimal.confidenceLevel)/2)},a.statisticalPowerThreshold=function(){return b(a.inputsAsDecimal.statisticalPower)},a.dailyVisitorsPerOffer=function(){return a.inputs.totalDailyVisitors/a.inputs.numberOfOffers},a.absoluteDifferenceInConversionRate=function(b){return a.inputsAsDecimal.baselineConversionRate*b},a.conversionRateOfAlternative=function(b){return a.inputsAsDecimal.baselineConversionRate*(1+b)},a.sampleSizePerOfferInVisitors=function(b){var c=a.inputsAsDecimal.baselineConversionRate,d=a.confidenceLevelThreshold(),e=a.statisticalPowerThreshold();return 2*((c*(1-c)+(1+b)*c*(1-(1+b)*c))/2)*Math.pow(d+e,2)/Math.pow(c-c*(1+b),2)},a.sampleSizePerOfferInOffers=function(b){return a.sampleSizePerOfferInVisitors(b)*a.inputsAsDecimal.baselineConversionRate},a.daysToCompleteTest=function(b){var c=a.inputs.totalDailyVisitors/a.inputs.numberOfOffers;return a.sampleSizePerOfferInVisitors(b)/c},a.weeksToCompleteTest=function(b){var c=7;return a.daysToCompleteTest(b)/c}}]).controller("RPVController",["$scope",function(a){var b;a.tipText={confidenceLevel:"The confidence level is the probability of not making a Type I error (false positive) if there is no difference in conversion rate between the offers being compared. The minimum value recommended is 95%.",statisticalPower:"The statistical power is the probability that the test will detect a certain lift if it is present. For example, for the pre-populated values there is a 80% chance of detecting a lift of 5% if one has 47,942 visitors in each group. If the actual lift is lower than 5% there is a lower than 80% probability of detecting it and if the actual lift is higher than 5% the probability of detecting it is larger than 80%. We recommend a statistical power of 80%.",totalSalesControl:"Total Sales can be found in the CSV download from Adobe Target.",sumOfSalesSquaredControl:"Sum of Sales Squared can be found in the CSV download from Adobe Target.",numVisitorsControl:"Number of Visitors can be found in the CSV download from Adobe Target.",weeksToComplete:"The weeks to complete test is rounded up to the nearest whole week because it is a best practice to run tests for whole weeks to avoid day-of-week effects influencing the results.",bonferroniCorrection:"More than 1 alternative offer: If the Bonferroni correction is activated the confidence level for each offer comparison is adjusted such that the total effective confidence level for all the offer comparisons is equal to the specified confidence level. When evaluating the test results the Bonferroni corrected confidence level should be used instead of the original confidence level."},a.inputs={confidenceLevel:95,statisticalPower:80,totalSalesControl:295e3,sumOfSalesSquaredControl:25e7,numVisitorsControl:18e3,totalDailyVisitors:1e4,numberOfOffers:5,isBonferroniCorrected:!1,customLift:8},a.inputsAsDecimal={confidenceLevel:a.inputs.confidenceLevel/100,statisticalPower:a.inputs.statisticalPower/100,customLift:a.inputs.customLift/100},a.$watch("inputs.confidenceLevel",function(){a.inputsAsDecimal.confidenceLevel=a.inputs.confidenceLevel/100}),a.$watch("inputs.statisticalPower",function(){a.inputsAsDecimal.statisticalPower=a.inputs.statisticalPower/100}),a.$watch("inputs.customLift",function(){a.inputsAsDecimal.customLift=a.inputs.customLift/100}),a.liftValues=[.05,.1],a.bonferroniCorrection=function(){return a.inputs.isBonferroniCorrected?1-(1-a.inputsAsDecimal.confidenceLevel)/(a.inputs.numberOfOffers-1):0},b=function(a){var b,c,d,e=-39.6968302866538,f=220.946098424521,g=-275.928510446969,h=138.357751867269,i=-30.6647980661472,j=2.50662827745924,k=-54.4760987982241,l=161.585836858041,m=-155.698979859887,n=66.8013118877197,o=-13.2806815528857,p=-.00778489400243029,q=-.322396458041136,r=-2.40075827716184,s=-2.54973253934373,t=4.37466414146497,u=2.93816398269878,v=.00778469570904146,w=.32246712907004,x=2.445134137143,y=3.75440866190742,z=.02425,A=1-z;return 0>a||a>1?d=0:z>a?(b=Math.sqrt(-2*Math.log(a)),d=(((((p*b+q)*b+r)*b+s)*b+t)*b+u)/((((v*b+w)*b+x)*b+y)*b+1)):A>=a?(b=a-.5,c=b*b,d=(((((e*c+f)*c+g)*c+h)*c+i)*c+j)*b/(((((k*c+l)*c+m)*c+n)*c+o)*c+1)):(b=Math.sqrt(-2*Math.log(1-a)),d=-(((((p*b+q)*b+r)*b+s)*b+t)*b+u)/((((v*b+w)*b+x)*b+y)*b+1)),d},a.confidenceLevelThreshold=function(){return b(a.inputs.isBonferroniCorrected?1-(1-a.bonferroniCorrection())/2:1-(1-a.inputsAsDecimal.confidenceLevel)/2)},a.statisticalPowerThreshold=function(){return b(a.inputsAsDecimal.statisticalPower)},a.dailyVisitorsPerOffer=function(){return a.inputs.totalDailyVisitors/a.inputs.numberOfOffers},a.revenuePerVisitor=function(){return a.inputs.totalSalesControl/a.inputs.numVisitorsControl},a.rpvVariance=function(){var b=a.inputs.sumOfSalesSquaredControl,c=a.inputs.numVisitorsControl,d=a.inputs.totalSalesControl;return b/c-Math.pow(d/c,2)},a.absoluteDifferenceInRpv=function(b){return a.revenuePerVisitor()*b},a.rpvOfAlternative=function(b){return a.revenuePerVisitor()*(1+b)},a.sampleSizePerOfferInVisitors=function(b){var c=a.rpvVariance(),d=a.confidenceLevelThreshold(),e=a.statisticalPowerThreshold(),f=a.revenuePerVisitor()*b;return 2*c*Math.pow(d+e,2)/Math.pow(f,2)},a.sampleSizePerOfferInOffers=function(b){return a.sampleSizePerOfferInVisitors(b)*a.inputsAsDecimal.baselineConversionRate},a.daysToCompleteTest=function(b){var c=a.inputs.totalDailyVisitors/a.inputs.numberOfOffers;return a.sampleSizePerOfferInVisitors(b)/c},a.weeksToCompleteTest=function(b){var c=7;return a.daysToCompleteTest(b)/c}}]);sampleSizeCalculator.filter("percentage",["$filter",function(a){return function(b,c){return a("number")(100*b,c)+"%"}}]),sampleSizeCalculator.filter("currency",["$filter",function(a){return function(b,c){return"$"+a("number")(b,c)}}]),sampleSizeCalculator.filter("roundUp",["$filter",function(){return function(a){return Math.ceil(a)}}]),sampleSizeCalculator.directive("float",function(){return{require:"ngModel",link:function(a,b,c,d){d.$parsers.unshift(function(a){return parseFloat(a,10)})}}});otstrap.min.js"></script>


<canvas width="11px" height="781px" id="renderCanvas" style="display:none;"></canvas><div class="swal-overlay" tabindex="-1">
<div class="swal-modal" role="dialog" aria-modal="true"><div class="swal-title">Calibration</div><div class="swal-text">Please click on each of the 9 points on the screen. You must click on each point 5 times till it goes yellow. This will calibrate your eye movements.</div><div class="swal-footer"><div class="swal-button-container">

<button class="swal-button swal-button--confirm">OK</button>

<div class="swal-button__loader">
<div></div>
<div></div>
<div></div>
</div>

</div></div></div></div><video id="webgazerVideoFeed" autoplay="" style="display: block; position: fixed; top: 0px; left: 0px; margin: 0px; background: rgb(34, 34, 34) none repeat scroll 0% 0%;" src="blob:https://webgazer.cs.brown.edu/c574b638-7764-4537-8406-d5290d419641" width="320" height="240"></video><canvas id="webgazerVideoCanvas" style="display: none;" width="320" height="240"></canvas><div style="position: fixed; z-index: 99999; left: -5px; top: -5px; width: 10px; height: 10px; background: red none repeat scroll 0% 0%; display: block; border-radius: 100%; opacity: 0.7; transform: translate3d(118px, 136px, 0px);"></div><canvas id="overlay" style="position: fixed; top: 0px; left: 0px; margin: 0px;" width="320" height="240"></canvas><face_overlay id="faceOverlay" style="position: fixed; top: 59px; left: 107px; border: medium solid red;"></face_overlay>

<script src="https://webgazer.cs.brown.edu/webgazer.js" type="text/js"></script>
<script src="https://webgazer.cs.brown.edu/js/calibration.js" type="text/js"></script>
<script src="https://webgazer.cs.brown.edu/js/main.js" type="text/js"></script>
<script src="https://webgazer.cs.brown.edu/js/precision_calculation.js" type="text/js"></script>
<script src="https://webgazer.cs.brown.edu/js/precision_store_points.js" type="text/js"></script>
<script src="https://webgazer.cs.brown.edu/js/resize_canvas.js" type="text/js"></script>

<script src="https://webgazer.cs.brown.edu/node_modules/jquery/dist/jquery.min.js"></script>
<script src="https://webgazer.cs.brown.edu/node_modules/sweetalert/dist/sweetalert.min.js"></script>