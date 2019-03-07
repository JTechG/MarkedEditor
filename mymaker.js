var el = domvm.defineElement,
    cv = domvm.createView;

var HelloView = {
    render: function(vm, data) {
        return el("h1", {style: "color: red;"}, "Hello " + data.name);
    }
};

var data = {name: "Leon"};

var vm = cv(HelloView, data).mount(document.body);



