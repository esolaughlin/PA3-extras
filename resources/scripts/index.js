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

