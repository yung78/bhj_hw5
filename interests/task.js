const interest = document.querySelectorAll(".interest");

for (let el of interest) {
    if (el.childElementCount > 1) {
        let mainCheck = el.querySelector(".interest__check");

        mainCheck.addEventListener("change", () => {
            let secondaryChecks = mainCheck.parentElement.nextElementSibling.querySelectorAll(".interest__check");

            for (let secCheck of secondaryChecks) {
                if (mainCheck.checked == true) {
                    secCheck.checked = true;
                } else {
                    secCheck.checked = false;
                };
            };  
        }); 
    };
};

for (let el of interest) {
    if (el.parentElement.className == "interests interests_active") {
        let deepCheck = el.querySelector(".interest__check");

        deepCheck.addEventListener("change", () => {
            let counter = 0;

            for (let box of el.parentElement.querySelectorAll(".interest__check")) {
                if (box.checked == true) {
                    counter += 1;
                };

                if (counter == 0) {
                    el.parentElement.parentElement.querySelector(".interest__check").checked = false;
                    el.parentElement.parentElement.querySelector(".interest__check").indeterminate = false;
                } else if (counter == el.parentElement.querySelectorAll(".interest__check").length) {
                    el.parentElement.parentElement.querySelector(".interest__check").checked = true;
                    el.parentElement.parentElement.querySelector(".interest__check").indeterminate = false;
                } else {
                    el.parentElement.parentElement.querySelector(".interest__check").checked = false;
                    el.parentElement.parentElement.querySelector(".interest__check").indeterminate = true;
                };
            };
        });
    };
};

