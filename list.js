$(function () {
    let users = [];
    $("#submit").on("click", function () {
        users.push({
            fname: firstName.value,
            lname: lastName.value,
            dob: DoB.value,
            depart: departing.value,
            arrive: arriving.value,
            dleave: leaveDate.value,
            dreturn: returnDate.value,
            bags: bags.values,
            meal: $("first-col input[name='meal']:checked").value,
            extras: $("first-col input[name='etxra']:checked").value,
            tripdurr:
                (new Date(leaveDate.value) - new Date(returnDate.value)) / 1000,
            cost: $("first-col input[name='etxra']:checked").length * 10,
        });
    });

    $("#search").on("input", function (e) {
        console.log(users);
        console.log($("#search").val());
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
            outdurration.value = user.tripdurr;
            outmeal.value = user.meal;
            outextras.value = user.extras;
            outcost.value = user.cost;
        }
    });
});
