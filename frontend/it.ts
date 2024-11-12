import { edu } from "./src/homepage.js";

function services(className: string = "text") {
    let service_div = document.createElement('div');
    service_div.className = className;
    service_div.style.marginTop = '2%';

    let title = document.createElement('h3');
    title.className = className;
    title.innerHTML = `<u>Services:</u>`
    service_div.appendChild(title);

    //services
    let service_list = [
        "Troubleshooting", 
        "networking", 
        "firewall", 
        "installation", 
        "desktop",
        "laptop",
        "mobile",
        "LAN",
        "software",
        "hardware",
        "email", 
        "virus removal", 
        "website help",
        "server",
        "Windows",
        "Linux",
        "POS Systems",
        "Android",
        "Apple"
    ];
    let service = (name: string) => {
        let service = document.createElement('li');
        service.className = className;
        service.textContent = name

        return service;
    }
    let services = document.createElement("ul");
    let space = 150;
    let columns = Math.round((window.innerWidth * 0.33)/space);
    services.style.columns = `${space}px ${columns}`;
    services.className = className;
    service_list.forEach((s) => {services.appendChild(service(s))});
    service_div.appendChild(services);

    const resize = new ResizeObserver((entries) => {
        let space = 185;
        let columns = Math.round((service_div.clientWidth * 80)/space);
        console.log(`${space}px ${columns}`);
        services.style.columns = `${space}px ${columns}`;
    });
    resize.observe(service_div);

    return service_div;
}

function contact(className: string = "text") {
    let contavt_div = document.createElement("div");
    contavt_div.className = className;
    contavt_div.style.marginTop = '2%'

    let title = document.createElement('h3');
    title.className = className;
    title.innerHTML = `<u class=${className}>Contact</u>`
    contavt_div.appendChild(title);

    let contacts = document.createElement('ul');
    contacts.className = className;
    let email = document.createElement('li');
    email.className = className;
    let e_address = "ellendrenit@gmail.com";
    email.innerHTML = `<a href="mailto: ${e_address}" class=${className}>${e_address}</a>`
    contacts.appendChild(email);
    contavt_div.appendChild(contacts);

    return contavt_div
}

function tab(className = "tabstext") {
    let div = document.createElement('div');
    div.className = className;
    div.style.height = '170px';

    let h3 = document.createElement('h3');
    h3.className = className;
    h3.innerHTML = `Contact me for IT help<br />- Luke T. Shoulders`;
    div.appendChild(h3);

    let con = contact(className)
    con.style.border = "none";
    div.appendChild(con);

    return(div);
} 

function tear_away(className: string = "tabs") {
    let nbr_tabs = 8;
    let tab_div = document.createElement('div');
    tab_div.className = className;

    for (let i = 0; i < nbr_tabs; i++) {
        tab_div.appendChild(tab('tabstext'));
    }

    return tab_div;
}

export default function it(className?: string, classNametext?: string) {
    let _className = className? className : "info";
    let _classNametext = classNametext? classNametext : "text";

    let it = document.createElement('div');
    it.className = _className;

    let title = document.createElement('h3');
    title.className = _classNametext;
    title.innerHTML = `<u>It Services:</u>`
    it.appendChild(title);

    let desc = document.createElement('p');
    desc.className = _classNametext;
    desc.style.margin = "2%";
    desc.textContent = `I offer IT services for both office and home needs in Sonoma County, CA. 
        Email me with questions about services or to set up an appointment`
    it.appendChild(desc);

    it.appendChild(services());
    it.appendChild(edu());
    it.appendChild(contact());
    it.appendChild(tear_away());

    return it;
} 