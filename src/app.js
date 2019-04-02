if (module.hot) {
    module.hot.accept()
}
import './app.scss';
import staticTemplateElem from "./static-template";
import testPalindrome from "./components/testPalindrome";
import fetchRegistryFormData from "./components/registry-form";
import fetchPeopleFormData from "./components/people-form";

const root = document.createElement("div");
root.innerHTML = `${staticTemplateElem}`;
document.body.appendChild(root);

let form = document.querySelector('.registration');
let formPeopleGroup = document.querySelector('.formPeopleGroup');

fetchRegistryFormData(form);
testPalindrome();
fetchPeopleFormData(formPeopleGroup);