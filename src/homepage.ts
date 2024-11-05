function info(classname?: string, classNametext?: string) {
    let _classname: string = classname? classname : "info";
    let _classnametext = classNametext? classNametext: "text";

    let info = document.createElement("div");
    info.className = _classname;

    let greeting = document.createElement("h6");
    greeting.className = "greeting";
    greeting.innerHTML = `<pre>"Hello, Welcome to my website"\n  - Luke T. Shouldes</pre>`

    let title = document.createElement("h3");
    title.innerHTML = `<u>Personal Info:</u>`;
    title.className = _classnametext;

    info.appendChild(greeting);
    info.appendChild(about(_classnametext));
    info.appendChild(title);
    info.appendChild(links_list());

    return info;
}

function about(classNametext: string) {
    let about = document.createElement("div");
    about.className = "about";

    let abouttxt = document.createElement("p");
    abouttxt.className = classNametext;
    abouttxt.innerHTML = `
    <h3><u>About:</u></h3>
    I'm a software/devops engineer with a BS in Computer science from <a target="_blank" href="https://cs.sonoma.edu/">Sonoma State University</a>. 
    I'm also availible for IT work for hire.
    `;

    about.appendChild(abouttxt);
    return about;
}

function links_list(classNametext: string = "text") {
    let links = document.createElement("ul");
    links.className = classNametext;

    let linkedin = link_item({path: "https://www.linkedin.com/in/luke-shoulders-b99b8a159/", className: classNametext, name: "linkedin"});
    let github = link_item({path: "https://github.com/Ellendren", className: classNametext, name: "github"});

    links.appendChild(linkedin);
    links.appendChild(github);

    return links;
}

function link_item({path, name, className = "text"} : {path: string, name?: string, className?: string}) {
    let li = document.createElement("li");
    li.className = className;

    let link = document.createElement("a");
    link.href = path;
    link.text = name? name : path;
    link.target= "_blank";

    li.appendChild(link);

    return li;
}

function canvas() {
    let canvas_div = document.createElement("div");
    canvas_div.className = "gears";
    
    let canvas = document.createElement("canvas");

    canvas_div.appendChild(canvas);
    return canvas_div;
}

function homepage(elemid: string = "start") {
    let homepage_div = document.getElementById(elemid);

    homepage_div?.append(info());
    homepage_div?.append(canvas());
}

export {homepage};