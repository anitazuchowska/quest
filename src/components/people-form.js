import filterCheckboxGroup from './filterCheckboxGroup';

const fetchPeopleFormData = (form) => {
    fetch("./assets/people.json")
    .then(resp => resp.json())
    .then(resp => {
        resp.peoples.forEach(people => {
            let name = people.name;
            let formGroup = document.createElement('div');
            
            formGroup.classList.add('form-check');
            formGroup.innerHTML += `
                <input type="checkbox" class="form-check-input" id="${name}-name">
                <label class="form-check-label" for="${name}-name">${name}</label>`;
            form.insertAdjacentElement('beforeend', formGroup);
        });

        filterCheckboxGroup();
    })
    .catch(error => console.dir("Błąd: ", error));
  }

  export default fetchPeopleFormData;