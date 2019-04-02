const filterCheckboxGroup = () => {
    // let checkbox = document.getElementById(people);
    let checkboxItems = document.querySelectorAll('.form-check-input');
    let ids = [];
    
    checkboxItems.forEach(item => {
        let id = item.id;
        ids.push(id);
    });

    checkboxItems.forEach(item => item.onclick = (e) => {
        let currentId =  e.currentTarget.id;

        ids.forEach(id => {
            let item = document.getElementById(id);

            if (id.startsWith(currentId[0]) && item !== e.currentTarget) {
                if (e.currentTarget.checked) {
                    item.disabled = true;
                } else {
                    item.disabled = false;
                }
            }
        });
    });
}

export default filterCheckboxGroup;