class DegreeCert {
    institution: string;
    title: string;
    date: string;

    public constructor(institution: string="", title: string="", date: string=""){
        this.institution = institution;
        this.title = title;
        this.date = date
    }

    public degree_str() {
        let degree_str = this.institution.length == 0? this.institution : `<u><b>${this.institution}</b></u><br />`;
        degree_str = degree_str + (this.title.length == 0? this.title : `${this.title}, `);
        degree_str = degree_str + (this.date.length == 0? this.date : `${this.date}`) + `<br>`;

        return degree_str;
    }

    public cert_str() {
        let cert_str = this.title.length == 0? this.title :  `<u><b>${this.title}</b></u><br />`;
        cert_str += this.institution.length == 0?  this.institution : `${this.institution}, `;
        cert_str += (this.date.length == 0? this.date : `${this.date}`) + `<br>`;

        return cert_str;
    }
}

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
    info.appendChild(edu());

    return info;
}

function about(classNametext: string) {
    let about = document.createElement("div");
    about.className = "about";

    let abouttxt = document.createElement("p");
    abouttxt.className = classNametext;
    abouttxt.innerHTML = `
    <h3 style="margin-bottom: 1%"><u>About:</u></h3>
    I'm a software/devops engineer with a BS in Computer science from <a target="_blank" href="https://cs.sonoma.edu/">Sonoma State University</a>. 
    I'm also availible for IT work for hire.
    `;

    about.appendChild(abouttxt);
    return about;
}

function edu(classNametext: string ="edu") {
    let edu = document.createElement("div");
    edu.className = classNametext;
    
    let edu_h = document.createElement("h3", );
    edu_h.innerHTML = "<u>Education and training:</u>";
    edu_h.style.marginBottom = "0px";
    edu.appendChild(edu_h);

    let edu_txt = document.createElement("ul");
    edu_txt.style.margin = "0px";

    let school = new DegreeCert("Sonoma State University", "B.S. Computer Science", "Graduated May, 2022");
    edu_txt.appendChild(edu_list_item({degree_cert: school, className: classNametext}));
    let comptia_a_plus = new DegreeCert("CompTIA", 'CompTIA A+', "Nov 1, 2024");
    edu_txt.appendChild(edu_list_item({degree_cert: comptia_a_plus, className: classNametext, is_cert: true}));

    edu.appendChild(edu_txt);


    return edu;
}

function edu_list_item({className="text", degree_cert, is_cert=false} : {className?: string, degree_cert: DegreeCert, is_cert?: boolean}) {
    let li = document.createElement("li");
    li.className = className;

    li.innerHTML = is_cert? degree_cert.cert_str() : degree_cert.degree_str();

    return li;
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