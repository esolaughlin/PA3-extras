var tweets = ["Hey there, this is Big Al", "It's me again", "Hope you are enjoying 321"];

setGreets = function(){
    var html = "<ul>";
    tweets.forEach((tweet)=>{
        html += "<li><div class=\"avatar\"></div><spann>" + tweet + "</spann></li>";
    })
    html += "</ul>";

    document.getElementById("greets").innerHTML = html;
}

addPost = function(){
    let postText = document.getElementById("post").value;
    tweets.push(postText);
    setGreets();
}

handleOnLoad = function(){
    displayGill();
}

displayGill = function(){
    const getGillApiUrl = "https://localhost:8001/api/gill";
    fetch(getGillApiUrl).then(function(response){
        return response.json();
    }).then(function(json){
        console.log(json);
        let html = "<h1>Your current gill amount is "+ json + "</h1>";
        document.getElementById("currgill").innerHTML = html;
    }).catch(function(error){
        console.log(error);
    })

}

