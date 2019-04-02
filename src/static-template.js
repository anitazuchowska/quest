const staticTemplateElem = `
<section class="zad-1">
    <div class="container">
        <h1>Zadanie 1</h1>
        <input type="text" id="palindrome" name="palindrome" placeholder="Print Palindrome here" class="form-control">
        <button id="checkPalindrome" class="btn btn-blue">Check if sentence is palindrome</button>
    </div>
</section>

<section class="zad-2">
    <div class="container">
        <h1>Zadanie 2</h1>
        <h4>Input with multiple tags and dynamic autocomplete</h4>
        <form>
            <div class="form-group">
                <div class="search-container">
                    <input id="search" type="text" name="tags" placeholder="Type query here" class="typeahead form-control">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline fa-search fa-w-16 fa-fw"><path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" class=""></path></svg>
                </div>
                <span class="tag tag-info" id="tag_1">
                    <span>very very very very very very very very val1</span>
                    <a href="#" class="tag-remove" id="tag_Remover_1" tagidtoremove="1">x</a>
                </span>
                <span class="tag tag-info" id="tag_2">
                    <span>val2</span>
                    <a href="#" class="tag-remove" id="tag_Remover_2" tagidtoremove="2">x</a>
                </span>
                <span class="tag tag-info" id="tag_3">
                    <span>Very very very very very very very very very long val3</span>
                    <a href="#" class="tag-remove" id="tag_Remover_3" tagidtoremove="3">x</a>
                </span>
                <span class="tag tag-info" id="tag_4">
                    <span>val4</span>
                    <a href="#" class="tag-remove" id="tag_Remover_4" tagidtoremove="4">x</a>
                </span>
                <span class="tag tag-info" id="tag_5">
                    <span>Very very very very very very very very very long val5</span>
                    <a href="#" class="tag-remove" id="tag_Remover_5" tagidtoremove="5">x</a>
                </span>
                <button class="btn btn-blue">Edit filter</button>
                <input type="hidden" name="hidden-tags" value="val1,val2,val3,val4,val5">
            </div>
        </form>
    </div>
</section>

<section class="zad-3">
    <div id="registration-form-container" class="container">
        <div class="row">
            <div class="col-12 col-sm-6">
                <h1>Zadanie 3</h1>
                <form class="registration" action="" method="" autocomplete="off"></form>
            </div>
        </div>
    </div>
</section>

<section class="zad-4">
    <div class="container">
        <h1>Zadanie 4</h1>
        <form class="formPeopleGroup" action="" method="" autocomplete="off"></form>
    </div>
</section>
`;

export default staticTemplateElem;