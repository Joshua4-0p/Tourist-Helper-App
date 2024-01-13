var weekDaysArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

var calendarDay = document.querySelectorAll(".date .day");
var siteDayInfo = document.querySelector(".form-example");
var siteDayInfoCntr = document.querySelector(".form-example-cntr");


var index = 0;

while (index < Object.keys(obj).length && index != Object.keys(obj).length) {
    var clone = siteDayInfo.cloneNode(true);
    var siteName = clone.querySelector(".form-example label");
    var checkBtn = clone.querySelector(".form-check-input");
    checkBtn.setAttribute("id", "name" + (index + 1));
    siteName.setAttribute("for", "name" + (index + 1));
    siteName.innerText = Object.keys(obj)[index];
    clone.classList.remove("hidden");
    siteDayInfoCntr.insertBefore(clone, null);
    index++;
}


var currIndex;
var targetDay;
var nodes
var selectedMonth, selectedYear, selectedWeekDay;


for (var i = 0; i < 31; i++) {
   calendarDay[i].addEventListener("click", function (e) {
        var selectedDay = []
        targetDay = e.target;
        selectedDay.push(targetDay.innerText);
        console.log(selectedDay);
        currIndex = Array.prototype.indexOf.call(calendarDay, targetDay)
        calendarDay[currIndex].classList.add("today_styles");
        selectedMonth = montharr[currMonth];
        selectedYear = currYear;
        
            for (i = selectedDay.length-1; i >= 0; i--) {    //iterating through selected days
                
                selectedWeekDay = weekDaysArr[new Date(currYear, currMonth, selectedDay[i]).getDay()]
                var siteOrderInfo = document.querySelector(".site-order");
            }
            //     //Order summary scripting begins here
            //     var checkBtn = document.querySelectorAll(".form-check-input");
            //     var orderSummaryInfo = document.querySelector(".order-summary");
            //     var siteOrder = document.querySelector(".site-order");
            //     var orderSummaryTouristSite = document.querySelector(".order-site-name");
            //     var siteDateDetails = document.querySelector(".col1")
        
            //     var targetBtn;
            //     var currIndex1;
        
            //     for (i = 0; i < checkBtn.length; i++) {
            //         checkBtn[i].addEventListener("change", function (e) {       //event listener for the check button
            //             targetBtn = e.target;
            //             currIndex1 = Array.prototype.indexOf.call(checkBtn, targetBtn);
        
            //             if (checkBtn[currIndex1].checked) {
            //                 var siteNameChecked = targetBtn.parentNode.querySelector("label"); //getting site name affiliated to checkbox
            //                 console.log(siteNameChecked);
            //                 orderSummaryInfo.classList.remove("hidden");
        
            //                 orderSummaryInfo.querySelector(".site-date .day").innerText = selectedWeekDay
            //                 orderSummaryInfo.querySelector(".site-date .month").innerText = selectedMonth
            //                 orderSummaryInfo.querySelector(".site-date .date").innerText = selectedDay
            //                 orderSummaryInfo.querySelector(".site-date .year").innerText = selectedYear
        
            //                 var newNode = orderSummaryTouristSite.cloneNode(false);
            //                 newNode.innerText = siteNameChecked.innerText;
            //                 siteDateDetails.insertBefore(newNode, null);
            //                 newNode.classList.remove("hidden");
            //                 siteOrder.classList.remove("hidden");
        
            //                 var totalSection = document.querySelector(".total");
            //                 console.log(totalSection)
            //                 totalSection.classList.remove("hidden");
            //             }
            //             else {
            //                 // var package_id_index = checkBtn[currIndex1].parentNode.parentNode.querySelector(".package_id_index").innerText;
            //                 // var clone1 = orderSummaryInfo.querySelector("#order" + package_id_index);
            //                 var num = document.querySelector(".num").innerText;
            //                 var price = document.querySelector(".price").innerText;
            //                 // OrderSummary.package_counts[package_id_index] = 0;
            //                 clone1.remove();
            //                 var total = document.querySelector(".total-pricing");
            //                 var initTotal = parseInt(total.innerText);
            //                 total.innerText = initTotal - parseInt(num) * parseInt(price.slice(4));
        
            //             }
            //         })
            //     }
        
        
            //     //             clone1.setAttribute('id', `order${OrderSummary.package_ids.length - 1}`)
        
        
            //     document.querySelector(".plus").addEventListener("click", function () {
        
            //         var num = document.querySelector(".num");
            //         var a = parseInt(num.innerText);
            //         a++;
            //         // OrderSummary.package_counts[parseInt(checkBtn[currIndex1].parentNode.parentNode.querySelector(".package_id_index").innerText)] = a;
            //         a = (a < 10) ? "0" + a : a;
            //         num.innerText = a;
            //         var price = document.querySelector(".price").innerText;
            //         var total = document.querySelector(".total-pricing");
            //         var initTotal = parseInt(total.innerText);
            //         total.innerText = initTotal + parseInt(price.slice(4));
            //     })
        
            //     document.querySelector(".minus").addEventListener("click", function () {
            //         var num = document.querySelector(".num");
            //         var a = parseInt(num.innerText);
            //         if (a > 1) {
            //             a--;
            //             // OrderSummary.package_counts[parseInt(checkBtn[currIndex1].parentNode.parentNode.querySelector(".package_id_index").innerText)] = a;
            //             a = (a < 10) ? "0" + a : a;
            //             num.innerText = a;
            //             var price = document.querySelector(".price").innerText;
            //             var total = document.querySelector(".total-pricing");
            //             var initTotal = parseInt(total.innerText);
            //             total.innerText = initTotal - parseInt(price.slice(4));
            //         }
        
            //     })
        
            //     //             orderSummaryInfo.insertBefore(clone1, null);
            //     //             var price = clone1.querySelector(".price").innerText;
            //     //             var total = document.querySelector(".total-pricing");
            //     //             var initTotal = parseInt(total.innerText);
            //     //             total.innerText = initTotal + parseInt(price.slice(4));
            //     //         }
        
            //     //         
        
        
        
        
        
        
            // }
    });

    
}










