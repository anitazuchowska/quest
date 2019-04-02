import postForm from "./postForm.js";

const validateForm = (form) => {
    let submitButton = document.querySelector('.btn-submit');
    form.onsubmit = (e) => {
        e.preventDefault();
        let fields = form.querySelectorAll('.form-control');
        let url = form.action;

        const formData = new FormData();

        fields.forEach(field => {
            field.disabled  = 'disabled';
            let name = field.name;
            let value = field.value;
            let strippedString = value.replace(/(<([^>]+)>)/ig,"");
    
            formData.append(name, strippedString);
        });

        submitButton.disabled = 'disabled';
        submitButton.innerText = 'Please wait ...';

        postForm(url, formData, form);
        
        return false;
    }
}

export default validateForm;