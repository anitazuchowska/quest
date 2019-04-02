import validateForm from "./validateForm.js";

const fetchRegistryFormData = (form) => {
    fetch("./assets/registry.json")
    .then(resp => resp.json())
    .then(resp => {
        let url = resp.url;
        let method = resp.method;
        let submitButton = document.createElement('div');
        submitButton.innerHTML += `<button type="submit" class="btn btn-blue btn-submit">${resp.submit_text}</button>`;

        form.action = url;
        form.method = method;
        
        resp.fields.forEach(field => {
            let label = field.label;
            let required = field.required === true ? 'required' : '';
            let type = field.type;
            let field_name = field.field_name;
            let formGroup = document.createElement('div');
            
            formGroup.classList.add('form-group');
            formGroup.innerHTML += `
                    <label for="${field_name}">${label}<span aria-hidden="true" class="${required}">*</span></label>
                    <input type="${type}" class="form-control" id="${field_name}" name="${field_name}" ${required}>
                    <small class="form-text text-muted ${required}">This field is required</small>`;
            form.insertAdjacentElement('beforeend', formGroup);
        });
        form.insertAdjacentElement('beforeend', submitButton);
        validateForm(form);
    })
    .catch(error => console.dir("Błąd: ", error));
  }

  export default fetchRegistryFormData;