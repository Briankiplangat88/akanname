function akanGenerate(){
    var genderRadio = document.querySelectorAll('input[name="gender"]');
    let ChosenValue;
    var inputDate = document.getElementById('bdate').value;
    var inputMonth= document.getElementById('bdat').value;
    var inputYear = document.getElementById('bdae').value;
    var century = parseInt(inputYear.slice(0, 2));
    var maleAkan = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
    var femaleAkan = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
    var days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    const submit = document.querySelector('#submit');
        // checking for the gender
        for (const chosenGender of genderRadio) {
            if(chosenGender.checked) {
                chosenValue = chosenGender.value;
                break;
            }
        }
        // Checking for the persons day of birth
        if(inputDate<=0 || inputDate>30){
            alert("Please enter the Correct date");
            } 
            else if(inputMonth<=0 || inputMonth>12){
            alert("Please enter the correct Month");
            }
            else if(inputYear<999 || inputYear > new Date().getFullYear()){
            alert("please enter the correct year");
            }
            else {
            var trueBirthdayIndex = parseInt((((century/4) - 2*century-1)+((5*inputYear/4))+((26*(inputMonth+1)/10))+inputDate)%7);
            // end of check date. Begin matching Akan names and displaying.
                if (chosenValue == 'male'){
                    // var birthday = prompt('Enter the date:');
                    if (trueBirthdayIndex == 0){
                        alert("Your Akan Name is: " + maleAkan[0] + " and you were born on "+days[0])
                    }
                    else if (trueBirthdayIndex == 1){
                        alert("Your Akan Name is: " + maleAkan[1] + " and you were born on "+days[1])
                    }
                    else if (trueBirthdayIndex == 2){
                        alert("Your Akan Name is: " + maleAkan[2] + " and you were born on "+days[2])
                    }
                    else if (trueBirthdayIndex == 3){
                        alert("Your Akan Name is: " + maleAkan[3] + " and you were born on "+days[3])
                    }
                    else if (trueBirthdayIndex == 4){
                        alert("Your Akan Name is: " + maleAkan[4] + " and you were born on "+days[4])
                    }
                    else if (trueBirthdayIndex == 5){
                        alert("Your Akan Name is: " + maleAkan[5] + " You were born on "+days[5])
                    }
                    else if (trueBirthdayIndex == 6){
                        alert("Your Akan Name is: " + maleAkan[6] + " and you were born on "+days[6])
                    }
                    else {
                        alert("Please check you date and try again")
                    }
                }
                else{
                    if (trueBirthdayIndex == 0){
                        alert("Your Akan Name is: " + femaleAkan[0] + " and you were born on "+days[0])
                    }
                    else if (trueBirthdayIndex == 1){
                        alert("Your Akan Name is: " + femaleAkan[1] + " and you were born on "+days[1])
                    }
                    else if (trueBirthdayIndex == 2){
                        alert("Your Akan Name is: " + femaleAkan[2] + " and you were born on "+days[2])
                    }
                    else if (trueBirthdayIndex == 3){
                        alert("Your Akan Name is: " + femaleAkan[3] + " and you were born on "+days[3])
                    }
                    else if (trueBirthdayIndex == 4){
                        alert("Your Akan Name is: " + femaleAkan[4] + " and you were born on "+days[4])
                    }
                    else if (trueBirthdayIndex == 5){
                        alert("Your Akan Name is: " + femaleAkan[5] + " and you were born on "+days[5])
                    }
                    else if(trueBirthdayIndex == 6){
                        alert(femaleAkan[6] + " and you were born on "+days[6])
                    }
                    else {
                        alert("Please check Your date and try again")
                    }
                }
        }
}
