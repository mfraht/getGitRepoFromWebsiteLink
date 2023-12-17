function getRepo() {
  let webPageLink = document.getElementById("webpage").value
  if (webPageLink == ""){
    alertMessage = "Please Enter the GitHub Web Page Link!"
    showAlert(alertMessage);
    return;
  }
  userName = webPageLink.split("//")[1].split(".")[0];
  //   console.log("webPageLink", userName);
  repoName = webPageLink.split("//")[1].split("/")[1];
  //   console.log("repoName", repoName);
  repoLink = "https://github.com/" + userName + "/" + repoName + ".git";
  //   console.log("repoLink", repoLink);
  var repoLinkElement = document.createElement("h2");
  // var repoLinkElement = document.getElementById("repoLink");

  repoLinkElement.id = "repoLink";
  repoLinkElement.innerHTML =
    "<br>The webpage link is: " +
    webPageLink +
    "<br><br>" +
    "The Repo Link is: " +
    "<span style='color: blue;'>" +
    repoLink +
    "</span><br>";
  document.getElementById("repoLinkSpan").innerHTML = repoLinkElement.innerHTML;
}

function copyRepoLink() {
  // Create a temporary input element
  if (repoLink != undefined){
    var tempInput = document.createElement("input");
    // Set its value to the repoLink
    tempInput.value = repoLink;
    // Append it to the document
    document.body.appendChild(tempInput);
    // Select its content
    tempInput.select();
    // Execute the copy command
    document.execCommand("copy");
    // Remove it from the document
    document.body.removeChild(tempInput);
    // Alert the user that the text has been copied (optional)
    alertMessage = "Repo Link copied to clipboard!"
    showAlert(alertMessage);
}
else{
    alertMessage = "Please Enter the GitHub Web Page Link!"
    showAlert(alertMessage);
    return;
}
}

function showAlert(alertMessage) {
    var messageDiv = document.createElement("div");
    messageDiv.innerHTML = alertMessage;
    messageDiv.style.cssText =
        "position: fixed; top: 300px; left: 50%; transform: translateX(-50%); background: #4CAF50; color: white; padding: 20px; border-radius: 5px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);";

    // Append it to the document
    document.body.appendChild(messageDiv);

    // Close the message after 5 seconds
    setTimeout(function () {
        // Remove the message from the document
        document.body.removeChild(messageDiv);
    }, 2000);
}

function clearPage() {
    let webPageLink = document.getElementById("webpage")
    let repoLinkSpan = document.getElementById("repoLinkSpan")
    webPageLink.value = null
    repoLinkSpan.innerHTML = null
    repoLink = null

}
