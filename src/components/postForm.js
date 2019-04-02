const postForm = (url, formData, form) => {
    
fetch(url, {
        method: "post",
        body: formData
    })
    .then(res => res.text())
    .then(text => {
        form.innerHTML = `${text}`;
    })
    .catch(error => {
        console.log("Błąd wysyłki formularza");
    });
}
export default postForm;