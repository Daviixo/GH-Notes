function copyText() {
    var cName = document.getElementById("custName").value;
    var cEmail = document.getElementById("custEmail").value;
    var cPhone = document.getElementById("custPhone").value;
    var cID = document.getElementById("custID").value;
    var cPermissions = document.getElementById("custPermissions").value;

    var e = document.getElementById("optionPin");
    var resultPin = e.options[e.selectedIndex].text;

    var cIssue = document.getElementById("custIssue").value;
    var cGHPhoneExt = document.getElementById("custGHPhoneExt").value;
    var cTroubleshooting = document.getElementById("custTroubleshooting").value;

    var i = document.getElementById("custIssueResolved");
    var resultIssueResolved = e.options[e.selectedIndex].text;

    var cAdditionalNotes = document.getElementById("custAdditionalNotes").value;

    document.getElementById("temp").value =
        "---Caller's Contact information---" +
        "\n" +
        "Caller's Name: " +
        cName +
        "\n" +
        "Caller's Email: " +
        cEmail +
        "\n" +
        "Caller's call back phone number: " +
        cPhone +
        "\n" +
        "\n" +
        "Customer ID: " +
        "\n" +
        cID +
        "\n" +
        "\n" +
        "Permissions?: " +
        "\n" +
        cPermissions +
        "\n" +
        "\n" +
        "Primary Pin / Billing Info Verified (Yes/No): " +
        "\n" +
        resultPin +
        "\n" +
        "\n" +
        "Summary of Issue/Request:" +
        "\n" +
        cIssue +
        "\n" +
        "\n" +
        "Phone number/Extension (if applicable):" +
        "\n" +
        cGHPhoneExt +
        "\n" +
        "\n" +
        "Troubleshooting/Replication Steps:" +
        "\n" +
        cTroubleshooting +
        "\n" +
        "\n" +
        "Resolution/Escalation(Was issue resolved or escalated?)" +
        "\n" +
        resultIssueResolved +
        "\n" +
        "\n" +
        "Do you have any additional notes?" +
        "\n" +
        cAdditionalNotes +
        "\n" +
        "----------------------------";

    var copyText = document.getElementById("temp");

    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");

    console.log("Copy button was clicked. All actions worked accordingly!")
    alert("Text copied successfully! Remember to either refresh or reset ;)");

}