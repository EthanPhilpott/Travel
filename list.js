$(function () {
    let users = [];
    $("#submit").on("click", function () {
        let meal;
        $(`input[name="meal"]`).each(function () {
            if (this.checked) {
                meal = this.value;
            }
        });
        let extras = "";
        let cost = 300;
        $(`input[name="extra"]`).each(function () {
            if (this.checked) {
                extras += this.value + " ";
                cost += 10;
            }
        });
        console.log(meal);
        users.push({
            fname: firstName.value,
            lname: lastName.value,
            dob: DoB.value,
            depart: departing.value,
            arrive: arriving.value,
            dleave: leaveDate.value,
            dreturn: returnDate.value,
            bags: bags.value,
            meal: meal,
            extras: extras,
            tripdurr:
                (new Date(leaveDate.value) - new Date(returnDate.value)) / 1000,
            cost: cost,
            age: Math.floor(
                (Date.now() - new Date(DoB.value)) /
                    (1000 * 60 * 60 * 60 * 24 * 6)
            ),
        });
    });

    $("#search").on("input", function (e) {
        let user = users.find(
            (obj) => obj.fname + " " + obj.lname === $("#search").val()
        );
        if (user) {
            outfirstName.value = user.fname;
            outlastName.value = user.lname;
            outDoB.value = user.dob;
            outbags.value = user.bags;
            outdeparting.value = user.depart;
            outarriving.value = user.arrive;
            outleaveDate.value = user.dleave;
            outreturnDate.value = user.dreturn;
            outdurration.innerText = Math.abs(user.tripdurr);
            outmeal.value = user.meal;
            outextras.value = user.extras;
            outcost.innerText = user.cost;
            outage.innerText = user.age;
        }
    });

    $("#print").on("click", function () {
        let tempval = "";
        for (let val of users) {
            tempval += val.fname + " " + val.lname + "<br>";
        }
        $("#names").html(tempval);
    });
});
