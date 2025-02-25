$(function () {
    var bar = '';
    bar += '<!-- Navbar -->';
    bar += ' <nav class="navbar navbar-expand-lg navbar-dark bg-dark">';
    bar += '    <a class="navbar-brand" href="https://yourstanmay.github.io">';
    bar += '        <img style="width: 40px; height: 40px; margin-right: 8px; border-radius: 50%;"';
    bar += '            src="https://avatars0.githubuserContent.com/u/61911537?s=400&u=7a9a3aaaa1af68f89f2e6b04d3fd421c435f4b59&v=4">YoursTanmay Exam';
    bar += '    </a>';
    bar += '    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"';
    bar += '        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">';
    bar += '        <span class="navbar-toggler-icon"></span>';
    bar += '    </button>';
    bar += '    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">';
    bar += '        <div class="navbar-nav mx-auto">'; // ✅ Centering the Exam Title
    bar += '            <b class="nav-item nav-link neon-nav-hover text-center">👨‍💻 SAP Commerce Developer Exam</b>';
    bar += '        </div>';
    bar += '        <div class="navbar-nav">';  // ✅ Right align buttons with spacing
    bar += `            <button class="btn-success ml-3" id="result">Score: 0/${questions.length}</button>`;
    bar += '            <button class="neon-nav-hover ml-3" type="button" onclick="location.reload()">Reset</button>';
    bar += '        </div>';
    bar += '    </div>';
    bar += '</nav>';
    
    $("#examnavbar").html(bar);

    var id = getValueByName("id");
    $("#" + id).addClass("active");
});

function getValueByName(name) {
    var url = document.getElementById('nav-bar').getAttribute('src');
    var param = new Array();
    if (url.indexOf("?") != -1) {
        var source = url.split("?")[1];
        items = source.split("&");
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            var parameters = item.split("=");
            if (parameters[0] == "id") {
                return parameters[1];
            }
        }
    }
}
