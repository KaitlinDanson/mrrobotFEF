/* TODO: Move To js file */
/*********************************************************
 *
 *   Test Checkboxes/Radio Buttons Script
 *
 *********************************************************/
 // loop through each form and handle submit event
 for (var i=0;i<document.forms.length;i++) {
   var form = document.forms[i];
   form.addEventListener('submit', function(e){
     e.preventDefault();
     var results = '';
    // loop through all checkboxes to see if checked
    var checkboxes = form.querySelectorAll("input[type='checkbox']");
    for(var k = 0; k < checkboxes.length; k++) {
      results += checkboxes[k].id + '=' + checkboxes[k].checked + '\n';
    }
    // loop through all radio butotns to display value
    var radiobuttons = form.querySelectorAll("input[type='radio']:checked");
    for(var m = 0; m < radiobuttons.length; m++) {
      results += radiobuttons[m].name + '=' + radiobuttons[m].value + '\n';
    }
    // console.log instead of alert results
    console.log(results);
  });
}




function mySearch() {
    // search for robots
    var input, filter, ul, li, a, i;
input = document.getElementById("searchbox1");
    filter = input.value.toUpperCase();
    ul = document.getElementById("robotlist");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}


var robo = document.querySelector('#robo1').createShadowRoot();
/*Step1*/
let prdTemplate = document.querySelector('#producttemplate');
/*Step2*/
let clone = document.importNode(prdTemplate.content, true);
/*Step3*/

clone.querySelector('#pimage').src = 'images/roboDog.png';
clone.querySelector('#lblName').textContent = 'R.E.T';

/*Step4*/
robo.appendChild(clone);
let userTemplate = document.querySelector('#user');
let userClone = document.importNode(userTemplate.content, true);
document.body.appendChild(userClone);
  let addressTemplate = document.querySelector('#address');
  let addressClone = document.importNode(addressTemplate.content, true);
document.body.appendChild(addressClone);
