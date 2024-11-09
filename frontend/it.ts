export default function it(className?: string, classNametext?: string) {
    let _className = className? className : "info";
    let _classNametext = classNametext? classNametext : "text";

    let it = document.createElement('div');
    it.className = _className;

    let title = document.createElement('h3');
    title.className = _classNametext;
    title.innerHTML = `<u>It Services:</u>`
    it.appendChild(title);

    return it;
} 