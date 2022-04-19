function submit() {
    document.getElementsByName("rate").forEach(data => {
        if (data.checked) {
            userRating = data.id;
            document.getElementById("content-1").classList.add("no-selected");
            document.getElementById("content-2").classList.remove("no-selected");

            document.getElementById("user-rate").innerHTML = userRating;
        }
        else{
            console.log("XD")
        }
    })


}