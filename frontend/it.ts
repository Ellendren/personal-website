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
        "software",
        "hardware",
        "email", 
        "virus removal", 
        "website help"
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

    return service_div;
}

function contact(className: string = "text") {
    let contact_div = document.createElement("div");
    contact_div.className = className;
    contact_div.style.marginTop = '2%'
    contact_div.style.float = 'bottom';

    let title = document.createElement('h3');
    title.className = className;
    title.innerHTML = `<u>Contact</u>`
    contact_div.appendChild(title);

    let contacts = document.createElement('ul');
    contacts.className = className;
    let email = document.createElement('li');
    email.className = className;
    let e_address = "ellendrenit@gmail.com";
    email.innerHTML = `<a href="mailto: ${e_address}">${e_address}</a>`
    contacts.appendChild(email);
    contact_div.appendChild(contacts);

    return contact_div
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

    return it;
} 