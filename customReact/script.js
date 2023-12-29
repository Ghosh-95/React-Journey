const root = document.getElementById('root');

function customRender(container, reactEl) {
    /*
    const el = document.createElement(reactEl.type);

    el.setAttribute('href', reactEl.props.href);
    el.setAttribute('target', reactEl.props.target);
    el.textContent = reactEl.children;

    container.appendChild(el);
    */

    const el = document.createElement(reactEl.type);
    el.textContent = reactEl.children;

    for (const [atts, vals] of Object.entries(reactEl.props)) {
        el.setAttribute(atts, vals);
    };

    container.appendChild(el);
};

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit Google website.',
};

customRender(root, reactElement);